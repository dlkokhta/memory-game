import React from "react";

const GameOverSolo = () => {
  return (
    <div>
      <div className="top-0 left-0 right-0 w-full h-full pt-[210px] fixed bg-[#181818] bg-opacity-70 ">
        <div className="absolute z-20 left-0 right-0 ">
          <div className="p-6 ">
            <div className="flex flex-col gap-4 p-6 bg-white rounded-xl">
              <div className="flex justify-between py-3 px-4 bg-lightGrey2 rounded-md">
                <h1 className="text-sm ">Time Elapsed</h1>
                <div>1:53</div>
              </div>
              <button
                //   onClick={restartButtonClickHandler}
                className="bg-orange  font-bold text-lg text-white pt-3 px-[107px] pb-3 rounded-3xl"
              >
                Restart
              </button>
              {/* <Link to={"/"}> */}

              {/* </Link> */}
              <button
                //   onClick={resumeGameButtonClickHandler}
                className="bg-lightGrey2  font-bold text-lg text-white pt-3 px-20 pb-3 rounded-3xl whitespace-nowrap"
              >
                Setup New Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOverSolo;
