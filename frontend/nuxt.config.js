module.exports = {
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
    loading: {color: '#3B8070'},

    modules: [
        'nuxt-buefy'
    ],

    plugins: [
        { src: '~plugins/yandex-maps.js', ssr: false },
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
    }
}
