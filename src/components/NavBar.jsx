import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

function NavBar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-11 h-11 mr-4" />
          <NavLink to="/" className="text-3xl font-bold">
            TodoList
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/crear-nota"
            className="btn btn-soft btn-primary font-bold text-[1.1em]"
          >
            + Crear Nota
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
