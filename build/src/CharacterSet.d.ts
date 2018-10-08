import { PrintableCharacter } from './SevenSegmentDisplayCharacter';
export interface CharacterList {
    [character: string]: PrintableCharacter;
}
export declare class CharacterSet {
    characterList: CharacterList;
    constructor(characterList: CharacterList);
    regExp(): RegExp;
}
declare let printableCharacters: CharacterSet;
declare let ambiguousCharacters: CharacterSet;
export { printableCharacters };
export { ambiguousCharacters };
