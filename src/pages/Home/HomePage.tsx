import { useState } from "react";
import getDrinkByFirstLetter from "../../api/qurries/getDrinkByFirstLetter";

export default function Home() {
  const [letter, setLetter] = useState("a");

  const getCocktail = async function () {};

  return (
    <div>
      <div>
        <button onClick={() => setLetter("a")}>A</button>
        <button onClick={() => setLetter("b")}>B</button>
        <button onClick={() => setLetter("c")}>C</button>
        <button onClick={() => setLetter("d")}>D</button>
        <button onClick={() => setLetter("e")}>E</button>
        <button onClick={() => setLetter("f")}>F</button>
        <button onClick={() => setLetter("g")}>G</button>
        <button onClick={() => setLetter("h")}>H</button>
        <button onClick={() => setLetter("i")}>I</button>
        <button onClick={() => setLetter("j")}>J</button>
        <button onClick={() => setLetter("k")}>K</button>
        <button onClick={() => setLetter("l")}>L</button>
        <button onClick={() => setLetter("m")}>M</button>
        <button onClick={() => setLetter("n")}>N</button>
        <button onClick={() => setLetter("o")}>O</button>
        <button onClick={() => setLetter("p")}>P</button>
        <button onClick={() => setLetter("q")}>Q</button>
        <button onClick={() => setLetter("r")}>R</button>
        <button onClick={() => setLetter("s")}>S</button>
        <button onClick={() => setLetter("t")}>T</button>
        <button onClick={() => setLetter("u")}>U</button>
        <button onClick={() => setLetter("v")}>V</button>
        <button onClick={() => setLetter("w")}>W</button>
        <button onClick={() => setLetter("x")}>X</button>
        <button onClick={() => setLetter("y")}>Y</button>
        <button onClick={() => setLetter("z")}>Z</button>
      </div>
      <div>Show</div>
    </div>
  );
}
