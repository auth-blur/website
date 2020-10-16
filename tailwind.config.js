module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true,
    },
    purge: [],
    theme: {
        fontFamily: {
            display: ["Inter", "sans-serif"],
        },
        borderRadius: {
            "none": "0",
            "sm": "0.25rem",
            "default": "1rem",
            "md": "0.5rem",
            "lg": "0.75rem",
            "full": "9999px"
        },
        extend: {
            colors: {
                primary: {
                    500: "#A4463F",
                    400: "#F15137",
                    300: "#F86F64",
                    200: "#FF8278",
                    100: "#FBA29B",
                    "light": "#FED4D0"
                },
                secondary: {
                    500: "#933759",
                    400: "#EA226C",
                    300: "#FD5392",
                    200: "#FF8AB5",
                    100: "#FFA6C7",
                },
                alt: {
                    500: "#FFFFFF",
                    400: "#FBA29B",
                    300: "#FED4D0",
                    200: "#FFFFFF",
                    100: "#FFFFFF",
                }
            }
        },
    },
    variants: {},
    plugins: [],
}
