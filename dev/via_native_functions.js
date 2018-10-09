/**
 * 模拟Via浏览器中已知的内置函数
 * @author Xmader
 */

window.via = {
    addon() { },
    changeBookmarkOrder() { },
    changeFavoriteOrder() { },

    /**
     * 获取已安装的插件ID
     */
    getInstalledAddonID() {
        return [10086, 302, 303]
    },

    /**
     * (未知)
     * 从文件导入设置?
     */
    openSettings(src) { 
        return void src
    },

    record() { },

    /**
     * 调用在浏览器中设置的搜索引擎，搜索传入的文字。  
     * 表现和直接在Via浏览器的地址框中搜索一致
     * @param {String} text
     */
    searchText(text) {
        window.open(`https://cn.bing.com/search?q=${text.replace(/ /g, "+")}`, "_self")
    },

    /**
     * 发送通知，但区别在于不需要用户同意
     * @param {String} text
     */
    toast(text) {
        Notification.requestPermission((permission) => {
            if (permission === "granted") {
                new Notification(text)
            }
        })
    }
}