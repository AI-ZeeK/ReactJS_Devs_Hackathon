import React from "react";
import Image from "next/image";
import { useState } from "react";

function Nav(props) {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchInput("");
    console.log(searchInput);
  };

  return (
    <header>
      <nav className="navbar">
        <div>
          <a>
            <picture className="iconContainer">
              <Image
                width="50"
                height="50"
                src="/black-instagram-icon.svg"
                alt="Logo"
              ></Image>
            </picture>
          </a>
        </div>
        <a>Home</a>
        <a>News</a>
        <a>FAQ</a>
        <a>About</a>
        <form onSubmit={handleSearchSubmit} className="">
          <input
            onChange={setSearchInput(e.targetValue())}
            type="text"
            placeholder="Search"
            className="input"
          />
          <button className="btn">Search</button>
        </form>
      </nav>
    </header>
  );
}

export default Nav;
