"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterSet_1 = require("./CharacterSet");
const Word_1 = require("./Word");
const fs_1 = require("fs");
const words = fs_1.readFileSync('./static/words_alpha.txt', 'utf8').split('\r\n');
console.log(`Loaded ${words.length} words.`);
let startTimeMillis = (new Date()).getTime();
let longestWord = '';
let longestWordLength = 0;
words.forEach((word, index) => {
    if (index % 10000 === 0) {
        console.log(`Checked ${index} words, ${((new Date()).getTime() - startTimeMillis) / 1000}s elapsed`);
    }
    if (Word_1.Word.canWriteWord(word, CharacterSet_1.printableCharacters)) {
        if (word.length > longestWord.length) {
            longestWord = word;
            //longestWordLength = word.length;
        }
    }
});
console.log(`longest word is ${longestWord} with length ${longestWordLength}.  Printing...`);
(new Word_1.Word(longestWord, CharacterSet_1.printableCharacters)).printWord();
//Output: longest word is electroencephalographical with length 25.  Printing...
//Output:  _     _              _        _  _     _        _     _  _           _    
//        |_ |  |_  _ |_  _  _ |_  _  _ |_ |_||_||_||   _ |   _ |_||_||_||   _ |_||  
//        |_ |_ |_ |_ |_ |  |_||_ | ||_ |_ |  | || ||_ |_||_||  | ||  | ||  |_ | ||_ 
//# sourceMappingURL=main.js.map