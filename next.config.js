module.exports = {
    assetPrefix: (!!process.env.GITHUB_RUN_NUMBER ? '/SimpleStrawberry' : ''),
}