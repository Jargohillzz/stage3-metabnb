import React from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import modalMeta from "./assets/image 66.png";
import modalWc from "./assets/image 69.png";
import modalArrow from "./assets/Vector (2).png";

const PopUp = (props) => {
  return (
    <ReactModal
      isOpen={props.trigger}
      onRequestClose={() => props.setTrigger(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        },
        content: {
          height: "fit-content",
          margin: "auto",
          padding: "0",
          borderRadius: "16px",
          maxWidth: "600px",
        },
      }}
    >
      <div className="modal">
        <div className="modal-connect">
          <h2>connect wallet</h2>
          <button className="close-btn" onClick={props.handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <h3>Choose your preferred wallet</h3>
        <div className="modal-wallet">
          <div>
            <img src={modalMeta} alt="" />
            <h2>Metamask</h2>
          </div>
          <div>
            <img src={modalArrow} alt="" />
          </div>
        </div>
        <div className="modal-wallet">
          <div>
            <img src={modalWc} alt="" />
            <h2>Wallet connect</h2>
          </div>
          <img src={modalArrow} alt="" />
        </div>
      </div>
    </ReactModal>
  );
};

export default PopUp;
