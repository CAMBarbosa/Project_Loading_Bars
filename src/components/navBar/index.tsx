import { Nav, NavLink, NavMenu } from "./navBarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/simpleProgressBar">Simple Progress Bar</NavLink>
          <NavLink to="/complexProgressBar">Complex Progress Bars</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
