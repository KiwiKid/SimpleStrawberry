module.exports = {
    assetPrefix: (!!process.env.GITHUB_RUN_NUMBER ? '/SimpleStrawberry' : ''),
    env: {
       SPREADSHEET_ID: '1alulaen0qSwhYzk6KA2vnN3xtfhxpbQie6mIrHJCzI4'
    }
}