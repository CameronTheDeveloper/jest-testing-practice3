const arObject = () => {
    return {
        getAverage(ar) {
            let average = 0.0;
            for (let i = 0; i < ar.length; i++) {
                average += ar[i];
            }
            average /= ar.length;
            return average;
        },
        getLength(ar) {
            return ar.length;
        },

        mergeSort(ar) {
            if (ar.length <= 1) {
                return ar;
            }

            if (ar.length === 2) {
                if (ar[0] <= ar[1]) {
                    return [ar[0], ar[1]];
                } else {
                    return [ar[1], ar[0]];
                }
            }

            const midIndex = Math.ceil(ar.length / 2);
            const firstHalf = ar.slice(0, midIndex);
            const secondHalf = ar.slice(midIndex);

            const sortedFirstHalf = this.mergeSort(firstHalf);
            const sortedSecondHalf = this.mergeSort(secondHalf);

            const sortedAr = merge(sortedFirstHalf, sortedSecondHalf);
            return sortedAr;
        },
        getMin(ar) {
            const sortedAr = this.mergeSort(ar);
            return sortedAr[0];

        },
        getMax(ar) {
            const sortedAr = this.mergeSort(ar);
            return sortedAr[sortedAr.length - 1];
        },
    };
};

const merge = (sortedFirstHalf, sortedSecondHalf) => {
    let sortedAr = [];

    while (sortedFirstHalf.length > 0 || sortedSecondHalf.length > 0) {
        if (sortedFirstHalf.length <= 0 || sortedFirstHalf[0] >= sortedSecondHalf[0]) {
            sortedAr.push(sortedSecondHalf.shift());
        }

        if (sortedSecondHalf.length <= 0 && sortedFirstHalf.length > 0
            || sortedFirstHalf[0] < sortedSecondHalf[0]) {
            sortedAr.push(sortedFirstHalf.shift());
        }
    }
    return sortedAr;
};

const analyzeAr = (ar) => {
    let newAr = arObject(ar);
    return newAr;
};

module.exports = analyzeAr;