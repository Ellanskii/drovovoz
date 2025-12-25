// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/i18n',
  ],

  strapi: {
    devtools: true,
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      // { code: 'es', name: 'Español', file: 'es.json' },
      // { code: 'fr', name: 'Français', file: 'fr.json' },
      // { code: 'de', name: 'Deutsch', file: 'de.json' },
      // { code: 'zh', name: '中文', file: 'zh.json' },
      // { code: 'ja', name: '日本語', file: 'ja.json' },
      // { code: 'ar', name: 'العربية', file: 'ar.json' },
      // { code: 'pt', name: 'Português', file: 'pt.json' },
      // { code: 'it', name: 'Italiano', file: 'it.json' }
    ],
    defaultLocale: 'ru',
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
})