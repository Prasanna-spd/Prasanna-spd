import React from "react";

const Heading = () => {
  return (
    <div
      style={{
        display: "flex",
        letterSpacing: "4px",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        height: "4rem",
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
        backgroundColor: "lightseagreen",
        position: "sticky",
        top: "0",
        zIndex: 1,
      }}
    >
      Walk-Cart
    </div>
  );
};

export default Heading;
