import babel from "rollup-plugin-babel"
import rollup_config from "./rollup.config.js"

rollup_config.output.file = "dist/Bring_UserScript_to_ViaBrowser.BabelCompiled.js"

export default {
    ...rollup_config,
    plugins: [
        babel()
    ]
}