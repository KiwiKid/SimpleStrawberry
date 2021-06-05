const withPlugins = require('next-compose-plugins');
//const optimizedImages = require('next-optimized-images');

module.exports = {
    // Export to expect url for for Github pages
    serverRuntimeConfig: {
        staticFolder: (!!process.env.GITHUB_RUN_NUMBER ? '/SimpleStrawberry' : ''),
    },
    async rewrites() {
        return [
          {
            source: '/',
            destination: '/SimpleStrawberry',
          },
        ]
    },
}