const { UserScript1: _test_script } = require("./dev/test.js")
// const location = { href: "https://greasyfork.org/scripts/27819" }

const { toBase64 } = require("./base64.js")

const getGreasyforkId = () => {
    if (typeof location != "undefined") {
        const greasyfork_id = location.href.match(/greasyfork\.org\/.*scripts\/(\d+)/)
        return greasyfork_id && greasyfork_id[1]
    }
}

class ViaScript {
    constructor(user_script, id = getGreasyforkId() || `${new Date().getTime()}`) {
        this.header = user_script
            .split("==UserScript==")[1]
            .split("==/UserScript==")[0]

        this.id = id

        this.author = this.getHead("author")
        this.name = this.getHead("name")
        this.info = this.getHead("description")

        this.url = this.getUrls()

        this.code = toBase64(user_script.split("==/UserScript==")[1])

        delete this.header
    }

    getHead(head_name) {
        const head = this.header.match(`@${head_name}\\s+(.+)`)
        return head ? head[1] : ""
    }

    getUrls() {
        const r = /@match.+:\/\/(.+)\//g

        return (this.header.match(r) || ["*"])
            .map(x => x.replace(r, "$1"))
            .join(",")
    }

    setId(id) {
        this.id = id
        return this
    }

    toString() {
        return JSON.stringify(this)
    }

    toObject() {
        return Object.assign({}, this)
    }

    static from(...args) {
        return new ViaScript(...args)
    }
}


const init = (user_script = _test_script) => {

    if (!user_script.includes("==UserScript==") || !user_script.includes("==/UserScript==")) {
        return;
    }

    console.log(ViaScript.from(user_script).toString())


}


init()