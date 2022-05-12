
const decoder = s => {
    let decodedString = "";
    for(let i = 0; i < s.length; i++) {
        let curChar = s[i].charCodeAt()
        let offset = curChar > 96 ? 96 : 64;
        decodedString = decodedString + String.fromCharCode(((curChar - offset - 5) % 26) + offset)

    }
    return decodedString;
}

const encoder = s => {
    let encodedString = "";
    for(let i = 0; i < s.length; i++) {
        let curChar = s[i].charCodeAt()
        let offset = curChar > 96 ? 96 : 64;
        encodedString = encodedString + String.fromCharCode(((curChar - offset + 5) % 26) + offset)

    }
    return encodedString;
}

module.exports.decoder = decoder
module.exports.encoder = encoder
