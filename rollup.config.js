import metainfo from "./src/metainfo.js"

export default {
    input: "main.js",
    output: {
        file: "dist/Bring_UserScript_to_ViaBrowser.js",
        format: "iife",
        // sourcemap: true,
        banner: metainfo
    }
}