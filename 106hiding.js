function detectWord(str) {
    let hidingWord = [];
    [...str].forEach(function (c) {
        if (c === c.toLowerCase()) {
            hidingWord.push(c)
        }
    })
    console.log(hidingWord.join(''))
}

detectWord("UAcASDFaDFGt");