module.exports = {
    assetPrefix: (!!process.env.GITHUB_RUN_NUMBER ? '/SimpleStrawberry' : ''),
    env: {
       SPREADSHEET_ID: '1alulaen0qSwhYzk6KA2vnN3xtfhxpbQie6mIrHJCzI4',
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