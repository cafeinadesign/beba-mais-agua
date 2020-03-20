module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Beba mais água'
                return args
            })
    },
    pwa: {
        name: 'Beba mais água',
        themeColor: '#4DBA87',
        msTileColor: '#FFFFFF',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black'
    }
}