export const getRandom = (list) => list[Math.floor(Math.random() * list.length)];

export const getRandomInt = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};
