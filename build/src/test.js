"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const world = 'world';
function hello(word = world) {
    return `Hello ${world}! `;
}
exports.hello = hello;
function writeString(message) {
    console.log(message);
}
writeString(hello());
//# sourceMappingURL=test.js.map