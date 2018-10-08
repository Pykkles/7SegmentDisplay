"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Word {
    static canWriteWord(testWord, testCharacterset) {
        return testCharacterset.regExp().test(testWord.toLowerCase());
    }
    constructor(word, characterSet) {
        if (Word.canWriteWord(word, characterSet)) {
            this._word = word.toLowerCase();
            this._characterSet = characterSet;
        }
        else {
            throw new Error(`Not possible to write ${word} with that characterset.  Did you check it first?`);
        }
    }
    printWord() {
        let lineNumbers = [1, 2, 3];
        lineNumbers.forEach(lineNumber => {
            let line = '';
            for (const character of this._word) {
                line += this._characterSet.characterList[character].line(lineNumber);
            }
            console.log(line);
        });
    }
}
exports.Word = Word;
//# sourceMappingURL=Word.js.map