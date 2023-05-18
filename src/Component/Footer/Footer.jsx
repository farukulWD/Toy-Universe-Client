import React from "react";

const Footer = () => {
  return (
    <footer className=" p-10 bg-base-300 text-base-content">
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4"></div>
        </div>
      </div>
      <div className="text-right mt-5">
        <p>Copyright © 2023 - All right reserved by Farukul</p>
      </div>
    </footer>
  );
};

export default Footer;
