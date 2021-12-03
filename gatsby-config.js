require(`dotenv`).config({
    path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
    siteMetadata: {
        siteTitle: `Adrien`,
        siteTitleAlt: `Adrien Chinour`,
        siteHeadline: `Développeur web indépendant.`,
        siteUrl: `https://adrienchinour.me`,
        siteDescription: `Adrien Chinour, développeur Web indépendant.`,
        siteLanguage: `fr`,
        siteImage: `/static/banner.png`,
        author: `@adrienchinour`,
    },
    plugins: [{
            resolve: `gatsby-plugin-plausible`,
            options: {
                domain: `https://analytics.chinour.dev/`,
            },
        },
        {
            resolve: `gatsby-plugin-umami`,
            options: {
                websiteId: 'a090507a-de66-4f88-9551-bc4913a02134',
                srcUrl: 'https://umami.chinour.dev/umami.js',
                includeInDevelopment: false,
                autoTrack: true,
                respectDoNotTrack: true
            },
        },
        {
            resolve: `gatsby-plugin-social-banners`,
            options: {
                baseImg: `static/banner.png`
            }
        },
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            // See the theme's README for all available options
            options: {
                navigation: [{
                        title: `Blog`,
                        slug: `/blog`,
                    },
                    {
                        title: `À Propos`,
                        slug: `/about`,
                    },
                    {
                        title: `Contact`,
                        slug: `/contact`,
                    }
                ],
                externalLinks: [{
                        name: `GitHub`,
                        url: `https://github.com/adrien-chinour`,
                    },
                    {
                        name: `Stack Overflow`,
                        url: `https://stackoverflow.com/users/13884867/adrien-chinour`,
                    },
                    {
                        name: `Mon CV`,
                        url: `/adrien-chinour.pdf`
                    }
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    process.env.GOOGLE_ANALYTICS_ID, // Google Analytics / GA
                    process.env.AW_CONVERSION_ID, // Google Ads / Adwords / AW
                    process.env.DC_FLOODIGHT_ID, // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Adrien Chinour - Blog`,
                short_name: `adrienchinour.me`,
                description: `Adrien Chinour, développeur Web indépendant.`,
                start_url: `/`,
                lang: `fr`,
                background_color: `#fff`,
                theme_color: `#6B46C1`,
                display: `standalone`,
                icon: `static/icon.png`,
                cache_busting_mode: `name`,
                icon_options: {
                    purpose: `any maskable`,
                },
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
                analyzerMode: `static`,
                reportFilename: `_bundle.html`,
                openAnalyzer: false,
            },
        },
    ].filter(Boolean),
}