import { navlinks } from "../Constants";
import { nav_icon } from "../Constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="map_cont flex items-center justify-center px-4 py-6 text-[18px] leading-7 max-sm:text-[10px]">
          <ul className="flex items-center space-x-4">
            <div className="cont-logp">
              <img src="/icons/logo.png" alt="" />
            </div>
            <div className="cont-nav-links flex items-center gap-10">
              <div className="cont-titles flex justify-center gap-10 lg:pl-56">
                {navlinks.map((nav) => (
                  <li key={nav.id} className="group relative p-2 text-white">
                    <a href={`#${nav.id}`}>{nav.title}</a>
                    <span className="group-hover:opacity-100bg-secondary absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#13B0F5] via-purple-500 to-[#E70FAA] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
                  </li>
                ))}
              </div>
              <div className="cont-icons flex gap-5">
                {nav_icon.map((icon) => (
                  <li key={icon.title}>
                    <a href={`${icon.url}`}>
                      <img className="inline" src={icon.path} alt="" />
                    </a>
                  </li>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
