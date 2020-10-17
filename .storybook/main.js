const path = require("path")

module.exports = {
    webpackFinal: (config) => {
        Object.assign(config.resolve.alias, {
            "@styles": path.resolve(__dirname, "../styles/"),
            "@components": path.resolve(__dirname, "../components/"),
            "@layouts": path.resolve(__dirname, "../layouts/"),
            "@config": path.resolve(__dirname, "../config/"),
            "@lib": path.resolve(__dirname, "../lib/"),
        })
        return config
    },
    stories: [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-css-modules-preset",
    ],
}
