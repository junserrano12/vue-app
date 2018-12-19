module.exports = {
    productionSourceMap: false,

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
    }
}
