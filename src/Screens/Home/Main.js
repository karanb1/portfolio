/* eslint-disable react/style-prop-object */
import React from "react";
import { FaInstagram, FaMediumM, FaTwitter } from "react-icons/fa";
import { VscGithub, VscMail } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";
import Me from "../../assets/me2.jpg";
import Navigator from "../../Components/Navigator";

const Main = () => {
  const redirect = (link) => {
    window.location.href = link;
  };

  return (
    <div className="min-h-screen border-b border-gray-200 sm:mx-8 mx-4">
      <Navigator />
      <main className=" pb-10 flex sm:flex-row sm:justify-between flex-col select-none">
        <div
          className="sm:hidden border border-black self-center border-2 border-yellow-200 rounded bg-yellow-100"
          style={{ height: 288, width: 210 }}
        >
          <img
            src={Me}
            alt="me"
            style={{ height: 288, width: 210 }}
            className="-ml-6 -mt-6 rounded"
          />
        </div>

        <div className="mt-10 flex flex-col justify-center sm:mt-0 sm:mr-20">
          <p className="p-force-lineheight text-primary text-2xl sm:text-5xl text-3xl font-medium subpixel-antialiased">
            Hey 🖐🏼 I am Karan. I am a{" "}
            <span className="bg-pink-100 underline text-pink-800 rounded px-1">
              Developer
            </span>
            ,{" "}
            <span className="bg-green-100 underline text-green-800 rounded px-1">
              Designer
            </span>{" "}
            and{" "}
            <span className="bg-yellow-100 underline text-yellow-800 rounded px-1">
              {" "}
              Photographer
            </span>
            .
          </p>
          <p className="mt-4 text-dark-gray ml-1">📍 New Delhi, India 🇮🇳</p>
          <p className="mx-3 mb-4 mt-2 text-dark-gray ml-2">
            💼  &nbsp; Frontend Engineer @ Razorpay, India
          </p>
          <div className="flex ml-2 items-center">
            <GrLinkedin
              className="fill-current text-3xl text-primary cursor-pointer"
              onClick={() =>
                redirect("https://www.linkedin.com/in/karan-balodi-11840916b/")
              }
            />
            <VscGithub
              className="ml-3 text-3xl fill-current text-primary cursor-pointer"
              onClick={() => redirect("https://www.github.com/karanb1/")}
            />
            <FaMediumM
              className="ml-3 text-3xl fill-current text-primary cursor-pointer"
              onClick={() => redirect("https://medium.com/@karanbalodi")}
            />
            <FaInstagram
              className="ml-3 text-3xl fill-current text-primary cursor-pointer"
              onClick={() => redirect("https://www.instagram.com/karanbalodi/")}
            />
            <FaTwitter
              className="ml-3 text-3xl fill-current text-primary cursor-pointer"
              onClick={() => redirect("https://twitter.com/balodikanu125")}
            />
            <VscMail
              className="ml-3 text-3xl fill-current text-primary cursor-pointer"
              onClick={() => {
                window.open(
                  "mailto:karanbalodi1@gmail.com?subject=Hello Karan&body=Hi Karan. I would like to connect with you"
                );
              }}
            />
            <span
              className="ml-3 text-xl fill-current text-primary cursor-pointer"
              onClick={() => {
                redirect(
                  "https://drive.google.com/file/d/11okWmJiaY88_OK3uTaN8BieOYP7EggrU/view?usp=sharing"
                );
              }}
            >
              Resume
            </span>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="border-2 border-yellow-200 rounded bg-yellow-100 mr-10 mt-20" style={{ height: 500, width: 400 }}>
            <img src={Me} alt="me" className="rounded -ml-8 -mt-8" style={{ height: 500, width: 400 }}/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
