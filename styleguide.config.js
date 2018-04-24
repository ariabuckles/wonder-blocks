const {createConfig, babel, postcss} = require("webpack-blocks");

module.exports = {
    webpackConfig: createConfig([babel(), postcss()]),
    styleguideDir: "docs",
    sections: [
        {
            name: "Typography",
            content: "packages/wonder-blocks-typography/docs.md",
            components: "packages/wonder-blocks-typography/components/*.js",
        },
        {
            name: "Color",
            content: "packages/wonder-blocks-color/docs.md",
        },
        {
            name: "Grid (Prototype)",
            content: "packages/wonder-blocks-grid/docs.md",
            components: "packages/wonder-blocks-grid/components/*.js",
        },
        {
            name: "Core",
            content: "packages/wonder-blocks-core/docs.md",
            components: "packages/wonder-blocks-core/components/*.js",
        },
        {
            name: "Modal",
            content: "packages/wonder-blocks-modal/docs.md",
            components: "packages/wonder-blocks-modal/components/*.js",
        },
    ],

    // These values control our custom styles.
    template: {
        head: {
            links: [
                {
                    // Load Lato from Google Fonts.
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css?family=Lato",
                },
            ],
        },
    },
    theme: {
        fontFamily: {
            // Apply Lato to the Styleguidist UI.
            base: '"Lato", sans-serif',
        },
    },
    styles: {
        Playground: {
            preview: {
                // Apply Lato to example areas.
                fontFamily: '"Lato", sans-serif',

                // Make the preview area resizable.
                resize: "both",
                overflow: "auto",
            },
        },
    },
};