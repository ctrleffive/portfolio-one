module.exports = {
  siteMetadata: {
    title: `Chandu J S 💻 Full Stack Developer`,
    emails: [
      'hello',
      'hola',
      'bonjour',
      'hi',
      'hallo',
      'ciao',
      'namaste',
      'salaam',
    ],
    skills: [
      'JavaScript',
      'Dart & Flutter',
      'CSS3',
      'HTML5',
      'Electron',
      'MongoDB',
      'Mobile & Responsive Design',
      'Node.js',
      'Firebase',
      'WebRTC, WebSockets',
      'PHP',
      'Twitter',
      'MySQL',
      'React',
      'Angular',
      'Gatsby',
      'GraphQL',
      'Express',
      'Gulp',
      'WordPress',
      'jQuery',
      'Bootstrap',
      'Photography',
      'Google Maps',
    ],
    social: [
      {
        service: `DEV Community`,
        url: `https://dev.to/ctrleffive`,
      },
      {
        service: `Telegram`,
        url: `https://t.me/ctrleffive`,
      },
      {
        service: `GitHub`,
        url: `https://github.com/ctrleffive`,
      },
      {
        service: `Instagram`,
        url: `https://instagram.com/ctrleffive`,
      },
      {
        service: `LinkedIn`,
        url: `https://linkedin.com/in/ctrleffive`,
      },
      {
        service: `Twitter`,
        url: `https://twitter.com/ctrleffive`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-97JFNZHF9C',
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\:400,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: 'ctrleffive',
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        purgeOnly: ['css/'],
      },
    },
  ],
}
