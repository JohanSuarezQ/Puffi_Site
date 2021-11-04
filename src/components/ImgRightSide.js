import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./Button";

const ImgRightSide = ({
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  id,
}) => {
  return (
    <div id={id} className="product-container">
      <div className="col2">
        <img src={topLine} alt="" />
        <h2>{headLine}</h2>
        <br />
        <p>{description}</p>
        <a href="">
          <MdKeyboardArrowRight size={"1.5rem"}/>
          {buttonLabel}
          </a>
      </div>
      <div className="col1">
        <Button
          buttonSize="btn--large"
          buttonStyle="btn--outline"
          className="btn-link"
        >
          {buttonLabel}
        </Button>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default ImgRightSide;
