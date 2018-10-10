const fs = require("fs")
const path = require("path")
const ViaScript = require("../dist/via_script.bundle.js")

const content = fs.readFileSync(
    path.resolve(__dirname, "../dist/Bring_UserScript_to_ViaBrowser.js")
).toString()

const via_script = ViaScript.from(content).setId("65535").toString()

const installation = `
function install() {
    if (window && window.via) {
        window.via.addon("${Buffer.from(via_script).toString("base64")}")
        swal("安装成功！", "", "success")
    } else {
        swal("安装失败！", "需要使用Via浏览器", "error")
    }
}
`

fs.writeFileSync(
    path.resolve(__dirname, "../dist/installer.js"),
    installation
)
