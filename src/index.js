
module.exports = function towelSort(matrix) {
    if (!matrix) return []
    let result = []
    matrix.forEach((array, index) => {
        if (index % 2 === 1) array.reverse()
        result.push(...array)
    })
    return result;
}




