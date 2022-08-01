class Sorter {
    constructor(public collection: number[] | string) { }

    sort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {

                // If collection is an array of numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const left = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = left;
                    }
                }

                // If collection is a string: 

            }
        }
    }
}

const sorter = new Sorter([10, 2, -2, 4]);
sorter.sort();
console.log(sorter.collection);