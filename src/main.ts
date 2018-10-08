import {PrintableCharacter} from './SevenSegmentDisplayCharacter';
import {printableCharacters, ambiguousCharacters} from './CharacterSets';
console.log('main');

Object.keys(printableCharacters.characterList).forEach(key => {
    printableCharacters.characterList[key].print();
    console.log('');
});
console.log(printableCharacters.regExp().toString());