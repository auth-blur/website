const path = require("path")

module.exports = {
    webpackFinal: (config) => {
        Object.assign(config.resolve.alias,{
            "@styles": path.resolve(__dirname,"../styles/"),
            "@components": path.resolve(__dirname,"../components/"),
            "@layouts": path.resolve(__dirname,"../layouts/"),
            "@config": path.resolve(__dirname,"../config/"),
            "@lib": path.resolve(__dirname,"../lib/")
        })
        config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader?modules=true'],
            include: path.resolve(__dirname, '../'),
        })
        return config
    },
    stories: [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials"
    ],
}
