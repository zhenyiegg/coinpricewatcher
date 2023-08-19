export const trimArrayToTen = (arr) => {
    if (arr.length > 10) {
        return arr.slice(0, 10);
    } else {
        return arr.slice();
    }
};
