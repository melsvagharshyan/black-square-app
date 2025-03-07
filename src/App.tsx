import React from "react";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "black" }}
      ></div>
    </div>
  );
};

export default App;
