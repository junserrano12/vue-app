const path = require('path')

module.exports = {
    productionSourceMap: true,

    css: {
        modules: true,
        loaderOptions: {
            sass: {
                data : `
                    @import "@/assets/sass/base.scss";
                `
            }
        }
    },

    pluginOptions: {
        i18n: {
            locale: "en",
            fallbackLocale: "en",
            localeDir: "@/data/locales",
            enableInSFC: false
        }
    },

    devServer: {
        port: 80,
        compress: true,
        historyApiFallback: true,
        https: false
    }
}
