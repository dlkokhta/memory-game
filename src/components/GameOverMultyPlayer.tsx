import React from "react";
import { Link } from "react-router-dom";

const GameOverMultyPlayer = (props) => {
  const highestScore = Math.max(...props.playerValues);
  const isTie =
    props.playerValues.filter((score) => score === highestScore).length > 1;

  return (
    <div>
      <div className="top-0 left-0 right-0 w-full h-full pt-[120px] fixed bg-[#181818] bg-opacity-70 ">
        <div className="absolute z-20 left-0 right-0 ">
          <div className="p-6">
            <div className="flex flex-col px-6 pb-6 gap-6 pt-8 bg-white rounded-xl">
              <div className="flex flex-col text-center">
                <div>
                  <h1 className="font-atkinsonHyperlegible font-bold text-xl">
                    {isTie ? "It's a tie!" : "You did it!"}
                  </h1>
                  {/* rest of your code */}
                </div>
                <h3 className="font-atkinsonHyperlegible font-bold text-sm text-grey">
                  Game over! Here's how you got on...
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                {props.playerValues
                  .map((value, index) => ({ value, index }))
                  .sort((a, b) => b.value - a.value)
                  .map((player, i, arr) => {
                    const isWinner = arr[0].value === player.value;
                    return (
                      <div
                        key={player.index}
                        className={`flex justify-between items-center py-3 px-4 ${
                          isWinner ? "bg-black text-white" : "bg-lightGrey2"
                        } rounded-md`}
                      >
                        <h1
                          className={`text-xs font-atkinsonHyperlegible ${
                            isWinner ? "text-white" : "text-grey"
                          }  font-bold`}
                        >
                          Player {player.index + 1}
                        </h1>
                        <div className="font-atkinsonHyperlegible text-xl font-bold">
                          {player.value} Pairs
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="flex flex-col gap-4">
                {/* <Link to={"/game"}> */}
                <button
                  //   onClick={restartButtonClickHandler}
                  className="bg-orange  font-bold text-lg text-white pt-3 px-[107px] pb-3 rounded-3xl"
                >
                  Restart
                </button>
                {/* </Link> */}
                <Link to={"/"}>
                  <button
                    //   onClick={resumeGameButtonClickHandler}
                    className="bg-lightGrey2  font-bold text-lg text-white pt-3 px-[65px] pb-3 rounded-3xl whitespace-nowrap"
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

export default GameOverMultyPlayer;
