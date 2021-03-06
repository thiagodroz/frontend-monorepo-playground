const withPlugins = require('next-compose-plugins');
const withNx = require('@nrwl/next/plugins/with-nx');
// const withTM = require('next-transpile-modules')([
//   'react-native',
//   'react-native-web',
// ]);

module.exports = withPlugins([
  // [withTM],
  [withNx],
], {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },
})
