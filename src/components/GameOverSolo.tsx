import { Link } from "react-router-dom";
interface GameOverMultyPlayerProps {
  restartButtonClickHandler2: () => void;
  formattedtime: string;
  count: number;
}
const GameOverSolo: React.FC<GameOverMultyPlayerProps> = (props) => {
  return (
    <div>
      <div className="top-0 left-0 right-0 w-full h-full pt-[120px] fixed bg-[#181818] bg-opacity-70 ">
        <div className="absolute z-20 left-0 right-0 md:px-40 xl:px-72 sm:px-24 2xl:px-[440px] 3xl:px-[580px] 4xl:px-[620px]">
          <div className="p-6 ">
            <div className="flex flex-col px-6 pb-6 gap-6 pt-8 bg-white rounded-xl ">
              <div className="flex flex-col text-center ">
                <h1 className=" font-atkinsonHyperlegible font-bold text-xl ">
                  You did it!
                </h1>
                <h3 className="font-atkinsonHyperlegible font-bold text-sm text-grey ">
                  Game over! Here's how you got on...
                </h3>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">
                <div className="flex justify-between items-center py-3 px-4 bg-lightGrey2 rounded-md ">
                  <h1 className="text-xs font-atkinsonHyperlegible text-grey font-bold ">
                    Time Elapsed
                  </h1>
                  <div className=" font-atkinsonHyperlegible text-xl font-bold lg:text-[32px]">
                    {props.formattedtime}
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-lightGrey2 rounded-md ">
                  <h1 className="text-xs font-atkinsonHyperlegible text-grey font-bold lg:text-lg">
                    Moves Taken
                  </h1>
                  <div className=" font-atkinsonHyperlegible text-xl font-bold ">
                    {props.count}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                <button
                  onClick={props.restartButtonClickHandler2}
                  className="bg-orange  font-bold text-lg text-white pt-3 px-[107px] pb-3 rounded-3xl "
                >
                  Restart
                </button>

                <Link to={"/"}>
                  <button className="bg-lightGrey2 w-full  font-bold text-lg text-black pt-3 px-[65px] pb-3 rounded-3xl whitespace-nowrap">
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
