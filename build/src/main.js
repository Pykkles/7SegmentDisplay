"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterSets_1 = require("./CharacterSets");
console.log('main');
// let printableCharacters: {[character: string] : PrintableCharacter} = {};
// let ambiguousCharacters: {[character: string] : PrintableCharacter} = {};
// printableCharacters['a'] = new DisplayCharacter('a', ' _ ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '| |');
// printableCharacters['b'] = new DisplayCharacter('b', '   ' + '\r\n' + 
//                                                      '|_ ' + '\r\n' + 
//                                                      '|_|');
// printableCharacters['c'] = new DisplayCharacter('c', '   ' + '\r\n' + 
//                                                      ' _ ' + '\r\n' + 
//                                                      '|_ ');
// printableCharacters['d'] = new DisplayCharacter('d', '   ' + '\r\n' + 
//                                                      ' _|' + '\r\n' + 
//                                                      '|_|');
// printableCharacters['e'] = new DisplayCharacter('e', ' _ ' + '\r\n' + 
//                                                      '|_ ' + '\r\n' + 
//                                                      '|_ ');
// printableCharacters['f'] = new DisplayCharacter('f', ' _ ' + '\r\n' + 
//                                                      '|_ ' + '\r\n' + 
//                                                      '|  ');
// printableCharacters['g'] = new DisplayCharacter('g', ' _ ' + '\r\n' + 
//                                                      '|  ' + '\r\n' + 
//                                                      '|_|');
// printableCharacters['h'] = new DisplayCharacter('h', '   ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '| |');
// printableCharacters['i'] = new DisplayCharacter('i', '   ' + '\r\n' + 
//                                                      '|  ' + '\r\n' + 
//                                                      '|  ');
// printableCharacters['j'] = new DisplayCharacter('j', '   ' + '\r\n' + 
//                                                      '  |' + '\r\n' + 
//                                                      '|_|');
// ambiguousCharacters['k'] = new DisplayCharacter('k', '   ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '| |');
// printableCharacters['l'] = new DisplayCharacter('l', '   ' + '\r\n' + 
//                                                      '|  ' + '\r\n' + 
//                                                      '|_ ');
// // printableCharacters['m'] = new DisplayCharacter('m', ' _ ' + '\r\n' + 
// //                                                      '|_|' + '\r\n' + 
// //                                                      '| |');
// printableCharacters['n'] = new DisplayCharacter('n', '   ' + '\r\n' + 
//                                                      ' _ ' + '\r\n' + 
//                                                      '| |');
// printableCharacters['o'] = new DisplayCharacter('o', '   ' + '\r\n' + 
//                                                      ' _ ' + '\r\n' + 
//                                                      '|_|');
// printableCharacters['p'] = new DisplayCharacter('p', ' _ ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '|  ');
// ambiguousCharacters['q'] = new DisplayCharacter('q', ' _ ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '  |');
// printableCharacters['r'] = new DisplayCharacter('r', '   ' + '\r\n' + 
//                                                      ' _ ' + '\r\n' + 
//                                                      '|  ');
// ambiguousCharacters['s'] = new DisplayCharacter('s', ' _ ' + '\r\n' + 
//                                                      '|_ ' + '\r\n' + 
//                                                      ' _|');
// printableCharacters['t'] = new DisplayCharacter('t', '   ' + '\r\n' + 
//                                                      '|_ ' + '\r\n' + 
//                                                      '|_ ');
// printableCharacters['u'] = new DisplayCharacter('u', '   ' + '\r\n' + 
//                                                      '   ' + '\r\n' + 
//                                                      '|_|');
// ambiguousCharacters['v'] = new DisplayCharacter('v', '   ' + '\r\n' + 
//                                                      '   ' + '\r\n' + 
//                                                      '|_|');
// // printableCharacters['w'] = new DisplayCharacter('w', ' _ ' + '\r\n' + 
// //                                                      '|_|' + '\r\n' + 
// //                                                      '| |');
// // printableCharacters['x'] = new DisplayCharacter('x', ' _ ' + '\r\n' + 
// //                                                      '|_|' + '\r\n' + 
// //                                                      '| |');
// ambiguousCharacters['y'] = new DisplayCharacter('y', '   ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '  |');
// ambiguousCharacters['z'] = new DisplayCharacter('z', ' _ ' + '\r\n' + 
//                                                      ' _|' + '\r\n' + 
//                                                      '|_ ');
// printableCharacters['0'] = new DisplayCharacter('0', ' _ ' + '\r\n' + 
//                                                      '| |' + '\r\n' + 
//                                                      '|_|');
// printableCharacters['1'] = new DisplayCharacter('1', '   ' + '\r\n' + 
//                                                      '  |' + '\r\n' + 
//                                                      '  |');
// printableCharacters['2'] = new DisplayCharacter('2', ' _ ' + '\r\n' + 
//                                                      ' _|' + '\r\n' + 
//                                                      '|_ ');
// printableCharacters['3'] = new DisplayCharacter('3', ' _ ' + '\r\n' + 
//                                                      ' _|' + '\r\n' + 
//                                                      ' _|');
// printableCharacters['4'] = new DisplayCharacter('4', '   ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '  |');
// printableCharacters['5'] = new DisplayCharacter('5', ' _ ' + '\r\n' + 
//                                                      '|_ ' + '\r\n' + 
//                                                      ' _|');
// printableCharacters['6'] = new DisplayCharacter('6', ' _ ' + '\r\n' + 
//                                                      '|_ ' + '\r\n' + 
//                                                      '|_|');
// printableCharacters['7'] = new DisplayCharacter('7', ' _ ' + '\r\n' + 
//                                                      '  |' + '\r\n' + 
//                                                      '  |');
// printableCharacters['8'] = new DisplayCharacter('8', ' _ ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '|_|');
// printableCharacters['9'] = new DisplayCharacter('9', ' _ ' + '\r\n' + 
//                                                      '|_|' + '\r\n' + 
//                                                      '  |');
Object.keys(CharacterSets_1.printableCharacters.characterList).forEach(key => {
    CharacterSets_1.printableCharacters.characterList[key].print();
    console.log('');
});
console.log(CharacterSets_1.printableCharacters.regExp().toString());
//# sourceMappingURL=main.js.map