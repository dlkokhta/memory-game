import React from "react";

const GamePage6x6 = () => {
  return (
    <div>
      <div className="flex justify-between font-atkinsonHyperlegible mb-20">
        <h1 className="font-bold text-2xl">memory</h1>
        <button
          onClick={menuClickHandler}
          className="bg-orange  font-bold text-base text-white py-2 px-4 rounded-3xl"
        >
          Menu
        </button>
      </div>
    </div>
  );
};

export default GamePage6x6;
