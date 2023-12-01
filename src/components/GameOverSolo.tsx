import React from "react";
import { Link } from "react-router-dom";

const GameOverSolo = (props) => {
  return (
    <div>
      <div className="top-0 left-0 right-0 w-full h-full pt-[120px] fixed bg-[#181818] bg-opacity-70 ">
        <div className="absolute z-20 left-0 right-0 ">
          <div className="p-6 lg:p-14">
            <div className="flex flex-col px-6 pb-6 gap-6 pt-8 bg-white rounded-xl lg:pt-14 lg:px-14 lg:pb-20 lg:gap-10">
              <div className="flex flex-col text-center ">
                <h1 className=" font-atkinsonHyperlegible font-bold text-xl lg:text-5xl lg:pb-4">
                  You did it!
                </h1>
                <h3 className="font-atkinsonHyperlegible font-bold text-sm text-grey lg:text-lg">
                  Game over! Here's how you got on...
                </h3>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">
                <div className="flex justify-between items-center py-3 px-4 bg-lightGrey2 rounded-md lg:py-6 lg:px-8">
                  <h1 className="text-xs font-atkinsonHyperlegible text-grey font-bold lg:text-lg">
                    Time Elapsed
                  </h1>
                  <div className=" font-atkinsonHyperlegible text-xl font-bold lg:text-[32px]">
                    {props.formattedtime}
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-lightGrey2 rounded-md lg:py-6 lg:px-8">
                  <h1 className="text-xs font-atkinsonHyperlegible text-grey font-bold lg:text-lg">
                    Moves Taken
                  </h1>
                  <div className=" font-atkinsonHyperlegible text-xl font-bold lg:text-[32px]">
                    {props.count}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                <button
                  onClick={props.restartButtonClickHandler2}
                  className="bg-orange  font-bold text-lg text-white pt-3 px-[107px] pb-3 rounded-3xl lg:text-xl lg:py-4 lg:px-[100px] lg:rounded-full"
                >
                  Restart
                </button>

                <Link to={"/"}>
                  <button
                    //   onClick={resumeGameButtonClickHandler}
                    className="bg-lightGrey2  font-bold text-lg text-black pt-3 px-[65px] pb-3 rounded-3xl whitespace-nowrap lg:text-xl lg:py-4 lg:px-12 lg:rounded-full"
                  >
                    Setup New Game
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOverSolo;
