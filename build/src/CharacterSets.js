"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SevenSegmentDisplayCharacter_1 = require("./SevenSegmentDisplayCharacter");
class CharacterSet {
    constructor(characterList) {
        this.characterList = {};
        this.characterList = characterList;
    }
    regExp() {
        let asciiCharacterList = '';
        Object.keys(this.characterList).forEach(key => {
            asciiCharacterList += this.characterList[key].asciiCharacter();
        });
        let regExp = '^(' + asciiCharacterList + ')*$';
        return new RegExp(regExp);
    }
    ;
}
exports.CharacterSet = CharacterSet;
let printableCharacterList = {};
let ambiguousCharacterList = {};
printableCharacterList['a'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('a', ' _ ' + '\r\n' +
    '|_|' + '\r\n' +
    '| |');
printableCharacterList['b'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('b', '   ' + '\r\n' +
    '|_ ' + '\r\n' +
    '|_|');
printableCharacterList['c'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('c', '   ' + '\r\n' +
    ' _ ' + '\r\n' +
    '|_ ');
printableCharacterList['d'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('d', '   ' + '\r\n' +
    ' _|' + '\r\n' +
    '|_|');
printableCharacterList['e'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('e', ' _ ' + '\r\n' +
    '|_ ' + '\r\n' +
    '|_ ');
printableCharacterList['f'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('f', ' _ ' + '\r\n' +
    '|_ ' + '\r\n' +
    '|  ');
printableCharacterList['g'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('g', ' _ ' + '\r\n' +
    '|  ' + '\r\n' +
    '|_|');
printableCharacterList['h'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('h', '   ' + '\r\n' +
    '|_|' + '\r\n' +
    '| |');
printableCharacterList['i'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('i', '   ' + '\r\n' +
    '|  ' + '\r\n' +
    '|  ');
printableCharacterList['j'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('j', '   ' + '\r\n' +
    '  |' + '\r\n' +
    '|_|');
ambiguousCharacterList['k'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('k', '   ' + '\r\n' +
    '|_|' + '\r\n' +
    '| |');
printableCharacterList['l'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('l', '   ' + '\r\n' +
    '|  ' + '\r\n' +
    '|_ ');
// printableCharacters['m'] = new DisplayCharacter('m', ' _ ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '| |');
printableCharacterList['n'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('n', '   ' + '\r\n' +
    ' _ ' + '\r\n' +
    '| |');
printableCharacterList['o'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('o', '   ' + '\r\n' +
    ' _ ' + '\r\n' +
    '|_|');
printableCharacterList['p'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('p', ' _ ' + '\r\n' +
    '|_|' + '\r\n' +
    '|  ');
ambiguousCharacterList['q'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('q', ' _ ' + '\r\n' +
    '|_|' + '\r\n' +
    '  |');
printableCharacterList['r'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('r', '   ' + '\r\n' +
    ' _ ' + '\r\n' +
    '|  ');
ambiguousCharacterList['s'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('s', ' _ ' + '\r\n' +
    '|_ ' + '\r\n' +
    ' _|');
printableCharacterList['t'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('t', '   ' + '\r\n' +
    '|_ ' + '\r\n' +
    '|_ ');
printableCharacterList['u'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('u', '   ' + '\r\n' +
    '   ' + '\r\n' +
    '|_|');
ambiguousCharacterList['v'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('v', '   ' + '\r\n' +
    '   ' + '\r\n' +
    '|_|');
// printableCharacters['w'] = new DisplayCharacter('w', ' _ ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '| |');
// printableCharacters['x'] = new DisplayCharacter('x', ' _ ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '| |');
ambiguousCharacterList['y'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('y', '   ' + '\r\n' +
    '|_|' + '\r\n' +
    '  |');
ambiguousCharacterList['z'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('z', ' _ ' + '\r\n' +
    ' _|' + '\r\n' +
    '|_ ');
printableCharacterList['0'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('0', ' _ ' + '\r\n' +
    '| |' + '\r\n' +
    '|_|');
printableCharacterList['1'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('1', '   ' + '\r\n' +
    '  |' + '\r\n' +
    '  |');
printableCharacterList['2'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('2', ' _ ' + '\r\n' +
    ' _|' + '\r\n' +
    '|_ ');
printableCharacterList['3'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('3', ' _ ' + '\r\n' +
    ' _|' + '\r\n' +
    ' _|');
printableCharacterList['4'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('4', '   ' + '\r\n' +
    '|_|' + '\r\n' +
    '  |');
printableCharacterList['5'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('5', ' _ ' + '\r\n' +
    '|_ ' + '\r\n' +
    ' _|');
printableCharacterList['6'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('6', ' _ ' + '\r\n' +
    '|_ ' + '\r\n' +
    '|_|');
printableCharacterList['7'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('7', ' _ ' + '\r\n' +
    '  |' + '\r\n' +
    '  |');
printableCharacterList['8'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('8', ' _ ' + '\r\n' +
    '|_|' + '\r\n' +
    '|_|');
printableCharacterList['9'] = new SevenSegmentDisplayCharacter_1.DisplayCharacter('9', ' _ ' + '\r\n' +
    '|_|' + '\r\n' +
    '  |');
Object.keys(printableCharacterList).forEach(key => {
    ambiguousCharacterList[key] = printableCharacterList[key];
});
let printableCharacters = new CharacterSet(printableCharacterList);
exports.printableCharacters = printableCharacters;
let ambiguousCharacters = new CharacterSet(ambiguousCharacterList);
exports.ambiguousCharacters = ambiguousCharacters;
//# sourceMappingURL=CharacterSets.js.map