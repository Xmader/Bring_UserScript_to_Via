const { fromBase64 } = require("./base64.js")

const a = "LyrnvZHpobXosIPor5Xlt6XlhbcqL3ZhciBkPWRvY3VtZW50O3ZhciBzPWQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7cy5zZXRBdHRyaWJ1dGUoJ3NyYycsICcgaHR0cDovL2RhdGFzdC5xaW5pdWRuLmNvbS9qcy92Q29uc29sZS5qcycpO2QuaGVhZC5hcHBlbmRDaGlsZChzKTs="

console.log(fromBase64(a))

