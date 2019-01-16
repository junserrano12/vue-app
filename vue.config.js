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
        port: 8080,
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        https: false, // true for self-signed, object for cert authority
    }
}
