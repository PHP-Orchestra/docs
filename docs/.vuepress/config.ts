import { defaultTheme } from 'vuepress'

export default  {
  theme: defaultTheme({
    // default theme config
    colorMode: 'auto',
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
    sidebar: [
      {
        text: 'Guide',
        link: '/guide/',
        children: [
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