"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const left = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = left;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 2, -2, 4]);
sorter.sort();
console.log(sorter.collection);
