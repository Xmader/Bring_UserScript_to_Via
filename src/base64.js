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

export default Base64
export const { toBase64 } = Base64
export const { fromBase64 } = Base64
