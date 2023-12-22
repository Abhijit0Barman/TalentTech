import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-slate-100 text-[#1d8043] py-4 ">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="text-2xl font-semibold mb-4">Talent Tech</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/service">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="mt-2">
          <p>&copy; {new Date().getFullYear()} Talent Tech</p>
        </div>
      </div>
    </footer>
  );
};
