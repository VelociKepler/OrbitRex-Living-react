import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className = "fixed top-0 z-10 flex h-20 w-full items-center justify-around bg-white text-black shadow-lg">
      <Link to = "/">
        <div className = "text-3xl font-bold">OrbitRex Living</div>
      </Link>
      <ul className = "flex gap-10 font-bold">
        <Link
          to = "/"
          className = "border-b-2 border-transparent transition-all duration-200 hover:border-orange-500"
        >
          <li>HOME</li>
        </Link>
        <Link
          to = "/products"
          className = "border-b-2 border-transparent transition-all duration-200 hover:border-orange-500"
        >
          <li>SHOP</li>
        </Link>
        <Link
          to = ""
          className = "border-b-2 border-transparent transition-all duration-200 hover:border-orange-500"
        >
          <li>CONTACT</li>
        </Link>
        <Link
          to = ""
          className = "border-b-2 border-transparent transition-all duration-200 hover:border-orange-500"
        >
          <li>SERVICES</li>
        </Link>
        <Link
          to = "/admin"
          className = "border-b-2 border-transparent transition-all duration-200 hover:border-orange-500"
        >
          <li>ADMIN</li>
        </Link>
      </ul>
      <div className = "relative">
        <input
          type = "text"
          className = "rounded-full border-2 px-5 py-2 pr-10 text-black outline-none"
          placeholder = "Search"
        />
        <button className = "absolute right-14 top-1/2 -translate-y-2.5 transform rounded-full px-5 text-gray-300">
          <i className = "fa-solid fa-magnifying-glass"></i>
        </button>
        <Link to = "/login">
          <i className = "fa-solid fa-circle-user ml-7 translate-y-1 text-3xl"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
