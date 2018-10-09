const UserScript1 = `

// ==UserScript==
// @name         B站点击logo查看banner图片
// @namespace    https://www.xmader.com/
// @version      0.2
// @description  点击banner上的logo查看banner图片
// @author       Xmader
// @match        *://www.bilibili.com/*
// @match        https://www.xmader.com/

// @homepageURL  https://www.xmader.com/
// @license      MIT
// @copyright    Copyright (c) 2018 Xmader
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const init = async () => {
        let banner_img

        const head_logo = document.querySelector(".head-logo")

        if (!head_logo) return;

        try {
            const banner = document.getElementById("banner_link")
            const banner_bg = banner.style["background-image"]
            banner_img = banner_bg.split("\\"")[1].replace("//", "https://")
        }
        catch (e) {
            const r = await fetch("https://api.bilibili.com/x/web-show/res/loc?id=142", { credentials: 'include' })
            const data = (await r.json()).data
            banner_img = data[0].pic
        }

        head_logo.href = banner_img
    }

    setTimeout(init, 100);

})();


`

// const location = { href: "https://www.bilibili.com/video/av13925023/?p=8" }
const location = { href: "https://greasyfork.org/zh-CN/scripts/372516/" }

module.exports = {
    UserScript1,
    location
}
