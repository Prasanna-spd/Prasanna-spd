import { Heading } from "@chakra-ui/react";
import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgb(34,34,34)",
  color: "aliceblue",
  zIndex: 1000,
  height: "90%",
  width: "90%",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button
          onClick={onClose}
          style={{
            padding: "5px",
            backgroundColor: "red",
            position: "relative",
            top: "94%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "15px",
          }}
        >
          Close Feature
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Heading>{children.title}</Heading>
          <br />
          <p>{children.data}</p>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
