
// ==UserScript==
// @name         Bring UserScript to Via Browser
// @namespace    https://www.xmader.com/
// @version      1.0.0-rc.3
// @description  将 UserScript/油猴脚本 带到Via浏览器
// @author       Xmader
// @match        *://greasyfork.org/*
// @match        *://*/*.js
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    /**
     * Unicode字符串和Base64字符串互相转换, 兼容Node.js和浏览器
     * @author Xmader
     */

    class Base64 {

        static toBase64(str) {
            if (typeof Buffer != "undefined")
                return Buffer.from(str).toString("base64")
            else
                return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
                    return String.fromCharCode("0x" + p1)
                }))
        }

        static fromBase64(str) {
            if (typeof Buffer != "undefined")
                return Buffer.from(str, "base64").toString()
            else
                return decodeURIComponent(atob(str).split("").map((c) => {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                }).join(""))
        }

        encode(str) {
            return Base64.toBase64(str)
        }

        decode(str) {
            return Base64.fromBase64(str)
        }

    }
    const { toBase64 } = Base64;

    /**
     * 获取当前Greasyfork页面的脚本ID  
     * 如果当前页面不是Greasyfork脚本页面, 则返回null
     * @author Xmader
     * @copyright Copyright (c) 2018 Xmader
     */

    const getGreasyforkId = () => {
        if (typeof location != "undefined") {
            const greasyfork_id = location.href.match(/greasyfork\.org\/.*scripts\/(\d+)/);
            return greasyfork_id && greasyfork_id[1]
        }
    };

    /**
     * @class ViaScript: 转换 UserScript/油猴脚本 到 Via浏览器脚本
     * 
     * @author Xmader
     * @copyright Copyright (c) 2018 Xmader
     * 
     * Source Code: https://github.com/Xmader/Bring_UserScript_to_Via
     */

    class ViaScript {
        constructor(user_script, id = getGreasyforkId() || `${new Date().getTime()}`) {
            this.header = user_script
                .split("==UserScript==")[1]
                .split("==/UserScript==")[0];

            this.id = id;

            this.author = this.getHead("author");
            this.name = this.getHead("name");
            this.info = this.getHead("description");

            this.url = this.getHosts().size == 1 ? [...this.getHosts()][0] : "*";

            this.code = toBase64(this.getCode(user_script));

            delete this.header;
        }

        getHead(head_name) {
            const head = this.header.match(`@${head_name}\\s+(.+)`);
            return head ? head[1] : ""
        }

        /**
         * @returns {String[]} 获取UserScript的所有`@match`和`@include`元属性
         */
        getMatches() {
            const r = /@match\s+(.+)/g;
            const r1 = /@include\s+(.+)/g;

            return (this.header.match(r) || this.header.match(r1) || ["*"])
                .map(x => x.replace(r, "$1").replace(r1, "$1"))
        }

        getHosts() {
            const r = /@match.+:\/\/(.+)\//g;
            const r1 = /@include.+:\/\/(.+)\//g;

            return new Set(
                (this.header.match(r) || this.header.match(r1) || ["*"])
                    .map(x => x.replace(r, "$1").replace(r1, "$1"))
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
            this.id = id;
            return this
        }

        toString() {
            return JSON.stringify(this)
        }

        toObject() {
            return { ...this }
        }

        install() {
            if (window && window.via) {
                window.via.addon(
                    toBase64(
                        this.toString()
                    )
                );
            } else {
                throw new Error("安装失败: 需要使用Via浏览器")
            }
        }

        static from(...args) {
            return new ViaScript(...args)
        }
    }

    /**
     * Bring UserScript to Via Browser
     * 将 UserScript/油猴脚本 带到Via浏览器
     * 
     * @author Xmader
     * @copyright Copyright (c) 2018 Xmader
     * 
     * Source Code: https://github.com/Xmader/Bring_UserScript_to_Via
     */

    const init = (user_script) => {

        if (!user_script.includes("==UserScript==") || !user_script.includes("==/UserScript==")) {
            return;
        }

        // console.log(ViaScript.from(user_script).toObject())
        window.via.addon(
            toBase64(
                ViaScript.from(user_script).toString()
            )
        );

    };

    if (getGreasyforkId()) {
        const install_btn = document.querySelector(".install-link");
        if (install_btn) {
            install_btn.onclick = async () => {
                const href = encodeURI(install_btn.href);
                install_btn.attributes.removeNamedItem("href");
                install_btn.style.cursor = "pointer";

                const user_script = await (await fetch(href)).text();
                init(user_script);
            };
        }
    } else if (typeof location != "undefined" && location.pathname.endsWith(".js")) {
        (async () => {
            const user_script = await (await fetch(location.href)).text();
            init(user_script);
        })();
    }

}());
