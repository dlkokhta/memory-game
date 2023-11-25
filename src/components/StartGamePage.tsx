import { useDispatch, useSelector } from "react-redux";
import { setSelectTheme } from "../store/SelectThemeSlice";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import { setGridSize } from "../store/GridSizeSlice";
// import { useState } from "react";

const StartGamePage = () => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(
    (store: RootState) => store.themeArgument.selectTheme
  );
  console.log(selectedTheme);
  const selectGridSize = useSelector(
    (store: RootState) => store.gridSize.selectGridSize
  );
  // const [test, setTest] = useState<string>("Numbers");

  const themeClickHandler = (buttonType: string): void => {
    dispatch(setSelectTheme(buttonType));
  };
  const grid4x4ClickHandler = () => {
    dispatch(setGridSize(true));
  };
  const grid6x6ClickHandler = () => {
    dispatch(setGridSize(false));
  };

  return (
    <div className=" bg-darkBlue pt-20 px-6 pb-28 font-atkinsonHyperlegible">
      <h1 className="text-white pb-11 font-bold text-[32px] text-center">
        memory
      </h1>

      <div className="bg-white p-6 rounded-xl">
        <h2 className="text-grey text-base font-bold mb-3">Select Theme</h2>

        {/**numbers, icons */}
        <div className="flex flex-row gap-3 mb-6 w-full">
          <button
            value={selectedTheme}
            onClick={() => themeClickHandler("Numbers")}
            className={`${
              selectedTheme === "Numbers" ? "bg-darkGrey" : "bg-lightGrey"
            } text-white  text-base leading-5 py-3 px-9 rounded-3xl w-full`}
          >
            Numbers
          </button>
          <button
            value={selectedTheme}
            onClick={() => themeClickHandler("Icons")}
            className={` ${
              selectedTheme === "Icons" ? "bg-darkGrey" : "bg-lightGrey"
            } text-white text-base leading-5 py-3 px-11 rounded-3xl w-full`}
          >
            Icons
          </button>
        </div>

        <h2 className="text-grey text-base font-bold mb-3">
          Numbers of PLayers
        </h2>

        <div className="flex flex-row gap-2 mb-6 w-full">
          <button className=" bg-darkGrey text-white text-base leading-5 py-3 px-7 rounded-3xl w-full">
            1
          </button>
          <button className=" bg-lightGrey text-white text-base leading-5 py-3 px-7 rounded-3xl w-full">
            2
          </button>
          <button className=" bg-lightGrey text-white text-base leading-5 py-3 px-7 rounded-3xl w-full">
            3
          </button>
          <button className=" bg-lightGrey text-white text-base leading-5 py-3 px-7 rounded-3xl w-full">
            4
          </button>
        </div>

        <h2 className="text-grey text-base font-bold mb-3 w-full">Grid Size</h2>

        <div className="flex flex-row gap-3 mb-8">
          <button
            onClick={grid4x4ClickHandler}
            className={`${
              selectGridSize ? "bg-darkGrey" : "bg-lightGrey"
            } text-white text-base leading-5 py-3 px-[53px] rounded-3xl w-full`}
          >
            4x4
          </button>
          <button
            onClick={grid6x6ClickHandler}
            className={`${
              !selectGridSize ? "bg-darkGrey" : "bg-lightGrey"
            } text-white text-base leading-5 py-3 px-[53px] rounded-3xl w-full`}
          >
            6x6
          </button>
        </div>

        <div>
          {/* <Link to={selectGridSize ? "/game" : "/game/page6x6"}> */}
          <Link to={"/game"}>
            <button className=" bg-orange text-white text-base leading-5 py-3 w-full rounded-3xl">
              Start Game
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartGamePage;
