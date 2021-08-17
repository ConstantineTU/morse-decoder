const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decodeMorseExpr = ''
    for (let i = 0; i < expr.length; i = i + 10) {
        let decodeExpr = ''
        for (let j = i; j < i + 10; j = j + 2) {
            if ((expr[j] + expr[j + 1]) === '10') {
                decodeExpr += '.'
            }
            if ((expr[j] + expr[j + 1]) === '11') {
                decodeExpr += '-'
            }
        }
        if (decodeExpr === '') {
            decodeMorseExpr += ' '
        }
        if (decodeExpr !== '') {
            decodeMorseExpr += MORSE_TABLE[decodeExpr]
            decodeExpr = ''
        }
    }
    return decodeMorseExpr
}

module.exports = {
    decode
}