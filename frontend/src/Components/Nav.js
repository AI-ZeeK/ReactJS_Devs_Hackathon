import React from "react";
import Image from "next/image";
import { useState } from "react";
import { navItemsArray } from "@/Utils/Utils";

function Nav(props) {
  // State control for input feild
  const [searchInput, setSearchInput] = useState("");
  const [aside, setAside] = useState(true);
  const handleSearchInputSubmit = (event) => {
    event.preventDefault();
    setSearchInput("");
  };

  // state control for form submission
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };
  return (
    <header>
      {/* Aside menu for smaller devices */}
      <aside className={`asideMenu ${aside ? "asideHide" : "asideShow"}`}>
        <div className="asideMenuCard">
          <button
            onClick={() => {
              setAside(!aside);
            }}
            className={`asideCancelBtn`}
          >
            <Image
              width={40}
              height={40}
              src="/images/close.svg"
              alt="cancel"
            ></Image>
          </button>
          {/* Container for aside menue */}
          <div className="asideNavContainer">
            {navItemsArray.map((items, index) => {
              return (
                <div key={index} className="asideNavItems">
                  <a href="#">
                    <button>{items.name}</button>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
      <nav className="landingPageNavbar">
        {/* Hamburger menu and logo code */}
        <div>
          <button
            onClick={() => {
              setAside((prev) => !prev);
            }}
            className="navHamburger"
          >
            <Image
              width={30}
              height={30}
              src="/images/hamburger.svg"
              alt="Logo"
            ></Image>
          </button>
          <a href="#">
            <picture className="navLogo">
              <Image
                width={40}
                height={40}
                src="/images/dummyLogo.svg"
                alt="menu"
              ></Image>
            </picture>
          </a>
        </div>
        {/* Navigation */}
        <div className="headerNav">
          {navItemsArray.map((items, index) => {
            return (
              <a href="#" key={index}>
                {items.name}
              </a>
            );
          })}
        </div>
        <form
          action="/api/form"
          onSubmit={handleSearchInputSubmit}
          method="post"
        >
          <input
            value={searchInput}
            onChange={handleSearchInputChange}
            type="text"
            placeholder="Search"
            className="input"
          />
          <button type="submit" className="saerchFormButton">
            <small className="">Search</small>
          </button>
        </form>
      </nav>
    </header>
  );
}

export default Nav;
