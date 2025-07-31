const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  outputFileTracing: false,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
       name: 'footer_app', // diğerinde 'content_app' olacak
  library: { type: 'global', name: 'footer_app' }, // bu satır kritik
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './Footer': './components/Footer.jsx', // 'Content.jsx' olacak diğer app'te
  },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
          },
        },
          extraOptions: {
    exposePages: true,
    automaticAsyncBoundary: true,
    enableImageLoaderFix: true,
    enableUrlLoaderFix: true,
    isServer: true, // <- SSR için bu çok önemli
  },
      })
    );
    return config;
  },
};
