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
        siteImage: `static/banner.jpg`,
        author: `@adrienchinour`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-social-banners`,
            options: {
                baseImg: 'static/banner.jpg'
            }
        },
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            // See the theme's README for all available options
            options: {
                navigation: [
                    {
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
                externalLinks: [
                    {
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
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
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
                background_color: `#fff`,
                theme_color: `#6B46C1`,
                display: `standalone`,
                icon: "static/icon.png"
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
