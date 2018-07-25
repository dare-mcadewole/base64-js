import Binary from './binary'

const BASE64ENCODINGTABLE = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'
]

export default class Base64 {
    static encode(string) {
        var bin = '', b
        var fullBinaryStream = string.split('')
                                .map(l => Binary.convert(l.charCodeAt(0)))
                                .join('')
        var encodedStreamArray = fullBinaryStream.split(/(.{6})/)
            .filter(hex => hex)
            .map(hex =>  BASE64ENCODINGTABLE[parseInt(hex, 2)])
        for (var i = 0; i < encodedStreamArray.length % 4; i++, encodedStreamArray.push('='));
        return encodedStreamArray.join('')
    }
}
