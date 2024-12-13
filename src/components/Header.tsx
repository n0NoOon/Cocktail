import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>Search</div>
        <div>Favorite</div>
      </div>
    </div>
  );
}
