"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const characterArray = this.data.split('');
        const leftHand = characterArray[leftIndex];
        characterArray[leftIndex] = characterArray[rightIndex];
        characterArray[rightIndex] = leftHand;
        this.data = characterArray.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
