const themeConfig = require('./config/theme/')

module.exports = {
  title: "jin-blog",
  description: 'Some people see the ugliness and chaos of the world, but I choose to see the beauty of the world!',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  