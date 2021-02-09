
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return matrix ? [].concat(...matrix.map((item, index) => {
        return index % 2 === 0 ? item : item.reverse();
    })) : [];
};
