import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex sticky top-0 justify-between z-50 items-center px-10 py-4 border-b-[0.4px] border-b-black bg-[#eee]">
      <Link to="/" className="text-[1.2rem] font-extrabold">
        DevTools
      </Link>
      <Link
        to="/create"
        className="flex items-center gap-2 text-[1rem] font-semibold bg-[#282828] text-[#eee] rounded-md px-[20px] py-2">
        ADD <img className="w-[10px] invert" src="/icons/right-arrow.png"></img>
      </Link>
    </nav>
  );
};

export default Navbar;
