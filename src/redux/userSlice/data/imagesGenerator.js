import Images from "./data";

console.log(Images);

const getRandom = () => Math.ceil(Math.random() * 8);

const getNewArray = () => {
  let arr = [];
  for (let i = 0; i < 16; i++) {
    let randomNumber = getRandom();
    while (arr.indexOf(randomNumber) !== arr.lastIndexOf(randomNumber)) {
      randomNumber = getRandom();
    }
    arr.push(Images[randomNumber - 1]);
  }
  return arr;
};

export default getNewArray;
