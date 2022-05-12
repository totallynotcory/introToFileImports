
const decoder = s => {
    let decodedString = "";
    s = JSON.parse(s)
    for(let i = 0; i < s.length; i++) {
        decodedString = decodedString + String.fromCharCode(s[i] / 5)

    }
    return decodedString;
}

const encoder = s => {
    let encodedString = [];
    for(let i = 0; i < s.length; i++) {
        let curChar = s[i].charCodeAt()
        encodedString[i] = curChar * 5

    }
    return "[" + encodedString.toString() + "]";
}

module.exports.decoder = decoder
module.exports.encoder = encoder
