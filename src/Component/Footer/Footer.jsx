import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram,  FaLinkedin, FaSearchLocation, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" p-10 mt-6 bg-[#ccf7ff] text-base-content">
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Toy Sales</a>
          <a className="link link-hover">Gift Wrapping</a>
          <a className="link link-hover">Toy Rental</a>
          <a className="link link-hover">Online Shopping</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/blog" className="link link-hover">
            Blog
          </Link>
          <Link to="/alltoy" className="link link-hover">
            All Toy
          </Link>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <div className="grid grid-flow-col gap-4">
           <div>
           <p><FaSearchLocation/> Noypara,Madabpur</p>
            <p><AiOutlineMail/> address@gmail.com</p>
            <div className="mt-4">
           <Link className="text-2xl"> <FaFacebook/></Link>
           <Link className="text-2xl"> <FaTwitter/></Link>
           <Link className="text-2xl"> <FaYoutube/></Link>
           <Link className="text-2xl"> <FaInstagram/></Link>
           <Link className="text-2xl"> <FaLinkedin/></Link>
            </div>
           </div>
          
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <p>Copyright © 2023 - All right reserved by Farukul</p>
      </div>
    </footer>
  );
};

export default Footer;
