export const isFunction = (functionToCheck) => (functionToCheck && {}.toString.call(functionToCheck) === '[object Function]');

export const hasProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

export const insert = (n, ins, arr) => [...arr.slice(0, n), ins, ...arr.slice(n)];

export const simulateEmail = (name) => `${name.replace(/ +/g, '').toLowerCase()}@gmail.com`;

export const getRandom = (list) => list[_.random(0, list.length - 1)];

export const getRandomInt = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

export const simulatePhone = () => getRandomInt(9000000000, 9999999999);

export const nTimesArray = (n, fn) => (Array.from(Array(n).keys()).map(() => fn()));

