const { UserScript1: _test_script } = require("./test.js")
const { toBase64 } = require("./base64.js")

class ViaScript {
    constructor(user_script) {
        this.header = user_script
            .split("==UserScript==")[1]
            .split("==/UserScript==")[0]

        this.author = this.getHead("author")
        this.name = this.getHead("name")
        this.info = this.getHead("description")

        this.url = this.getUrls()

        this.code = toBase64(user_script.split("==/UserScript==")[1])

        delete this.header
    }

    getHead(head_name) {
        return this.header.match(`@${head_name}\\s+(.+)`)[1]
    }

    getUrls() {
        const r = /@match.+:\/\/(.+)\//g

        return (this.header.match(r) || ["*"])
            .map(x => x.replace(r, "$1"))
            .join(",")
    }

    toString() {
        return JSON.stringify(this)
    }

    toObject() {
        return Object.assign({}, this)
    }

    static from(user_script) {
        return new ViaScript(user_script)
    }
}


const init = (user_script = _test_script) => {

    if (!user_script.includes("==UserScript==") || !user_script.includes("==/UserScript==")) {
        return;
    }

    console.log(ViaScript.from(user_script).toString())


}


init()