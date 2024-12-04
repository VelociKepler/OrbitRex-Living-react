import { Link } from "react-router-dom";

function NavbarHome() {
  return (
    <>
      {/* Desktop */}
      <nav className="md:hidden lg:z-10 lg:flex lg:h-20 lg:w-full lg:items-center lg:justify-around lg:text-white">
        <Link to="/">
          <div className="lg:text-3xl lg:font-bold">OrbitRex Living</div>
        </Link>
        <ul className="lg:flex lg:gap-10 lg:font-bold">
          <li>
            <Link
              to="/"
              className="lg:border-b-2 lg:border-transparent lg:transition-all lg:duration-200 lg:hover:border-orange-500"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="lg:border-b-2 lg:border-transparent lg:transition-all lg:duration-200 lg:hover:border-orange-500"
            >
              SHOP
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="lg:border-b-2 lg:border-transparent lg:transition-all lg:duration-200 lg:hover:border-orange-500"
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="lg:border-b-2 lg:border-transparent lg:transition-all lg:duration-200 lg:hover:border-orange-500"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className="lg:border-b-2 lg:border-transparent lg:transition-all lg:duration-200 lg:hover:border-orange-500"
            >
              ADMIN
            </Link>
          </li>
        </ul>
        <div className="lg:relative">
          <input
            type="text"
            className="lg:rounded-full lg:px-5 lg:py-2 lg:pr-10 lg:text-black lg:outline-none"
            placeholder="Search"
          />
          <button className="lg:absolute lg:right-14 lg:top-1/2 lg:-translate-y-2.5 lg:transform lg:rounded-full lg:px-5 lg:text-gray-300">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <Link to="/login">
            <i className="fa-solid fa-circle-user lg:ml-7 lg:translate-y-1 lg:text-3xl"></i>
          </Link>
        </div>
      </nav>

      {/* Tablet */}
      <nav className="lg:hidden">
        <div className="mx-5 flex h-20 items-center justify-between gap-4 text-white">
          <Link to="/">
            <div className="w-full">
              <h1 className="flex whitespace-nowrap text-2xl font-bold">
                OrbitRex Living
              </h1>
            </div>
          </Link>
          <div className="relative">
            <input
              type="text"
              className="w-80 rounded-full px-5 py-3 text-black outline-none"
              placeholder="Search"
            />
            <button className="absolute right-1 top-1/2 -translate-y-2.5 transform rounded-full px-5 text-gray-300">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="flex gap-10">
            <Link to="/cart">
              <i className="fa-solid fa-basket-shopping text-4xl"></i>
            </Link>
            <button>
              <i className="fa-solid fa-bars text-4xl"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarHome;
