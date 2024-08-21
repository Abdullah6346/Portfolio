import { navlinks } from "../Constants";
import { nav_icon } from "../Constants";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [isActive, setisActive] = useState(
    window.matchMedia("(max-width: 600px)").matches,
  );
  const toogleMenu = () => {
    setisOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const handleResize = (event) => {
      setisActive(event.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);
  return (
    <header>
      <nav>
        <div
          className={`${
            isOpenMenu
              ? "flex items-baseline bg-[#2e2e2e]"
              : "map_cont flex items-center"
          } justify-center px-4 py-6 text-[18px] leading-7 max-sm:text-[10px]`}
        >
          <ul
            className={
              isOpenMenu ? "flex items-baseline" : "flex items-center space-x-4"
            }
          >
            <div className="cont-open-menu flex justify-center text-left text-[15px]">
              <ul
                className={
                  isOpenMenu
                    ? "open-menu nav-links-con-2 flex flex-col items-center justify-center"
                    : "hidden"
                }
              >
                {navlinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="group relative cursor-pointer p-2 text-white max-lg:truncate"
                  >
                    <Link to={`#${nav.id}`} className="relative z-10">
                      {nav.title}
                    </Link>
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#13B0F5] via-purple-500 to-[#E70FAA] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={!isOpenMenu ? "cont-logp" : "hidden"}>
              <img src="/icons/logo.png" alt="" />
            </div>
            <div className="cont-nav-links flex items-center gap-10">
              <div
                className={
                  !isActive
                    ? "cont-titles flex justify-center gap-10 lg:pl-56"
                    : "hidden"
                }
              >
                {navlinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="group relative p-2 text-white max-lg:truncate"
                  >
                    <Link to={`#${nav.id}`}>{nav.title}</Link>
                    <span className="group-hover:opacity-100bg-secondary absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#13B0F5] via-purple-500 to-[#E70FAA] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
                  </li>
                ))}
              </div>
            </div>
            <div
              className={
                !isActive ? "humeicon-wrapper hidden" : "flex flex-col pl-40"
              }
            >
              <button onClick={toogleMenu}>
                <img src="/icons/burger-menu3.png" alt="" />{" "}
              </button>
            </div>

            <div className={!isActive ? "cont-icons flex gap-5" : "hidden"}>
              {nav_icon.map((icon) => (
                <li key={icon.title}>
                  <Link to={`${icon.url}`}>
                    <img className="inline" src={icon.path} alt="" />
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
