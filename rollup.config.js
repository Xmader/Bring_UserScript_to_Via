// import babel from 'rollup-plugin-babel';
import {version} from "./package.json"

export default {
    input: "main.js",
    output: {
        file: "dist/bring_userscript_to_via.js",
        format: "iife",
        sourcemap: true
    },
    banner: `
// ==UserScript==
// @name         Bring UserScript to Via Browser
// @namespace    https://www.xmader.com/
// @version      ${version}
// @description  将 UserScript/油猴脚本 带到Via浏览器
// @author       Xmader
// @match        *://greasyfork.org/*
// @match        *://*/*.js
// @grant        none
// ==/UserScript==
`
}