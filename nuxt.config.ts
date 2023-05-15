import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      charset: 'utf-8',

      title: 'ЖК "2 Кита"',
      meta: [{ name: 'description', content: 'Квартиры рядом с городским пляжем' }, {
        name: 'msapplication-TileColor', content: '#ffffff'
      }, {
        name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'
      }, {
        name: 'theme-color', content: '#ffffff'
      }
      ],
      link: [{
        rel: 'apple-touch-icon', sizes: '57x57', href: "/apple-icon-57x57.png"
      },
      { rel: 'apple-touch-icon', sizes: '60x60', href: "/apple-icon-60x60.png", },
      { rel: 'apple-touch-icon', sizes: '72x72', href: "/apple-icon-72x72.png" },
      { rel: 'apple-touch-icon', sizes: '76x76', href: "/apple-icon-76x76.png" },
      { rel: 'apple-touch-icon', sizes: '114x114', href: "/apple-icon-114x114.png" },
      { rel: 'apple-touch-icon', sizes: '120x120', href: "/apple-icon-120x120.png" },
      { rel: 'apple-touch-icon', sizes: '144x144', href: "/apple-icon-144x144.png" },
      { rel: 'apple-touch-icon', sizes: '152x152', href: "/apple-icon-152x152.png" },
      { rel: 'apple-touch-icon', sizes: '180x180', href: "/apple-icon-180x180.png" },
      { rel: 'apple-touch-icon', sizes: '192x192', href: "/apple-icon-192x192.png" },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: "/favicon-32x32.png" },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: "/favicon-96x96.png" },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: "/favicon-16x16.png" },
      { rel: 'manifest', href: "/manifest.json" },

      ]
    }
  }
});
