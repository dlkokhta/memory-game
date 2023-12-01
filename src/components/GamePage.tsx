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
    let timerId;
    if (
      !randomNumbers.every((item) => item.isFlipped) &&
      numberOfPlayers === "1"
    ) {
      timerId = setTimeout(() => {
        setTime(time + 1);
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        setFormattedTime(`${minutes}:${seconds}`);
      }, 1000);
    }
    return () => clearTimeout(timerId); // This will clear the timeout when the component unmounts or time state changes
  }, [time]);

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
  const restartButtonClickHandler = () => {
    setFirstNumber(null);
    setSecondNumber(null);
    setRandomNumbers(selectedTheme === "Numbers" ? randomArray : randomIcons);
    setCount(0);
    setClicks(0);
    setTime(1); // Resetting the time to 1
    setFormattedTime("0:01");
    setCurrentPlayerIndex(0);
    setPlayerValues(Array.from({ length: numberOfPlayers }, () => 0));

    dispatch(setMenu(!menuIsVisible));
  };

  const restartButtonClickHandler2 = () => {
    setFirstNumber(null);
    setSecondNumber(null);
    setRandomNumbers(selectedTheme === "Numbers" ? randomArray : randomIcons);
    setCount(0);
    setClicks(0);
    setTime(1); // Resetting the time to 1
    setFormattedTime("0:01");
    setCurrentPlayerIndex(0);
    setPlayerValues(Array.from({ length: numberOfPlayers }, () => 0));
  };

  const windowWidth = window.innerWidth;

  return (
    <div className="p-6 relative lg:p-9">
      {/**menu */}
      <div className="flex justify-between font-atkinsonHyperlegible mb-20 lg:mb-40">
        <h1 className="font-bold text-2xl lg:text-[40px]">memory</h1>
        <button
          onClick={menuClickHandler}
          className="bg-orange  font-bold text-base text-white py-2 px-4 rounded-3xl lg:hidden"
        >
          Menu
        </button>

        <div className="gap-4 hidden lg:flex">
          <button
            onClick={restartButtonClickHandler2}
            className="bg-orange  font-bold text-base text-white py-2 px-4 rounded-3xl lg:text-2xl lg:py-3 lg:px-7 lg:rounded-full"
          >
            Restart
          </button>
          <Link to={"/"}>
            <button
              // onClick={menuClickHandler}
              className="bg-lightGrey2  font-bold text-base text-black py-2 px-4 rounded-3xl lg:text-2xl lg:py-4 lg:px-5 lg:rounded-full"
            >
              New Game
            </button>
          </Link>
        </div>
      </div>

      {/**middle */}
      <div>
        <div
          className={
            selectGridSize
              ? "grid grid-cols-4 grid-rows-4 text-center gap-[12.30px] mb-24 justify-items-center  lg:justify-items-center lg:px-20 lg:mb-32"
              : "grid grid-cols-6 grid-rows-6 text-center gap-[9.12px] mb-24 justify-items-center lg:justify-items-center lg:px-[75px] lg:mb-32"
          }
        >
          {randomNumbers.map((num, index) => (
            <div
              className={`text-white font-bold ${
                selectGridSize
                  ? "text-[40px] py-[7px] w-[72.53px] h-[72.53px] lg:w-[118px] lg:h-[118px] lg:text-[56px] lg:flex lg:items-center lg:justify-center "
                  : "text-[24px] py-[5px] w-[46.88px] h-[46.88px]  lg:w-[82px] lg:h-[82px] lg:text-[44px] lg:flex lg:items-center lg:justify-center"
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
      </div>
      {/* footer */}

      {/* footer2*/}
      {numberOfPlayers > "1" ? (
        <div className="flex gap-6 font-atkinsonHyperlegible lg:gap-3">
          {Array.from({ length: numberOfPlayers }, (_, i) => (
            <div
              key={i}
              className={`flex flex-col items-center py-2 px-2 ${
                i === currentPlayerIndex ? "bg-orange" : "bg-lightGrey2"
              } text-center rounded-md w-full lg:rounded-xl lg:py-4 lg:items-start lg:pl-4 `}
            >
              {/* <h1 className="text-grey ">P{i + 1}</h1> */}
              <h1
                className={` ${
                  i === currentPlayerIndex ? "text-white" : "text-grey"
                } lg:text-base`}
              >
                {windowWidth > 760 ? `Player${i + 1}` : `P${i + 1}`}
              </h1>
              <div
                className={`text-2xl w-12 lg:flex ${
                  i === currentPlayerIndex ? "text-white" : "text-black"
                }`}
              >
                {playerValues[i]}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex gap-6 justify-between font-atkinsonHyperlegible lg:px-20 lg:justify-between">
          <div className="py-2 px-12 bg-lightGrey2 text-center rounded-md lg:flex lg:items-center lg:py-5 lg:pl-7 lg:gap-28 lg:rounded-xl">
            <h1 className="text-grey lg:text-lg">Time</h1>
            <div className="text-2xl w-12 lg:text-3xl ">{formattedTime}</div>
          </div>
          <div className="py-2 px-12 bg-lightGrey2 text-center rounded-md lg:flex lg:items-center lg:py-5 lg:pl-7 lg:gap-28 lg:rounded-xl">
            <h1 className="text-grey lg:text-lg">Moves</h1>
            <div className="text-2xl lg:text-3xl">{count}</div>
          </div>
        </div>
      )}

      {randomNumbers.every((item) => item.isFlipped) && (
        <GameOverMultyPlayer
          currentPlayerIndex={currentPlayerIndex}
          playerValues={playerValues}
          restartButtonClickHandler2={restartButtonClickHandler2}
        />
      )}

      {/* <GameOverSolo/> */}
      {randomNumbers.every(
        (item) => item.isFlipped && numberOfPlayers === "1"
      ) && (
        <GameOverSolo
          count={count}
          formattedtime={formattedTime}
          restartButtonClickHandler2={restartButtonClickHandler2}
        />
      )}
      {/**menu */}
      {!menuIsVisible && (
        <div className="top-0 left-0 right-0 w-full h-full pt-[210px] fixed bg-[#181818] bg-opacity-70  ">
          <div className="absolute z-20 left-0 right-0 ">
            <div className="  p-6 ">
              <div className="flex flex-col gap-4 p-6 bg-white rounded-xl">
                <button
                  onClick={restartButtonClickHandler}
                  className="bg-orange hover:bg-hoverOrange  font-bold text-lg text-white pt-3 px-[107px] pb-3 rounded-3xl"
                >
                  Restart
                </button>

                <Link to={"/"}>
                  <button
                    onClick={newGameButtonChangeHandler}
                    className="bg-lightGrey  font-bold text-lg text-black hover:bg-lightBlue hover:text-white pt-3 px-[94px] w-full pb-3 rounded-3xl whitespace-nowrap "
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
