export const stringToNumber = (str) => {
    return parseInt(str, 10);
};
export const numberToTwoString = (num) => {
    return String(num).padStart(2, '0');
};