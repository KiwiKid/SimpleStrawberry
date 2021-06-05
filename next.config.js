const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, { }]
], {
    // Export to expect url for for Github pages
    basePath: (process.env.CI == 'true' ? '/SimpleStrawberry' : ''),
})