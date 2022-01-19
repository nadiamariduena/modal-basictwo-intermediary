import React, { useState, useEffect } from "react";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
//
//
import { dataSlider } from "./dataSlider";

//

function ModalTwoContent({ closingModalTwo, slides }) {
  //
  //
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  //
  //

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  console.log(current);
  //
  //
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  //
  //
  //if our slides, dont have an array and if our array is not an array type
  //  OR || the slides, which is the images, has less or equal than 0,
  // then return null
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  //---------------

  return (
    <>
      <section className="modal-content">
        <div className="testimonial-front">
          <button
            className="btn-close-modal"
            type="button"
            onClick={() => closingModalTwo(false)}
          >
            X
          </button>
          {/* <h1>Testimonial</h1> */}
          {/*  */}
          <div className="slider">
            <CgArrowLongLeft className="left-arrow" onClick={prevSlide} />
            <CgArrowLongRight className="right-arrow" onClick={nextSlide} />

            {dataSlider.map((item, index) => {
              return (
                <>
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <>
                        {" "}
                        <img src={item.image} alt="img" className="img-box" />
                        <div className="text-box">
                          <h2>{item.desc}</h2>
                        </div>
                      </>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ModalTwoContent;
