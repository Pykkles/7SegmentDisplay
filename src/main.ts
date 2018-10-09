import { printableCharacters, ambiguousCharacters } from './CharacterSet';
import { Word } from "./Word";
import { readFileSync } from "fs";

const words = readFileSync('./static/words_alpha.txt', 'utf8').split('\r\n');
console.log(`Loaded ${words.length} words.`);

let startTimeMillis: number = (new Date()).getTime();
let longestWord: string = ''
let longestWordLength: number = 0;
words.forEach((word, index) => {
    if (index % 10000 === 0) {
        console.log(`Checked ${index} words, ${((new Date()).getTime() - startTimeMillis) / 1000}s elapsed`);
    }
    if (Word.canWriteWord(word, printableCharacters)) {
        if (word.length > longestWordLength) {
            longestWord = word;
            longestWordLength = word.length;
        }
    }
});
console.log(`longest word is ${longestWord} with length ${longestWordLength}.  Printing...`);
(new Word(longestWord, printableCharacters)).printWord();


//Output: longest word is electroencephalographical with length 25.  Printing...
//Output:  _     _              _        _  _     _        _     _  _           _    
//        |_ |  |_  _ |_  _  _ |_  _  _ |_ |_||_||_||   _ |   _ |_||_||_||   _ |_||  
//        |_ |_ |_ |_ |_ |  |_||_ | ||_ |_ |  | || ||_ |_||_||  | ||  | ||  |_ | ||_ 
