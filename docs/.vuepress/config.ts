import { defaultTheme } from 'vuepress'

export default  {
  theme: defaultTheme({
    // default theme config
    colorMode: 'auto',
    docsRepo: 'php-orchestra/docs',
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
    ],
    repo: 'php-orchestra/orchestra',
    sidebar: [
      {
        text: 'Guide',
        link: '/guide/',
        children: [
          {
            text: 'Introduction',
            link: '/guide/'
          },
          {
            text: 'Getting Started',
            link: '/guide/getting-started'
          }
        ]
      },
      {
        text: 'Commands',
        link: '/commands/',
        children: [
          {
            text: 'Solution',
            link: '/commands/solution/initialize',
            children: [
              '/commands/solution/initialize'
            ]
          }
        ]
      }
    ]
  }),
}