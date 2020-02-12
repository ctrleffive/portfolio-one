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
    uses: [
      {
        title: `Titles`,
        description: ``,
        items: [
          {
            emoji: `🖥`,
            name: `Full Stack Developer`,
            description: ``,
            link: ``,
          },
          {
            emoji: `📝`,
            name: `Software Engineer`,
            description: ``,
            link: ``,
          },
          {
            emoji: `📱`,
            name: `App Developer`,
            description: ``,
            link: ``,
          },
          {
            emoji: `🕸`,
            name: `Web Developer`,
            description: ``,
            link: ``,
          },
          {
            emoji: `📸`,
            name: `Photographer`,
            description: `Checkout my instagram page 😊`,
            link: `https://instagram.com/ctrleffive`,
          },
        ],
      },
      {
        title: `Hardware`,
        description: ``,
        items: [
          {
            emoji: `💻`,
            name: `Macbook Air 13"`,
            description: `I've used windows, linux & mac both professionally and for personal use. I was a Ubuntu user for a long time, but nothing beats the ease of use and developer friendliness of a mac.`,
            link: ``,
          },
          {
            emoji: `📷`,
            name: `Sony α6400`,
            description: ``,
            link: `https://www.sony.com/electronics/interchangeable-lens-cameras/ilce-6400`,
          },
          {
            emoji: `📱`,
            name: `iPhone SE`,
            description: ``,
            link: ``,
          },
          {
            emoji: `🎧`,
            name: `AirPods`,
            description: ``,
            link: `https://www.apple.com/airpods-2nd-generation/`,
          },
        ],
      },
      {
        title: `Software`,
        description: ``,
        items: [
          {
            emoji: `🔥`,
            name: `VS Code`,
            description: ``,
            link: `https://code.visualstudio.com/`,
          },
          {
            emoji: `🔥`,
            name: `Figma`,
            description: ``,
            link: ``,
          },
          {
            emoji: `🔥`,
            name: `Lightroom`,
            description: ``,
            link: ``,
          },
          {
            emoji: `🔥`,
            name: `Photoshop`,
            description: ``,
            link: ``,
          },
          {
            emoji: `🔥`,
            name: `Google Chrom`,
            description: ``,
            link: ``,
          },
          {
            emoji: `🔥`,
            name: `Mozilla Firefox`,
            description: ``,
            link: ``,
          },
          {
            emoji: `🔥`,
            name: `Safari`,
            description: ``,
            link: ``,
          },
        ],
      },
      {
        title: `Mobile Apps`,
        description: ``,
        items: [
          {
            emoji: `🎵`,
            name: `Apple Music`,
            description: `I cannot live without this. ❤️`,
            link: ``,
          },
          {
            emoji: `🖼️`,
            name: `Google Photos`,
            description: ``,
            link: ``,
          },
        ],
      },
      {
        title: `Websites`,
        description: ``,
        items: [
          {
            emoji: `🔥`,
            name: `VS Code`,
            description: ``,
            link: `https://code.visualstudio.com/`,
          },
        ],
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
