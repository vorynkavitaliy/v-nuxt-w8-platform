const sortMediaQueries = require('postcss-sort-media-queries')
export default {
    head: {
        title: 'Nuxt W8 Platform',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    css: ['@/theme/styles.sass'],

    styleResources: {
        sass: ['@/theme/*.sass'],
    },

    env: {
        appName: 'Nuxt W8 Platform',
    },
    plugins: [],

    components: true,

    buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],

    modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/style-resources'],

    plugins: ['@/plugins/v-components'],

    axios: {
        baseURL: process.env.BASE_URL || 'http://localhost:3000'
    },

    pwa: {
        manifest: {
            name: 'Nuxt W8 Platform',
            lang: 'en',
            useWebmanifestExtension: false,
        },
        workbox: {
            /* workbox options */
        },

        meta: {
            /* meta options */
        },
    },

    build: {
        postcss: {
            extractCSS: { ignoreOrder: true },
            plugins: {
                'postcss-import': true,
                'postcss-url': false,
                'postcss-preset-env': {
                    browsers: ['ie >= 8', 'last 4 version'],
                    stage: 0,
                },
                'postcss-combine-media-query': true,
                'postcss-extract-media-query': {
                    stats: true,
                    extractAll: false,
                },
                'postcss-sort-media-queries': {
                    sort: 'mobile-first',
                },
            },
        },
    },
}
