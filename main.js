/**
 * Bring UserScript to Via Browser
 * 将 UserScript/油猴脚本 带到Via浏览器
 * 
 * @author Xmader
 * @copyright Copyright (c) 2018 Xmader
 * 
 * Source Code: https://github.com/Xmader/Bring_UserScript_to_Via
 */

import { toBase64 } from "./src/base64.js"
import getGreasyforkId from "./src/get_greasyfork_id.js"
import ViaScript from "./src/via_script.js"

const init = (user_script) => {

    if (!user_script.includes("==UserScript==") || !user_script.includes("==/UserScript==")) {
        return;
    }

    // console.log(ViaScript.from(user_script).toObject())
    window.via.addon(
        toBase64(
            ViaScript.from(user_script).toString()
        )
    )

}

if (getGreasyforkId()) {
    const install_btn = document.querySelector(".install-link")
    if (install_btn) {
        install_btn.onclick = async () => {
            const href = encodeURI(install_btn.href)
            install_btn.attributes.removeNamedItem("href")
            install_btn.style.cursor = "pointer"

            const user_script = await (await fetch(href)).text()
            init(user_script)
        }
    }
} else if (typeof location != "undefined" && location.pathname.endsWith(".js")) {
    (async () => {
        const user_script = await (await fetch(location.href)).text()
        init(user_script)
    })()
}

