import React from "react";
import { Link } from "react-router-dom";
Link;

function Header() {
  return (
    <div className=" bg-slate-200">
      <div className=" flex justify-between items-center max-w-6xl  mx-auto p-3">
        <Link to={"/"}>
          <h1 className=" font-bold  ">Auth app</h1>
        </Link>
        <ul className=" flex gap-4">
          <Link to={"/"}>
            <li>home</li>
          </Link>
          <Link to={"/about"}>
            <li>about</li>
          </Link>
          <Link to={"sign-in"}>
            <li>sing In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
