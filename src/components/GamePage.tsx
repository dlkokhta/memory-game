import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../store/MenuSlice";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import { objectTypes } from "../types";

const GamePage = () => {
  const numbers = Array.from({ length: 8 }, (_, index) => {
    const value = index + 1;
    return {
      value: value,
      isFlipped: false,
      isMatch: false,
    };
  });

  // Duplicate each number to create pairs
  const duplicateNumbers = numbers.concat(numbers);

  // Shuffle the duplicate numbers array
  const randomArray = duplicateNumbers.slice().sort(() => Math.random() - 0.5);

  const [randomNumbers, setRundomNumbers] =
    useState<objectTypes[]>(randomArray);

  const [clickedObject, setClickedObject] = useState<objectTypes | null>(null);

  // const [firstNumber, setFirstNumber] = useState<number | null>(null);

  const dispatch = useDispatch();
  const menuIsVisible = useSelector((store: RootState) => store.menu2.menu);

  // const numberClickHandler = (clickedNum: objectTypes): void => {
  //   setClickedObject(clickedNum);

  //   setClickedObject((prevClickedObject) => {
  //     if (prevClickedObject) {
  //       return {
  //         ...prevClickedObject,
  //         isFlipped: !prevClickedObject.isFlipped,
  //       };
  //     }
  //     return prevClickedObject;
  //   });
  // };
  // console.log(clickedObject?.value);

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
    // const numbers = Array.from({ length: 8 }, (_, number) => [
    //   number + 1,
    //   number + 1,
    // ]).flat();
    // const randomArray = numbers.sort(() => Math.random() - 0.5);
    // // setRundomNumbers(randomArray);
    // dispatch(setMenu(!menuIsVisible));
  };
  console.log(randomNumbers);

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
      <div className=" grid grid-cols-4 grid-rows-4 text-center gap-[12.30px] mb-24">
        {randomNumbers.map((num, index) => (
          <div
            className={`text-white font-bold text-[40px] p-[7px] rounded-full  ${
              randomNumbers.isFlipped ? "bg-orange animate-spin" : "bg-darkGrey"
            }`}
            key={index}
            onClick={() => {
              const updatedNumbers = [...randomNumbers]; // Create a copy of the array
              updatedNumbers[index].isFlipped = true; // Update the copy
              setRundomNumbers(updatedNumbers); // Set the state with the updated copy
              console.log("index", index);
            }}
          >
            {/* {clickedNumber === num ? num : "\u00A0"} */}
            {randomNumbers.isFlipped ? num.value : "\u00A0"}
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
