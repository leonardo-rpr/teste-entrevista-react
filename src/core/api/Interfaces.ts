export interface GetResourceInterface {
  endpoint: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  data?: Record<string, any>;
  params?: Record<string, any>;
}

export interface GetPublicResourceInterface extends GetResourceInterface {
  headers: Record<string, any>;
}
