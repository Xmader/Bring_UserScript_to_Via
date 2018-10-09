import resolve from "rollup-plugin-node-resolve"
import babel from "rollup-plugin-babel"
import metainfo from "./src/metainfo.js"

export default {
    input: "main.js",
    output: {
        file: "dist/bring_userscript_to_via.js",
        format: "iife",
        // sourcemap: true,
        banner: metainfo
    },
    plugins: [
        resolve(),
        babel()
    ]
}