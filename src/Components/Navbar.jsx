import { navlinks } from "../Constants";
import { nav_icon } from "../Constants";

const Navbar = () => {
  return (
    <nav>
      <div className="map_cont flex justify-center px-4 py-6 text-[20px] max-sm:text-[10px]">
        <ul className="flex items-center space-x-4">
          <div className="cont-logp">
            <img src="/icons/logo.png" alt="" />
          </div>
          <div className="cont-nav-links flex gap-10">
            <div className="cont-titles flex justify-center gap-10 lg:pl-52 ">
              {navlinks.map((nav) => (
                <li key={nav.id} className="text-white">
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </div>
            <div className="cont-icons flex gap-5">
              {nav_icon.map((icon) => (
                <li key={icon.title}>
                  
                  <img className="inline" src={icon.path} alt="" />
                </li>
              ))}
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
