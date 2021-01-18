export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'Jeroen Claessens',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxt/content',
  ],

  fontawesome: {
    icons: {
      regular: [
        'faEnvelope',
      ],
      brands: [
        'faLinkedinIn',
        'faGithub',
      ],
    },
  },

  content: {},

  build: {
  },
};
