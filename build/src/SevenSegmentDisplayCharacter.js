"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DisplayCharacter {
    constructor(asciiCharacter, printString) {
        this._lineRegex = [
            /This line is not used because we will treat the lines as 1-indexed/,
            /^\s[\s_]\s$/,
            /^[\s\|][\s_][\s|]$/,
            /^[\s\|][\s_][\s|]$/
        ];
        if (asciiCharacter.length !== 1) {
            throw new Error(`asciiCharacter '${asciiCharacter}' is not 1 character`);
        }
        this._asciiCharacter = asciiCharacter;
        this._lines = new Array(4);
        let initialisedLines = 0;
        printString.split('\r\n').forEach((line, index) => {
            if (this._lineRegex[index + 1].test(line) === false) {
                throw new Error(`Line ${index + 1} is not valid for ${asciiCharacter}`);
            }
            this._lines[index + 1] = line;
            initialisedLines++;
        });
        if (initialisedLines !== 3) {
            throw new Error(`Invalid printString: must contain 3 lines, contained ${initialisedLines}`);
        }
    }
    print() {
        this._lines.forEach(line => {
            console.log(line);
        });
    }
    asciiCharacter() {
        return this._asciiCharacter;
    }
    line(lineNumber) {
        if (lineNumber < 1 || lineNumber > 3) {
            throw new Error('Line number must be between 1 and 3 inclusive');
        }
        return this._lines[lineNumber];
    }
}
exports.DisplayCharacter = DisplayCharacter;
//# sourceMappingURL=SevenSegmentDisplayCharacter.js.map