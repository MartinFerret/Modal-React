import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <h2>Hello Modal !</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis est ut adipisci pariatur voluptate alias nobis, quae
                nesciunt cupiditate in architecto iusto deleniti perferendis
                doloremque, consequuntur aut dolorum, suscipit facere. Error,
                vitae facere? Excepturi, cumque animi molestias non labore nisi
                veniam dolore voluptas in esse aut sit perspiciatis, cum sed?
              </p>
              <button onClick={toggleModal} className="close-modal">
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
