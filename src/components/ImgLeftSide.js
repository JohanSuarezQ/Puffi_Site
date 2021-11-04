import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./Button";

const ImgLeftSide = ({
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
      <div className="col1">
        <Button
          buttonSize="btn--large"
          buttonStyle="btn--outline"
          className="btn-link"
        >
          {buttonLabel}
        </Button>
        <img src={img} alt={alt} />
      </div>
      <div className="col2">
        <img src={topLine} alt="icono" />
        <h2>{headLine}</h2>
        <hr />
        <p>{description}</p>
        <a href="">
          <MdKeyboardArrowRight size={"1.5rem"}/>
          {buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default ImgLeftSide;
