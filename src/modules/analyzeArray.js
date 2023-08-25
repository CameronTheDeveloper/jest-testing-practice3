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
        getMin(ar) {

        },
        getMax(ar) {

        },
        getLength(ar) {
            return ar.length;
        },
    };
};

const analyzeAr = (ar) => {
    let newAr = arObject(ar);
    return newAr;
};

module.exports = analyzeAr;