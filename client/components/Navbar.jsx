import { Link } from "react-router-dom";

const Navbar = ({
  setMenu,
  setMobileMenu,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <nav className="flex sticky top-0 justify-between z-50 items-center px-10 py-4 border-b-[0.4px] border-b-black bg-[#eee]">
      <Link to="/" className="text-[1.2rem] font-extrabold">
        DevTools
      </Link>
      <span className="hidden md:flex items-center gap-3">
        <span className="z-[50]">
          <select
            id="category"
            name="category"
            value={selectedCategory} // Bind the selected category to the state variable
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-[#eee] text-black placeholder-text-[#9c9c9c] outline-none px-[10px] py-2 w-[100px] rounded-lg ring-1 ring-[#b7b7b7]">
            <option value="">All</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Web Development">Web Development</option>
            <option value="Designing">Designing</option>
            <option value="Software Development">Software Development</option>
            <option value="Deployment">Deployment</option>
            <option value="AI Tool">AI Tool</option>
            <option value="Other">Other</option>
          </select>
        </span>
        <Link
          to="/create"
          className="flex items-center gap-2 text-[1rem] font-semibold bg-[#282828] hover:bg-[#121212] text-[#eee] rounded-md px-[20px] py-2">
          ADD{" "}
          <img className="w-[10px] invert" src="/icons/right-arrow.png"></img>
        </Link>
        <button
          onClick={() => setMenu(true)}
          className="z-[30] bg-[#eee] p-2 rounded-lg ring-1 ring-[#bdbdbd] hover:bg-[#ddd]">
          <img
            className="w-[10px] rotate-90"
            src="/icons/right-arrow.png"></img>
        </button>
      </span>

      <span className="flex md:hidden">
        <button onClick={() => setMobileMenu(true)}>
          <img className="w-[20px]" src="./icons/menu.png"></img>
        </button>
      </span>
    </nav>
  );
};

export default Navbar;
