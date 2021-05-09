import React, { useState, useEffect } from "react";
import "./card.scss";

import { useSelector, useDispatch } from "react-redux";
import getNewArray from "../redux/userSlice/data/imagesGenerator";

import { openCard, closeCard } from "../redux/userSlice";

export default function Cards() {
  const { answerList, isCardOpen, wrongPair } = useSelector(
    (store) => store.user
  );
  console.log(answerList);
  const dispatch = useDispatch();
  const [images, setImages] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    wrongPair && setTimeout(() => dispatch(closeCard(wrongPair)), 1200);
  }, [wrongPair]);

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
              // console.log(e.target);
              dispatch(openCard({ id: img.id, index }));
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
