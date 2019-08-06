import idx from 'idx';

const DEFAULT_ERROR = {
  status: 500,
  message: 'Erro interno',
};

const buildError = (response: string | Record<string, any>) => (typeof response === 'object'
    ? {
        status: response.status || 500,
        message: buildErrorMessage(response),
      }
    : {
        status: 500,
        message: response || DEFAULT_ERROR.message,
      });

const buildErrorMessage = (response: Record<string, any>) => {
  if (idx(response, _ => _.data.detail.message.length > 0)) {
    const mergedErrors = mergeErrors(response.data.detail.message);

    return mergedErrors;
  }

  return 'Este erro não possui uma mensagem definida';
};

const mergeErrors = (errors: any) => {
  if (Array.isArray(errors)) {
    const totalErrors = errors
      .map((error: any) => Object.values(error.constraints).map(value => value))
      .join(', ');

    return totalErrors;
  }

  return errors;
};

const throwError = (error: any) => (idx(error, _ => _.response) ? buildError(error.response) : DEFAULT_ERROR);

export default throwError;
