import Images from "./data";

const getNewArray = () => {
  return [...Images, ...Images].sort(() => Math.random() - 0.5);
};

export default getNewArray;
