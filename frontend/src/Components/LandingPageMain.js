import React from "react";
import Image from "next/image";
import { ctaArray, contactsArray } from "@/Utils/Utils";

function LandingPageMain(props) {
  return (
    <main className="landingMain">
      {/* Left section */}
      <section className="ctaLeft">
        <h1>
          Quality Doctors
          <span className="text-secondary">For your best care</span>
        </h1>

        <p className="text-tetiary">
          Discover the best Doctors, clinics & Hospitals nearest to you.
        </p>
        <div>
          <button className="ctaLeftBtn btn">Book an appointment</button>
        </div>
        {/* contact info at the bottom */}
        <div className="contactInfo">
          {/* Data here is gotten from a contactsArray in the Utils file */}
          {contactsArray.map((items, index) => {
            return (
              <picture key={index}>
                <div>
                  <a href="#" className="iconContainer">
                    <Image
                      width={25}
                      height={25}
                      src={items.path}
                      alt={items.name}
                    ></Image>
                  </a>
                </div>
              </picture>
            );
          })}
        </div>
      </section>
      {/* Right section */}
      <section className="ctaRight">
        {/* Data here is fetched from a CTA, {call to action} array in the utils file*/}
        {ctaArray.map((items, index) => {
          return (
            <picture key={index}>
              <div className="ctaImages">
                <a href="#">
                  <Image
                    width="70"
                    height="90"
                    src={items.path}
                    alt="illustration"
                  ></Image>
                </a>
                <p className="text-tetiary">{items.description}</p>
              </div>
            </picture>
          );
        })}
      </section>
    </main>
  );
}

export default LandingPageMain;
