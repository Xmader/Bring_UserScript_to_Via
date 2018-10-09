// import babel from 'rollup-plugin-babel';

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
// @version      0.3.5
// @description  将 UserScript/油猴脚本 带到Via浏览器
// @author       Xmader
// @match        *://greasyfork.org/*
// @match        *://*/*.js
// @grant        none
// ==/UserScript==
`
}