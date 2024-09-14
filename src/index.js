module.exports = function reverse (n) {
    let temp = n + "";
    let rsl = "";
    for (let i = temp.length - 1; i >= 0; i--) {
        if (temp[i] !== '-') {
            rsl += temp[i];
        }
    }
    return rsl;
}
