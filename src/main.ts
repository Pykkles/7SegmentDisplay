import {printableCharacters, ambiguousCharacters} from './CharacterSet';
import { Word } from "./Word";
console.log('main');

Object.keys(printableCharacters.characterList).forEach(key => {
    printableCharacters.characterList[key].print();
    console.log('');
});
console.log(printableCharacters.regExp().toString());

console.log('lol' + ': ' + Word.canWriteWord('lol', printableCharacters))
console.log('test' + ': ' + Word.canWriteWord('test', printableCharacters))
console.log('word' + ': ' + Word.canWriteWord('word', printableCharacters))
console.log('great' + ': ' + Word.canWriteWord('great', printableCharacters))
console.log('big' + ': ' + Word.canWriteWord('big', printableCharacters))
console.log('england' + ': ' + Word.canWriteWord('england', printableCharacters))
console.log('fill' + ': ' + Word.canWriteWord('fill', printableCharacters))

let lol = new Word('lol', printableCharacters);
lol.printWord();