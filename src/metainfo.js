const { version, description } = require("../package.json")

module.exports = `
// ==UserScript==
// @name         Bring UserScript to Via Browser
// @namespace    https://www.xmader.com/
// @version      ${version}
// @description  ${description}
// @author       Xmader
// @match        *://greasyfork.org/*
// @match        *://*/*.js
// @grant        none
// @license      MIT
// ==/UserScript==
`