import React from "react";
import instagram from "../Assets/images/instagram.png";
import twitter from "../Assets/images/twitter.png";
import linkedIn from "../Assets/images/linkedin.png";

export default function Footer() {
  return (
    <div className="flex justify-center gap-2 py-2 bg-gray-200 dark:bg-gray-800 dark:bg-opacity-40">
      <div className="flex justify-center align-center gap-2 rounded bg-gray-300">
        <a href="https://www.instagram.com/arphyy">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://www.twitter.com/arphy_dev">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://www.linkedin.com/in/aaron-omale-7bb6b5156/">
          <img src={linkedIn} alt="linkedIn" />
        </a>
      </div>

      {/* <a
        className="text-gray-500 hover:text-gray-400 dark:text-gray-400 py-3 dark:hover:text-white"
        href="https://twitter.com/arphy_dev"
      >
        <span>© Aaron Arphaxad</span>
      </a> */}
    </div>
  );
}
