/**
 * Unicode字符串和Base64字符串互相转换, 兼容Node.js和浏览器
 * @author Xmader
 */

const toBase64 = (str) => {
    if (typeof Buffer != "undefined")
        return Buffer.from(str).toString("base64")
    else
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
            return String.fromCharCode("0x" + p1)
        }))
}

const fromBase64 = (str) => {
    if (typeof Buffer != "undefined")
        return Buffer.from(str, "base64").toString()
    else
        return decodeURIComponent(atob(str).split("").map((c) => {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(""))
}

class Base64 {
    encode(str) {
        return toBase64(str)
    }

    decode(str) {
        return fromBase64(str)
    }
}

export default Base64
export { toBase64, fromBase64 }
