import React from "react";
import Nav from "./nav";
import Image from "next/image";
import { ctaArray, contactsArray } from "@/Utils/Utils";

function LandingPageMain(props) {
  return (
    <>
      <Nav />
      <main>
        <section className="ctaLeft">
          <h2>Ipsum nulla quis </h2>
          <h2>Tempor et laborum </h2>
          <p>
            Duis veniam quis incididunt quis magna anim ad incididunt
            reprehenderit et anim dolore aliquip commodo.
          </p>
          <button className="btn">Donate</button>
          <div className="contactInfo">
            {contactsArray.map((items, index) => {
              return (
                <picture key={index}>
                  <div className="iconContainer">
                    <Image
                      width="25"
                      height="25"
                      src={items.path}
                      alt={items.name}
                    ></Image>
                  </div>
                </picture>
              );
            })}
          </div>
        </section>
        <section className="ctaRight">
          {ctaArray.map((items, index) => {
            return (
              <picture key={index}>
                <div className="iconContainer">
                  <Image
                    width="20"
                    height="20"
                    src={items.path}
                    alt="instagram"
                  ></Image>
                </div>
                <p>{items.description}</p>
              </picture>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default LandingPageMain;
