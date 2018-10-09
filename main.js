const { UserScript1: _test_script, location } = require("./dev/test.js")

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

        this.url = this.getHosts().size == 1 ? [...this.getHosts()][0] : "*"

        this.code = toBase64(this.getCode(user_script))

        delete this.header
    }

    getHead(head_name) {
        const head = this.header.match(`@${head_name}\\s+(.+)`)
        return head ? head[1] : ""
    }

    /**
     * @returns {String[]} 获取UserScript的所有`@match`元属性
     */
    getMatches() {
        const r = /@match\s+(.+)/g

        return (this.header.match(r) || ["*"])
            .map(x => x.replace(r, "$1"))
    }

    getHosts() {
        const r = /@match.+:\/\/(.+)\//g

        return new Set(
            (this.header.match(r) || ["*"])
                .map(x => x.replace(r, "$1"))
        )

    }

    getCode(user_script) {

        return `
(function () {

var matches = (['${this.getMatches().join("','")}']).map(function (x) {
    return !!location.href.match(x.replace(/\\*/g, ".*"))
})
        
if(!matches.includes(true)) return;

${user_script.split("==/UserScript==")[1]}
})();
        `
    }

    setId(id) {
        this.id = id
        return this
    }

    toString() {
        return JSON.stringify(this)
    }

    toObject() {
        return { ...this }
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

if (getGreasyforkId()) {
    const install_btn = document.querySelector(".install-link")
    install_btn.onclick = async () => {
        const href = install_btn.href
        install_btn.href = "#"

        const user_script = await (await fetch(href)).text()
        init(user_script)
    }
}
