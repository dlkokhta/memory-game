import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../store/MenuSlice";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import { objectTypes } from "../types";
import anchor from "../assets/icons/anchor.svg";
import car from "../assets/icons/car.svg";
import flask from "../assets/icons/flask.svg";
import handSpock from "../assets/icons/hand-spock.svg";
import liraSign from "../assets/icons/lira-sign.svg";
import moon from "../assets/icons/moon.svg";
import snowflake from "../assets/icons/snowflake.svg";
import sun from "../assets/icons/sun.svg";
import GameOverSolo from "./GameOverSolo";
import GameOverMultyPlayer from "./GameOverMultyPlayer";

const GamePage = () => {
  const numberOfPlayers = useSelector(
    (store: RootState) => store.numberOfPlayers.selectNumberOfPlayers
  );
  //moving count
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  const selectGridSize = useSelector(
    (store: RootState) => store.gridSize.selectGridSize
  );
  const selectedTheme = useSelector(
    (store: RootState) => store.themeArgument.selectTheme
  );

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [playerValues, setPlayerValues] = useState(
    Array.from({ length: numberOfPlayers }, () => 0)
  );

  console.log("PlayerIndex", currentPlayerIndex);
  console.log("Values", playerValues);

  const icons8 = [
    anchor,
    sun,
    car,
    flask,
    handSpock,
    liraSign,
    moon,
    snowflake,
  ];
  const icons18 = [
    anchor,
    sun,
    car,
    flask,
    handSpock,
    liraSign,
    moon,
    snowflake,
    anchor,
    sun,
    car,
    flask,
    handSpock,
    liraSign,
    moon,
    snowflake,
    anchor,
    sun,
  ];

  const iconPears = selectGridSize
    ? icons8.concat(icons8)
    : icons18.concat(icons18);
  const shuffledPairsIcons = iconPears.sort(() => Math.random() - 0.5);
  const randomIcons = shuffledPairsIcons.map((value, index) => ({
    id: index,
    value: value,
    isFlipped: false,
    isMatch: false,
  }));

  //time
  const [time, setTime] = useState(1);
  const [formattedTime, setFormattedTime] = useState("0:01");
  useEffect(() => {
    if (!randomNumbers.every((item) => item.isFlipped)) {
      setTimeout(() => {
        setTime(time + 1);
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        setFormattedTime(`${minutes}:${seconds}`);
      }, 1000);
    }
  }, []);
  // time

  const numbers = Array.from(
    { length: selectGridSize ? 8 : 18 },
    (_, index) => index + 1
  );
  const pairs = numbers.concat(numbers);
  const shuffledPairs = pairs.sort(() => Math.random() - 0.5);
  const randomArray = shuffledPairs.map((value, index) => ({
    id: index,
    value: value,
    isFlipped: false,
    isMatch: false,
  }));

  const [randomNumbers, setRandomNumbers] = useState<objectTypes[]>(
    selectedTheme === "Numbers" ? randomArray : randomIcons
  );

  // const [index, setIndex] = useState<number>(0);

  const dispatch = useDispatch();
  const menuIsVisible = useSelector((store: RootState) => store.menu2.menu);

  const [firstNumber, setFirstNumber] = useState<{
    num: objectTypes;
    index: number;
  } | null>(null);
  const [secondNumber, setSecondNumber] = useState<{
    num: objectTypes;
    index: number;
  } | null>(null);

  const numberClickHandler = (
    clickedNum: objectTypes,
    clickedIndex: number
  ) => {
    //moving count
    setClicks(clicks + 1);
    if ((clicks + 1) % 2 === 0) {
      setCount(count + 1);
    }

    if (randomNumbers[clickedIndex].isFlipped) {
      return;
    }
    if (firstNumber && secondNumber) {
      return;
    }

    const updatedCardObjects = [...randomNumbers];
    updatedCardObjects[clickedIndex].isFlipped = true;

    if (!firstNumber || !secondNumber) {
      setRandomNumbers(updatedCardObjects);
      if (firstNumber) {
        setSecondNumber({ num: clickedNum, index: clickedIndex });
      } else {
        setFirstNumber({ num: clickedNum, index: clickedIndex });
      }
    }
  };

  useEffect(() => {
    const updatedPlayerValues = [...playerValues]; //1
    if (firstNumber && secondNumber) {
      if (firstNumber.num.value === secondNumber.num.value) {
        const updatedCardObjects = [...randomNumbers];
        updatedCardObjects[firstNumber.index].isMatch = true;
        updatedCardObjects[secondNumber.index].isMatch = true; // Add this line
        updatedCardObjects[firstNumber.index].isFlipped = true;
        updatedCardObjects[secondNumber.index].isFlipped = true;
        setRandomNumbers(updatedCardObjects);
        setFirstNumber(null);
        setSecondNumber(null);
        updatedPlayerValues[currentPlayerIndex] += 1; //1
      } else {
        const nextPlayerIndex = (currentPlayerIndex + 1) % numberOfPlayers; //1
        setCurrentPlayerIndex(nextPlayerIndex); //1

        resetTurns();
      }
      setPlayerValues(updatedPlayerValues);
    }
  }, [firstNumber, secondNumber]);

  const resetTurns = () => {
    setTimeout(() => {
      const updatedCardObjects = [...randomNumbers];
      firstNumber !== secondNumber;

      if (firstNumber) {
        updatedCardObjects[firstNumber.index].isFlipped = false;
      }
      if (secondNumber) {
        updatedCardObjects[secondNumber.index].isFlipped = false;
      }
      setRandomNumbers(updatedCardObjects);
      setFirstNumber(null);
      setSecondNumber(null);
    }, 500);
  };

  const menuClickHandler = () => {
    dispatch(setMenu(!menuIsVisible));
  };
  const resumeGameButtonClickHandler = () => {
    dispatch(setMenu(!menuIsVisible));
  };
  const newGameButtonChangeHandler = () => {
    dispatch(setMenu(!menuIsVisible));
  };
  const restartButtonClickHandler = () => {};

  return (
    <div className="p-6 relative">
      {/**menu */}
      <div className="flex justify-between font-atkinsonHyperlegible mb-20">
        <h1 className="font-bold text-2xl">memory</h1>
        <button
          onClick={menuClickHandler}
          className="bg-orange  font-bold text-base text-white py-2 px-4 rounded-3xl"
        >
          Menu
        </button>
      </div>
      {/**middle */}
      <div
        className={
          selectGridSize
            ? "grid grid-cols-4 grid-rows-4 text-center gap-[12.30px] mb-24 first-letter"
            : "grid grid-cols-6 grid-rows-6 text-center gap-[9.12px] mb-24 first-letter"
        }
      >
        {randomNumbers.map((num, index) => (
          <div
            className={`text-white font-bold  ${
              selectGridSize
                ? "text-[40px] py-[7px] w-[72.53px] h-[72.53px]"
                : "text-[24px] py-[5px] w-[46.88px]"
            }  rounded-full  ${
              num.isFlipped ? "bg-orange animate-spin" : "bg-darkGrey "
            } ${num.isMatch ? " bg-slate-300" : ""}`}
            key={index}
            onClick={() => {
              numberClickHandler(num, index);
            }}
          >
            {selectedTheme === "Numbers" ? (
              num.isFlipped ? (
                num.value
              ) : (
                "\u00A0"
              )
            ) : num.isFlipped ? (
              <div className="flex justify-center ">
                <img
                  src={num.value}
                  alt="icon"
                  className={`${
                    selectGridSize
                      ? "w-[40px] h-[40px] mt-2"
                      : "w-[20px] h-[20px] mt-2"
                  } `}
                  style={{ color: "red" }}
                />
              </div>
            ) : (
              "\u00A0"
            )}
          </div>
        ))}
      </div>
      {/* footer */}

      {/* footer2*/}
      {numberOfPlayers > "1" ? (
        <div className="flex gap-6 font-atkinsonHyperlegible">
          {Array.from({ length: numberOfPlayers }, (_, i) => (
            <div
              key={i}
              className={`flex flex-col items-center py-2 px-2 ${
                i === currentPlayerIndex ? "bg-orange" : "bg-lightGrey2"
              } text-center rounded-md w-full`}
            >
              <h1 className="text-grey">P{i + 1}</h1>
              <div className="text-2xl w-12">{playerValues[i]}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex gap-6 font-atkinsonHyperlegible">
          <div className="py-2 px-12 bg-lightGrey2 text-center rounded-md">
            <h1 className="text-grey">Time</h1>
            <div className="text-2xl w-12">{formattedTime}</div>
          </div>
          <div className="py-2 px-12 bg-lightGrey2 text-center rounded-md">
            <h1 className="text-grey">Moves</h1>
            <div className="text-2xl">{count}</div>
          </div>
        </div>
      )}

      {randomNumbers.every((item) => item.isFlipped) && (
        <GameOverMultyPlayer
          currentPlayerIndex={currentPlayerIndex}
          playerValues={playerValues}
        />
      )}

      {/* <GameOverSolo/> */}
      {randomNumbers.every(
        (item) => item.isFlipped && numberOfPlayers === "1"
      ) && <GameOverSolo count={count} formattedtime={formattedTime} />}
      {/**menu */}
      {!menuIsVisible && (
        <div className="top-0 left-0 right-0 w-full h-full pt-[210px] fixed bg-[#181818] bg-opacity-70 ">
          <div className="absolute z-20 left-0 right-0 ">
            <div className="  p-6 ">
              <div className="flex flex-col gap-4 p-6 bg-white rounded-xl">
                <button
                  onClick={restartButtonClickHandler}
                  className="bg-orange  font-bold text-lg text-white pt-3 px-[107px] pb-3 rounded-3xl"
                >
                  Restart
                </button>

                <Link to={"/"}>
                  <button
                    onClick={newGameButtonChangeHandler}
                    className="bg-lightGrey  font-bold text-lg text-white pt-3 px-[94px] pb-3 rounded-3xl whitespace-nowrap "
                  >
                    New Game
                  </button>
                </Link>
                <button
                  onClick={resumeGameButtonClickHandler}
                  className="bg-lightGrey  font-bold text-lg text-white pt-3 px-20 pb-3 rounded-3xl whitespace-nowrap"
                >
                  Resume Game
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
