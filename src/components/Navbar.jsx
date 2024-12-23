import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import './Navbar.css'; // Importing custom CSS file

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h3 className="navbar-date">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="navbar-title">Flavoro Foods</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="navbar-search"
        />
      </div>
    </nav>
  );
};

export default Navbar;
