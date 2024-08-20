import { navlinks } from "../Constants";
const Navbar = () => {
  return (
    <nav>
      <ul>
        {navlinks.map((nav) => (
          <li key={nav.id}> {nav.title}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
