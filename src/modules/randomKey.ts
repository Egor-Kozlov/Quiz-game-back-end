export const randomKey = () => {
    // return number with length of 7
    const randomKey = Math.floor(Math.random() * 10000000);
    const timeOfCreation = new Date().getTime();
    return {
      value: randomKey,
      timeOfCreation: timeOfCreation,
    };
}