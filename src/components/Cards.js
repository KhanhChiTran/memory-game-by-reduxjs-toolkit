import React, { useState, useEffect } from "react";
import "./card.scss";

import { useSelector, useDispatch } from "react-redux";
import getNewArray from "../redux/userSlice/data/imagesGenerator";

import { openCard } from "../redux/userSlice";

export default function Cards() {
  const { answerList, isCardOpen, tempId, tempCard, point } = useSelector(
    (store) => store.user
  );
  console.log(answerList);
  const dispatch = useDispatch();
  const [images, setImages] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // const [tempId, setTempId] = useState(null);

  // // console.log(newImages);

  // let pairsOfImages = [...newImages, ...newImages];
  // const [openCard, setOpenCard] = useState(pairsOfImages);

  // const flipCard = (index, id) => {
  //   let openCards;
  //   openCards = pairsOfImages.map((img, i) =>
  //     i === index ? { ...img, flipped: true } : img
  //   );
  //   setTempId(id);
  //   console.log(id);
  //   console.log(tempId);

  //   setOpenCard(openCards);
  // };
  useEffect(() => {
    setImages(getNewArray());
  }, []);
  return (
    <div className="card-container">
      {answerList?.map((img, index) => {
        return (
          <div
            key={index}
            id={img.id}
            className={`card ${img.flipped ? "" : "flipped"}`}
            onClick={(e) => {
              console.log(e.target);
              dispatch(openCard(index));
            }}
          >
            <div className="flip-card-front">
              <img className="card-img" src={img.src} alt="img" />
            </div>
            <div className="flip-card-back"></div>
          </div>
        );
      })}
    </div>
  );
}
