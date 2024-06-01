const { dependencies } = require('./package.json');

module.exports = {
  name: 'mf_host',
  shared: {
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react-dom'],
    },
    'react-router-dom': {
      singleton: true,
      eager: true,
      requiredVersion: dependencies['react-router-dom'],
    },
  }
};