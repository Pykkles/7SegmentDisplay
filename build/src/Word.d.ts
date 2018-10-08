import { CharacterSet } from './CharacterSet';
export declare class Word {
    private _word;
    private _characterSet;
    static canWriteWord(testWord: string, testCharacterset: CharacterSet): boolean;
    constructor(word: string, characterSet: CharacterSet);
    printWord(): void;
}
