module.exports = {
    assetPrefix: (!!process.env.GITHUB_RUN_NUMBER ? '/SimpleStrawberry' : ''),
    env: {
       SPREADSHEET_ID: '1alulaen0qSwhYzk6KA2vnN3xtfhxpbQie6mIrHJCzI4',
       DOCUMENT_ID: '1Atyi7Wvs2_ziSZ2KkYrZhX8bJ6icIJv0e8t1OMXTwLk',
       BUILD_ID: process.env.GITHUB_RUN_NUMBER || 'local'
    },
    webpack: config => {
        config.node = { 
            fs: 'empty',
            child_process: 'empty',
            net: 'empty',
            dns: 'empty',
            tls: 'empty'
        }
/*
        config.plugins = [
            ...config.plugins,
      
            // Read the .env file
            new Dotenv({
              path: path.join(__dirname, '.env'),
              systemvars: true,
            }),
          ]*/
        return config
    }
}