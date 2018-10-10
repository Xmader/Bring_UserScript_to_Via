const fs = require("fs")
const path = require("path")
const ViaScript = require("../dist/via_script.bundle.js")

const content = fs.readFileSync(
    path.resolve(__dirname, "../dist/Bring_UserScript_to_ViaBrowser.js")
).toString()

const id = "65535"

const via_script = ViaScript.from(content).setId(id).toString()

const installation = `
var install_txt

function init() {
    if (window && window.via) {
        if(window.via.getInstalledAddonID().indexOf(${+id}) > -1){
            install_txt = "卸载成功！"
            document.querySelectorAll(".btn")[2].innerText = "卸载"
        }
        else {
            install_txt = "安装成功！"
            document.querySelectorAll(".btn")[2].innerText = "安装"
        }
    }
}

function install() {
    if (window && window.via) {
        window.via.addon("${Buffer.from(via_script).toString("base64")}")
        swal(install_txt, "", "success")
        init()
    } else {
        swal("安装失败！", "需要使用Via浏览器", "error")
    }
}

init()
`

fs.writeFileSync(
    path.resolve(__dirname, "../dist/installer.js"),
    installation
)
