import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="flex justify-evenly gap-10 m-7 ">
        <div className="font-bold">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="font-bold">Search</div>
        <div className="font-bold">Favorite</div>
      </div>
    </div>
  );
}
