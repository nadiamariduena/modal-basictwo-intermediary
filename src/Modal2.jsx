import React, { useState } from "react";
import ModalContentTwo from "./Modal2Content";
import { dataSlider } from "./dataSlider";
//

const ModalTwo = () => {
  const [openModalTwo, setOpenModalTwo] = useState(false);
  console.log(openModalTwo);

  return (
    <>
      <section className="modal">
        <h1>
          xorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          reprehenderit quae aut necessitatibus mollitia asperiores doloribus
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          reprehenderit quae aut necessitatibus mollitia asperiores doloribus
          nesciunt laborum consequuntur magni? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsam reprehenderit quae aut
          necessitatibus mollitia asperiores doloribus nesciunt laborum
          consequuntur magni?
        </p>
        <button
          className="btn-card"
          type="button"
          onClick={() => {
            setOpenModalTwo(true);
          }}
        >
          open
        </button>{" "}
      </section>{" "}
      {openModalTwo && (
        <ModalContentTwo
          closingModalTwo={setOpenModalTwo}
          slides={dataSlider}
        />
      )}
      {/* 
      
      */}
    </>
  );
};

export default ModalTwo;
