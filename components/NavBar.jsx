import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex gap-[24px] py-4 px-6 justify-center">
      <NavLink
        href="/#about-me"
        title="About Me"
        src="/file.svg"
        alt="File icon"
      />
      <NavLink
        href="/#projects"
        title="Projects"
        src="/window.svg"
        alt="Window icon"
      />
      <NavLink
        href="https://github.com/pauligarcia8"
        title="Github →"
        src="/globe.svg"
        alt="Globe icon"
        target="_blank"
        rel="noopener noreferrer"
      />
    </nav>
  );
};

export default NavBar;
