import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header
      className="w-full flex flex-col md:flex-row justify-start items-center"
      style={{ background: "#C9C9C9" }}
    >
      <div
        className="uppercase font-bold tracking-tighter px-8 py-3"
        style={{ fontSize: "1.7rem" }}
      >
        Imperozoo
      </div>
      <nav>
        <ul className="ml-0 md:ml-10 mb-0 flex flex-col md:flex-row justify-start items-center gap-4 md:gap-10 -mt-px text-lg font-medium tracking-tight ">
          <li className="w-full md:w-auto text-center">
            <NavLink
              exact
              strict
              to="/"
              style={{
                color: "#000",
                padding: "1.1rem 0",
                display: "inline-block",
              }}
              activeStyle={{
                fontWeight: 800,
                borderBottom: "4px solid #000",
              }}
            >
              Adopt an animal
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              strict
              to="/administration"
              style={{
                color: "#000",
                padding: "1.1rem 0",
                display: "inline-block",
              }}
              activeStyle={{
                fontWeight: 800,
                borderBottom: "4px solid #000",
              }}
            >
              Administration
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
