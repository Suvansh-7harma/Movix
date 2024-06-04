import React from "react";

function Navbar() {
  return (
    <div
      className="main z-20 lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#F1948A] py-4 shadow-md sticky top-0"
    >
      <div className="left flex items-center space-x-3">
        <img
          className="w-10"
          src="https://img.freepik.com/free-vector/play-button-tape_24908-82293.jpg?t=st=1717502826~exp=1717506426~hmac=582eac42c8df900f64ad7410d22426bb6a7d96172d76d5ff5bb350cc0e423815&w=740"
          alt=""
        />
        <h2 className="logo font-bold text-2xl text-white text-center">
          Movix
        </h2>
      </div>
      <div className="right">
        <ul className="flex space-x-4 text-white justify-center">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Services</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
