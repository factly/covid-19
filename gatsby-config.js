require('dotenv').config();
const path = require('path');

const {
  name,
  shortName,
  title,
  description,
  themeColor,
  backgroundColor,
  siteUrl,
  logo,
  author,
  type,
  googleAnalyticsID,
  favicon
} = require('./data/site-config');

module.exports = {
  siteMetadata: {
    title,
    description,
    author,
    siteUrl,
    logo,
    type,
    favicon
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "factly.in",
        //https://factly.in/wp-json/wp/v2/posts?categories=420
        protocol: "https",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: false,
        queryParams:[
          {
            matchRoute: "/posts",
            query: {
              categories: "420"
            }
          },
          {
            matchRoute: "/media",
            query: {
              search: "corona"
            }
          }
        ],
        includedRoutes: [
          "**/posts",
          "**/categories",
          "**/media",
          "**/tags",
        ]
      },
    },
    {
      resolve: '@fs/gatsby-plugin-drive',
      options: {
        folderId: process.env.GOOGLE_DRIVE_FOLDER_ID,
        keyFile: path.resolve(__dirname, 'client_secret.json'),
        destination: path.join(__dirname, 'src/static/images/drive'),
        exportGDocs: false,
      }
    },
    // {
    //   resolve: `gatsby-source-youtube-v2`,
    //   options: {
    //     channelId: ["UCpi2S8wW4xLlUCVryhyBtsA"],
    //     apiKey: process.env.GOOGLE_PRIVATE_KEY,
    //     maxVideos: 50 // Defaults to 50
    //   },
    // },
    {
      resolve: "gatsby-source-custom-api",
      options: {
          url: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLEQcsVYyf3IBYqmtPuCp2b_6XMdTG52MQ&key=${process.env.GOOGLE_PRIVATE_KEY}`,
          imageKeys: ["standard"],
          rootKey: "items",
          schemas: {
            items: `
                  snippet: snippet
                  contentDetails: contentDetails
              `,
              snippet: `
                channelId: String
                title: String
                publishedAt: Date
                channelTitle: String
                playlistId: String
                position: Int
                thumbnails: thumbnails
              `,
              thumbnails:`
                standard: standard
              `,
              standard:`
                url: String
                width: Int
                height: Int
              `,
              contentDetails: `
                videoPublishedAt: Date
                videoId: String
              `
          }

      }
    },
    '@bumped-inc/gatsby-plugin-optional-chaining',
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: googleAnalyticsID,
        head: true
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'gallery',
        path: path.join(__dirname, `src`, `static/images/drive`)
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name,
        short_name: shortName,
        start_url: '/',
        background_color: backgroundColor,
        theme_color: themeColor,
        display: 'minimal-ui',
        icon: favicon
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        whitelist: ['blockquote', 'embed-youtube', 'video-wrapper'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', disallow: '' }]
      }
    }
  ]
};
