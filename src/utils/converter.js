export const stringToNumber = (str) => {
    return parseInt(str, 10);
};
export const numberToTwoString = (num) => {
    return String(num).padStart(2, '0');
};

const emotionToId = (emotion) => {
    switch (emotion) {
        case '설렘':
            return 1;
        case '질투':
            return 2;
        case '놀람':
            return 3;
        case '화남':
            return 4;
        case '기쁨':
            return 5;
        case '슬픔':
            return 6;
        case '지침':
            return 7;
        default:
            return 8;
    }
};
export const emotionsToIds = (emotions) => {
    const convertedEmotions = emotions.map(emotion => emotionToId(emotion));
    convertedEmotions.sort();

    return convertedEmotions;
};