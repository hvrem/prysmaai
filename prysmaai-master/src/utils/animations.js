export const getRandomDelay = (min = 0, max = 5) => {
    return Math.random() * (max - min) + min;
  };
  
  export const getRandomDuration = (min = 5, max = 10) => {
    return Math.random() * (max - min) + min;
  };