```javascript
import React, { useState, useEffect } from "react";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
const urlModal = "https://api.github.com/users";

const ModalContent = ({ closingModal }) => {
  //
  //
  // --------------------------
  //

  //
  //
  // --------------------------
  //
  const [contentModal, setContentModal] = useState(0);
  const length = contentModal.length;

  const fetchData = async () => {
    const res = await fetch(urlModal);
    const userData = await res.json();
    setContentModal(userData.slice(0, 1));
  };

  useEffect(() => {
    fetchData();
  }, []);
  //
  //
  const nextSlide = () => {
    setContentModal(contentModal === length - 1 ? 0 : contentModal + 1);
  };
  console.log(contentModal);
  //
  //
  //   const prevSlide = () => {
  //     setContentModal(contentModal === 0 ? length - 1 : contentModal - 1);
  //   };
  if (!Array.isArray(contentModal) || contentModal.length <= 0) {
    return null;
  }
  // --------------------------
  //
  return (
    <>
      <section className="modal-content">
        {contentModal.map((user, index) => {
          const { id, login, avatar_url, html_url } = user;

          return (
            <>
              <button
                className="btn-close-modal"
                type="button"
                onClick={() => closingModal(false)}
              >
                X
              </button>
              <div
                className={index === ModalContent ? "slide active" : "slide"}
                key={index}
              >
                <div key={id}>
                  <div className="side-a">
                    {/* img */}
                    <div
                      className="img-box-fetch"
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${avatar_url})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        border: "10px solid #1a1a1a",
                      }}
                    ></div>
                  </div>
                  {/* ---- */}
                  <ul className="side-b">
                    {/* content */}
                    <li key={id} className="card-item-fetch">
                      <h2>{login}</h2>

                      <a
                        href={html_url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="link-url"
                      >
                        profile
                      </a>
                    </li>
                  </ul>
                </div>

                <CgArrowLongRight className="right-arrow" onClick={nextSlide} />
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ModalContent;
```
