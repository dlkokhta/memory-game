import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../store/MenuSlice";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import { objectTypes } from "../types";
import anchor from "../assets/icons/anchor.png";
import bug from "../assets/icons/bug.png";
import car from "../assets/icons/car.png";
import flask from "../assets/icons/flask.png";
import handSpock from "../assets/icons/hand-spock.png";
import liraSign from "../assets/icons/lira-sign.png";
import moon from "../assets/icons/moon.png";
import snowflake from "../assets/icons/snowflake.png";
import sun from "../assets/icons/sun.png";

const GamePage = () => {
  const selectGridSize = useSelector(
    (store: RootState) => store.gridSize.selectGridSize
  );

  const icons8 = [
    anchor,
    bug,
    car,
    flask,
    handSpock,
    liraSign,
    moon,
    snowflake,
  ];
  const iconPears = icons8.concat(icons8);
  console.log(iconPears);

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

  console.log("selectGridSize from GamePage", selectGridSize);
  const [randomNumbers, setRandomNumbers] =
    useState<objectTypes[]>(randomArray);

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
      } else {
        resetTurns();
        console.log("do not match");
      }
    }
  }, [firstNumber, secondNumber]);
  // console.log(firstNumber?.num.value);
  // console.log(secondNumber?.num.value);

  // console.log(randomNumbers);
  const resetTurns = () => {
    setTimeout(() => {
      const updatedCardObjects = [...randomNumbers];
      firstNumber !== secondNumber;
      // updatedCardObjects[firstNumber.index].isFlipped = false;
      // updatedCardObjects[secondNumber.index].isFlipped = false;
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
            className={`text-white font-bold ${
              selectGridSize
                ? "text-[40px] py-[7px] w-[72.53px]"
                : "text-[24px] py-[5px] w-[46.88px]"
            }  rounded-full  ${
              num.isFlipped ? "bg-orange animate-spin" : "bg-darkGrey "
            } ${num.isMatch ? " bg-slate-300" : ""}`}
            key={index}
            onClick={() => {
              numberClickHandler(num, index);
            }}
          >
            {num.isFlipped ? num.value : "\u00A0"}
          </div>
        ))}
      </div>

      <div className="flex justify-between font-atkinsonHyperlegible">
        <div className="py-2 px-12 bg-lightGrey2 text-center rounded-md">
          <h1 className="text-grey">Time</h1>
          <div className="text-2xl">1:53</div>
        </div>
        <div className="py-2 px-12 bg-lightGrey2 text-center rounded-md">
          <h1 className="text-grey">Moves</h1>
          <div className="text-2xl">39</div>
        </div>
      </div>
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
