export interface PrintableCharacter {
    lineOne(): string;
    lineTwo(): string;
    lineThree(): string;
    print(): void;
    asciiCharacter(): string;
}

export class DisplayCharacter implements PrintableCharacter {
    private _asciiCharacter: string;
    private _lines: string[];
    private _lineRegex: RegExp[] = [
        /This line is not used because we will treat the lines as 1-indexed/,
        /^\s[\s_]\s$/,
        /^[\s\|][\s_][\s|]$/,
        /^[\s\|][\s_][\s|]$/
    ]

    constructor(asciiCharacter: string, printString: string) {
        if(asciiCharacter.length !== 1){
            throw new Error(`asciiCharacter '${asciiCharacter}' is not 1 character`);
        }
        this._asciiCharacter = asciiCharacter;

        this._lines = new Array(4);
        let initialisedLines = 0;

        printString.split('\r\n').forEach((line, index) => {
            if(this._lineRegex[index+1].test(line) === false){
                throw new Error(`Line ${index+1} is not valid for ${asciiCharacter}`);
            }
            this._lines[index+1] = line;
            initialisedLines++;
        });

        if(initialisedLines !== 3){
            throw new Error(`Invalid printString: must contain 3 lines, contained ${initialisedLines}`);
        }
    }

    print(): void {
        this._lines.forEach(line => {
            console.log(line);
        });
    }
    asciiCharacter(): string{
        return this._asciiCharacter;
    }
    lineOne(): string {
        return this._lines[1];
    }
    lineTwo(): string {
        return this._lines[2];
    }
    lineThree(): string {
        return this._lines[3];
    }
}