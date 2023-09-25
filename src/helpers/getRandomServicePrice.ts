export const getRandomServicePrice = (): string => {
    const price = Math.floor(Math.random() * (45 - 25) + 25) * 10;
    return `${price},00 PLN`;
};
