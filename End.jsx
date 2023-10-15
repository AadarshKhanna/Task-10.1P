import React from "react";

function End() {
  const centerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={centerStyle}>
      <img src={require("./end.png")} alt="ending_image" width={1300} />
    </div>
  );
}

export default End;
