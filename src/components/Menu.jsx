import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Le club
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Activités
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Résultats compétitions
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
