import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark py-3 mt-auto">
      <div className="container text-center">
        <span className="text-muted">
          Made by &copy; Avinash Kumar{" "}
          <a href="https://github.com/avinashk09">
            <FaGithub />
          </a>{" "}
          <a href="https://www.linkedin.com/in/avinash-kumar09/">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
