import {PrintableCharacter, DisplayCharacter} from './SevenSegmentDisplayCharacter';

export interface CharacterList {
        [character: string] : PrintableCharacter
}
export class CharacterSet {
        characterList: CharacterList = {};

        constructor(characterList: CharacterList) {
            this.characterList = characterList;
        }

        regExp() : RegExp {
            let asciiCharacterList: string = '';
            Object.keys(this.characterList).forEach(key => {
                asciiCharacterList += this.characterList[key].asciiCharacter();
            });
            let regExp: string = '^[' + asciiCharacterList + ']*$';
            return new RegExp(regExp);
        };
}

let printableCharacterList: CharacterList = {};
let ambiguousCharacterList: CharacterList = {};

printableCharacterList['a'] = new DisplayCharacter('a', ' _ ' + '\r\n' + 
                                                     '|_|' + '\r\n' + 
                                                     '| |');
printableCharacterList['b'] = new DisplayCharacter('b', '   ' + '\r\n' + 
                                                     '|_ ' + '\r\n' + 
                                                     '|_|');
printableCharacterList['c'] = new DisplayCharacter('c', '   ' + '\r\n' + 
                                                     ' _ ' + '\r\n' + 
                                                     '|_ ');
printableCharacterList['d'] = new DisplayCharacter('d', '   ' + '\r\n' + 
                                                     ' _|' + '\r\n' + 
                                                     '|_|');
printableCharacterList['e'] = new DisplayCharacter('e', ' _ ' + '\r\n' + 
                                                     '|_ ' + '\r\n' + 
                                                     '|_ ');
printableCharacterList['f'] = new DisplayCharacter('f', ' _ ' + '\r\n' + 
                                                     '|_ ' + '\r\n' + 
                                                     '|  ');
printableCharacterList['g'] = new DisplayCharacter('g', ' _ ' + '\r\n' + 
                                                     '|  ' + '\r\n' + 
                                                     '|_|');
printableCharacterList['h'] = new DisplayCharacter('h', '   ' + '\r\n' + 
                                                     '|_|' + '\r\n' + 
                                                     '| |');
printableCharacterList['i'] = new DisplayCharacter('i', '   ' + '\r\n' + 
                                                     '|  ' + '\r\n' + 
                                                     '|  ');
printableCharacterList['j'] = new DisplayCharacter('j', '   ' + '\r\n' + 
                                                     '  |' + '\r\n' + 
                                                     '|_|');
ambiguousCharacterList['k'] = new DisplayCharacter('k', '   ' + '\r\n' + 
                                                     '|_|' + '\r\n' + 
                                                     '| |');
printableCharacterList['l'] = new DisplayCharacter('l', '   ' + '\r\n' + 
                                                     '|  ' + '\r\n' + 
                                                     '|_ ');
// printableCharacters['m'] = new DisplayCharacter('m', ' _ ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '| |');
printableCharacterList['n'] = new DisplayCharacter('n', '   ' + '\r\n' + 
                                                     ' _ ' + '\r\n' + 
                                                     '| |');
printableCharacterList['o'] = new DisplayCharacter('o', '   ' + '\r\n' + 
                                                     ' _ ' + '\r\n' + 
                                                     '|_|');
printableCharacterList['p'] = new DisplayCharacter('p', ' _ ' + '\r\n' + 
                                                     '|_|' + '\r\n' + 
                                                     '|  ');
ambiguousCharacterList['q'] = new DisplayCharacter('q', ' _ ' + '\r\n' + 
                                                     '|_|' + '\r\n' + 
                                                     '  |');
printableCharacterList['r'] = new DisplayCharacter('r', '   ' + '\r\n' + 
                                                     ' _ ' + '\r\n' + 
                                                     '|  ');
ambiguousCharacterList['s'] = new DisplayCharacter('s', ' _ ' + '\r\n' + 
                                                     '|_ ' + '\r\n' + 
                                                     ' _|');
printableCharacterList['t'] = new DisplayCharacter('t', '   ' + '\r\n' + 
                                                     '|_ ' + '\r\n' + 
                                                     '|_ ');
printableCharacterList['u'] = new DisplayCharacter('u', '   ' + '\r\n' + 
                                                     '   ' + '\r\n' + 
                                                     '|_|');
ambiguousCharacterList['v'] = new DisplayCharacter('v', '   ' + '\r\n' + 
                                                     '   ' + '\r\n' + 
                                                     '|_|');
// printableCharacters['w'] = new DisplayCharacter('w', ' _ ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '| |');
// printableCharacters['x'] = new DisplayCharacter('x', ' _ ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '| |');
ambiguousCharacterList['y'] = new DisplayCharacter('y', '   ' + '\r\n' + 
                                                     '|_|' + '\r\n' + 
                                                     '  |');
ambiguousCharacterList['z'] = new DisplayCharacter('z', ' _ ' + '\r\n' + 
                                                     ' _|' + '\r\n' + 
                                                     '|_ ');
printableCharacterList['0'] = new DisplayCharacter('0', ' _ ' + '\r\n' + 
                                                     '| |' + '\r\n' + 
                                                     '|_|');
printableCharacterList['1'] = new DisplayCharacter('1', '   ' + '\r\n' + 
                                                     '  |' + '\r\n' + 
                                                     '  |');
printableCharacterList['2'] = new DisplayCharacter('2', ' _ ' + '\r\n' + 
                                                     ' _|' + '\r\n' + 
                                                     '|_ ');
printableCharacterList['3'] = new DisplayCharacter('3', ' _ ' + '\r\n' + 
                                                     ' _|' + '\r\n' + 
                                                     ' _|');
printableCharacterList['4'] = new DisplayCharacter('4', '   ' + '\r\n' + 
                                                     '|_|' + '\r\n' + 
                                                     '  |');
printableCharacterList['5'] = new DisplayCharacter('5', ' _ ' + '\r\n' + 
                                                     '|_ ' + '\r\n' + 
                                                     ' _|');
printableCharacterList['6'] = new DisplayCharacter('6', ' _ ' + '\r\n' + 
                                                     '|_ ' + '\r\n' + 
                                                     '|_|');
printableCharacterList['7'] = new DisplayCharacter('7', ' _ ' + '\r\n' + 
                                                     '  |' + '\r\n' + 
                                                     '  |');
printableCharacterList['8'] = new DisplayCharacter('8', ' _ ' + '\r\n' + 
                                                     '|_|' + '\r\n' + 
                                                     '|_|');
printableCharacterList['9'] = new DisplayCharacter('9', ' _ ' + '\r\n' + 
                                                     '|_|' + '\r\n' + 
                                                     '  |');

Object.keys(printableCharacterList).forEach(key => {
    ambiguousCharacterList[key] = printableCharacterList[key];
});

let printableCharacters = new CharacterSet(printableCharacterList);
let ambiguousCharacters = new CharacterSet(ambiguousCharacterList);

export {printableCharacters};
export {ambiguousCharacters};