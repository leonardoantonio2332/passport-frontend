import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.facebook.com/">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/">
            <LinkedInIcon />
          </a>
        </li>
      </ul>
      <p>Nosso Rodapé</p>
    </footer>
  );
};

export default Footer;
