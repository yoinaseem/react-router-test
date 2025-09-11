import mvEmblem from "../../assets/mv-emblem.svg";
import { Link } from "react-router";

export function Header() {
  return (
    <header className="flex px-12 py-4 items-center shadow-sm/4 bg-white">
      {/* Logo and Name */}
      <div className="">
        <Link to="/" className="flex gap-4 font-sans font-semibold text-2xl items-center">
          <img src={mvEmblem} alt="React Router" className=" w-10" />
          Ministry of Youth and Sports
        </Link>
      </div>
      {/* Nav Links */}
      <div className="absolute right-12">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-custom-gray text-2xl">
            Home
          </Link>
          <Link to="/" className="text-custom-gray text-lg">
            ismail@youth.gov.mv
          </Link>
        </div>
      </div>
    </header>
  );
}
