module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Kat Tschan',
    // Main Site Title
    title: `Kat Tschan | Developer`,
    // Description that goes under your name in main bio
    description: `I code cool things. she/her 🏳️‍⚧️`,
    // Optional: Twitter account handle
    author: `@tschankat`,
    // Optional: Github account URL
    github: `https://github.com/tschanadam`,
    // Content of the About Me section
    about: `I'm a high school student looking to go into coding later. Thanks for looking at my portfolio!`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Cryptoclickerz',
        description:
          'Cookie clicker, but with actual crypto! Link may or may not work at times due to development.',
        link: 'https://cryptoclickerz.com',
      },
      {
        name: 'mcmd',
        description:
          '[In progress] The easiest way to set up your Minecraft server, without a web GUI.',
        link: 'https://github.com/tschanadam/mcmd'
      },
      {
        name: 'Gamesrepo',
        description:
          '[Early development] A repository dedicated to preserving games of all types and generations.'
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Neoncraft Minecraft Server',
        description: 'Developer and Founding Admin, March 2020 - June 2020'
      },
      {
        name: 'Freelancer',
        description: 'Freelancing all sorts of Minecraft Things - June 2020 - Present',
        link: 'https://kattschan.me',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Server Softwares for Minecraft',
        description:
          'Bukkit, Spigot, Paper, Tuinity, Purpur',
      },
      {
        name: 'Server Things',
        description: 'Bash scripting, Remote Management, Security',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), Azure, Google Cloud Platform(GCP), Oracle Cloud',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
