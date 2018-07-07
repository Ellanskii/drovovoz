const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/drovovoz.build/'
    }
} : {}

module.exports = {
    router: {
        linkActiveClass: 'is-active'
    },
    /*
     ** Headers of the page
     */
    head: {
        title: 'frontend',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Front-end for drovovoz.ru'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: {color: '#7957d5'},

    css: [
        'assets/main.css'
    ],

    modules: [
        'nuxt-buefy',
        [
            '@nuxtjs/yandex-metrika',
            {
                id: '49423855',
                webvisor: true,
                clickmap: true,
                useCDN: false,
                trackLinks: true,
                accurateTrackBounce: true,
            }
        ],
        ['@nuxtjs/google-analytics', {
            id: 'UA-121960121-1'
        }]
    ],

    plugins: [
        {src: '~plugins/yandex-maps.js', ssr: false},
        {src: '~plugins/smoothscroll.js', ssr: false},
    ],
    /*
     ** Build configuration
     */
    build: {
        analyze: true,
        vendor: ['axios'],
        /*
         ** Run ESLint on save
         */
        extend (config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },

    ...routerBase
}
