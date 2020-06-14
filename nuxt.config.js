
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: "shortcut icon", type: "image/x-icon", href: "img/logo/favicon.ico" },
      { rel: "stylesheet", href: "css/bootstrap.min.css" },
      { rel: "stylesheet",  href: "css/mediabox.min.css" },
      { rel: "stylesheet", href: "css/owl.carousel.css" },
      { rel: "stylesheet", href: "css/owl.transitions.css" },
      { rel: "stylesheet", href: "css/meanmenu.min.css" },
      { rel: "stylesheet", href: "css/font-awesome.min.css" },
      { rel: "stylesheet", href: "css/flaticon.css" },
      { rel: "stylesheet", href: "css/icon.css" },
      { rel: "stylesheet", href: "css/magnific.min.css" },
      { rel: "stylesheet", href: "css/venobox.css" },
      { rel: "stylesheet", href: "css/style.css" },
      { rel: "stylesheet", href: "css/responsive.css" },

    ],

    script: [
      { src: "/plugins/mediabox.min.js", body: true },
      { src: "/plugins/mixitup.min.js", body: true },

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
