import { CharacterSet } from './CharacterSet';

export class Word {
    private _word: string;
    private _characterSet: CharacterSet

    static canWriteWord(testWord: string, testCharacterset: CharacterSet) : boolean{
        return testCharacterset.regExp().test(testWord.toLowerCase());
    }

    constructor(word: string, characterSet: CharacterSet) {
        if(Word.canWriteWord(word, characterSet)){
            this._word = word.toLowerCase();
            this._characterSet = characterSet;
        }
        else{
            throw new Error(`Not possible to write ${word} with that characterset.  Did you check it first?`);
        }
    }

    printWord() :void{
        let lineNumbers :number[] = [1, 2, 3];
        lineNumbers.forEach(lineNumber => {
            let line :string = ''
            for (const character of this._word) {
                line += this._characterSet.characterList[character].line(lineNumber);
            }
            console.log(line);
        });
    }
}