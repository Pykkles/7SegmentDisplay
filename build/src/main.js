"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterSet_1 = require("./CharacterSet");
const Word_1 = require("./Word");
console.log('main');
Object.keys(CharacterSet_1.printableCharacters.characterList).forEach(key => {
    CharacterSet_1.printableCharacters.characterList[key].print();
    console.log('');
});
console.log(CharacterSet_1.printableCharacters.regExp().toString());
console.log('lol' + ': ' + Word_1.Word.canWriteWord('lol', CharacterSet_1.printableCharacters));
console.log('test' + ': ' + Word_1.Word.canWriteWord('test', CharacterSet_1.printableCharacters));
console.log('word' + ': ' + Word_1.Word.canWriteWord('word', CharacterSet_1.printableCharacters));
console.log('great' + ': ' + Word_1.Word.canWriteWord('great', CharacterSet_1.printableCharacters));
console.log('big' + ': ' + Word_1.Word.canWriteWord('big', CharacterSet_1.printableCharacters));
console.log('england' + ': ' + Word_1.Word.canWriteWord('england', CharacterSet_1.printableCharacters));
console.log('freedom' + ': ' + Word_1.Word.canWriteWord('freedom', CharacterSet_1.printableCharacters));
console.log('fill' + ': ' + Word_1.Word.canWriteWord('fill', CharacterSet_1.printableCharacters));
let lol = new Word_1.Word('lol', CharacterSet_1.printableCharacters);
lol.printWord();
let word = new Word_1.Word('word', CharacterSet_1.printableCharacters);
word.printWord();
//# sourceMappingURL=main.js.map