/**
 * 获取当前Greasyfork页面的脚本ID  
 * 如果当前页面不是Greasyfork脚本页面, 则返回null
 * @author Xmader
 * @copyright Copyright (c) 2018 Xmader
 */

const getGreasyforkId = () => {
    if (typeof location != "undefined") {
        const greasyfork_id = location.href.match(/greasyfork\.org\/.*scripts\/(\d+)/)
        return greasyfork_id && greasyfork_id[1]
    }
}


export default getGreasyforkId
