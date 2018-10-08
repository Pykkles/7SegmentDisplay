export interface PrintableCharacter {
    line(lineNumber: number): string;
    print(): void;
    asciiCharacter(): string;
}
export declare class DisplayCharacter implements PrintableCharacter {
    private _asciiCharacter;
    private _lines;
    private _lineRegex;
    constructor(asciiCharacter: string, printString: string);
    print(): void;
    asciiCharacter(): string;
    line(lineNumber: number): string;
}
