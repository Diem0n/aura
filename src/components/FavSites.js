import React from "react";

function FavSites() {
  return (
    <div className="flex flex-row w-full justify-center  pt-5 ">
      <a href="https://www.youtube.com" className="px-5 m-1">
        <img
          src="../youtube_icon.png"
          height={25}
          width={25}
          className="hover:scale-150"
          title="YouTube"
        />
      </a>
      {/*  */}
      <a href="https://web.whatsapp.com" className="px-5 m-1">
        <img
          src="../wa.png"
          height={25}
          width={25}
          className="hover:scale-150"
          title="WhatsApp Web"
        />
      </a>

      <a href="https://www.courera.org" className="px-5 m-1">
        <img
          src="../csa-2.png"
          height={25}
          width={25}
          className="hover:scale-150"
          title="Coursera"
        />
      </a>

      <a href="https://www.leetcode.com" className="px-5 m-1">
        <img
          src="../leetcode-2.png"
          height={25}
          width={25}
          className="hover:scale-150"
          title="LeetCode"
        />
      </a>

      <a href="https://www.mail.google.com" className="px-5 m-1">
        <img
          src="../gmail-2.png"
          height={25}
          width={25}
          className="hover:scale-150"
          title="Gmail"
        />
      </a>

      <a href="https://www.github.com" className="px-5 m-1">
        <img
          src="../gh.png"
          height={25}
          width={25}
          className="hover:scale-150"
          title="GitHub"
        />
      </a>

      <a href="https://www.stackoverflow.com" className="px-5 m-1">
        <img
          src="../so-2.png"
          height={25}
          width={25}
          className="hover:scale-150"
          title="Stack Overflow"
        />
      </a>
    </div>
  );
}

export default FavSites;
