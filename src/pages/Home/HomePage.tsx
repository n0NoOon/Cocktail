import { useEffect, useState } from "react";
import getDrinkByFirstLetter from "../../api/qurries/getDrinkByFirstLetter";
import { Cocktail } from "../../api/types/Cocktail";

export default function Home() {
  const [letter, setLetter] = useState("a");
  const [drinks, setDrinks] = useState<Cocktail[]>();

  const getDrinks = async function () {
    const res = await getDrinkByFirstLetter(letter);
    setDrinks(res);
  };

  useEffect(() => {
    getDrinks();
  }, [letter]);

  const drinksRendered = drinks?.map((d) => {
    return (
      <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[200px] hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-auto m-2.5 overflow-hidden text-white rounded-md">
          <img
            className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
            src={d.strDrinkThumb}
            alt="Cocktail Pic"
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            {d.strDrink}
          </h6>
          <p>#{d.idDrink}</p>
        </div>
        <div></div>
      </div>
    );
  });

  const checkBtn = (input: string) => {
    if (input === letter) {
      return "bg-red-900 w-[25px] h-[30px] rounded";
    } else {
      return "bg-slate-500 w-[25px] h-[30px] rounded";
    }
  };

  return (
    <div>
      <div className="flex justify-between rounded bg-slate-300">
        <button
          onClick={() => setLetter("a")}
          value={"a"}
          className={checkBtn("a")}
        >
          A
        </button>
        <button
          onClick={() => setLetter("b")}
          value={"b"}
          className={checkBtn("b")}
        >
          B
        </button>
        <button
          onClick={() => setLetter("c")}
          value={"c"}
          className={checkBtn("c")}
        >
          C
        </button>
        <button
          onClick={() => setLetter("d")}
          value={"d"}
          className={checkBtn("d")}
        >
          D
        </button>
        <button
          onClick={() => setLetter("e")}
          value={"e"}
          className={checkBtn("e")}
        >
          E
        </button>
        <button
          onClick={() => setLetter("f")}
          value={"f"}
          className={checkBtn("f")}
        >
          F
        </button>
        <button
          onClick={() => setLetter("g")}
          value={"g"}
          className={checkBtn("g")}
        >
          G
        </button>
        <button
          onClick={() => setLetter("h")}
          value={"h"}
          className={checkBtn("h")}
        >
          H
        </button>
        <button
          onClick={() => setLetter("i")}
          value={"i"}
          className={checkBtn("i")}
        >
          I
        </button>
        <button
          onClick={() => setLetter("j")}
          value={"j"}
          className={checkBtn("j")}
        >
          J
        </button>
        <button
          onClick={() => setLetter("k")}
          value={"k"}
          className={checkBtn("k")}
        >
          K
        </button>
        <button
          onClick={() => setLetter("l")}
          value={"l"}
          className={checkBtn("l")}
        >
          L
        </button>
        <button
          onClick={() => setLetter("m")}
          value={"m"}
          className={checkBtn("m")}
        >
          M
        </button>
        <button
          onClick={() => setLetter("n")}
          value={"n"}
          className={checkBtn("n")}
        >
          N
        </button>
        <button
          onClick={() => setLetter("o")}
          value={"o"}
          className={checkBtn("o")}
        >
          O
        </button>
        <button
          onClick={() => setLetter("p")}
          value={"p"}
          className={checkBtn("p")}
        >
          P
        </button>
        <button
          onClick={() => setLetter("q")}
          value={"q"}
          className={checkBtn("q")}
        >
          Q
        </button>
        <button
          onClick={() => setLetter("r")}
          value={"r"}
          className={checkBtn("r")}
        >
          R
        </button>
        <button
          onClick={() => setLetter("s")}
          value={"s"}
          className={checkBtn("s")}
        >
          S
        </button>
        <button
          onClick={() => setLetter("t")}
          value={"t"}
          className={checkBtn("t")}
        >
          T
        </button>
        <button
          onClick={() => setLetter("u")}
          value={"u"}
          className={checkBtn("u")}
        >
          U
        </button>
        <button
          onClick={() => setLetter("v")}
          value={"v"}
          className={checkBtn("v")}
        >
          V
        </button>
        <button
          onClick={() => setLetter("w")}
          value={"w"}
          className={checkBtn("w")}
        >
          W
        </button>
        <button
          onClick={() => setLetter("x")}
          value={"x"}
          className={checkBtn("x")}
        >
          X
        </button>
        <button
          onClick={() => setLetter("y")}
          value={"y"}
          className={checkBtn("y")}
        >
          Y
        </button>
        <button
          onClick={() => setLetter("z")}
          value={"z"}
          className={checkBtn("z")}
        >
          Z
        </button>
      </div>
      <div className="flex flex-wrap gap-x-5">{drinksRendered}</div>
    </div>
  );
}
