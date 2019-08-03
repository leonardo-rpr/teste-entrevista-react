const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      components: path.resolve(__dirname, 'src', 'app', 'components'),
      screens: path.resolve(__dirname, 'src', 'app', 'screens'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      config: path.resolve(__dirname, 'src', 'config'),
      forms: path.resolve(__dirname, 'src', 'core', 'forms'),
      reducers: path.resolve(__dirname, 'src', 'core', 'redux', 'reducers'),
      actions: path.resolve(__dirname, 'src', 'core', 'redux', 'actions'),
      sagas: path.resolve(__dirname, 'src', 'core', 'redux', 'sagas'),
      store: path.resolve(__dirname, 'src', 'core', 'redux', 'store'),
      api: path.resolve(__dirname, 'src', 'core', 'api'),
      apiTypes: path.resolve(__dirname, 'src', 'core', 'api', 'types.d.ts'),
    },
  };

  return config;
};
