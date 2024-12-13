import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <div className="h-screen mx-10 px-10">
      <Header />
      <Outlet />
    </div>
  );
}
