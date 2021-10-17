export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iguma',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.6.0.min.js', 
        integrity: 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=',
        crossorigin: 'anonymos'
      }
      // { src: 'node_modules/gsap/DrawSVGPlugin.js' },
      // { src: 'node_modules/gsap/ScrollToPlugin.js' },
      // { src: 'node_modules/gsap/TextPlugin.js' },
      // { src: 'node_modules/gsap/ScrollTriggerPlugin.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'static/css/normalize.css',
    'static/css/style.css'
  ],

  // Scripts

  script: [
    // {  type: 'module', src: 'app.js'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-chartist.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['gsap'],
  }
}
