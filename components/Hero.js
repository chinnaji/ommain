import React from "react";
import bg from "../images/bg.jpg";
import logo from "../images/logo.png";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="h-[calc(100vh-0rem)] w-full relative flex items-center justify-center">
      <Image
        src={bg}
        layout="fill"
        className="z-10"
        alt="banner"
        objectFit="cover"
        priority
        loading="eager"
      />

      <span className=" absolute h-full w-full bg-[#00000062] z-20"></span>

      <div className="content z-30 text-white  text-center -mt-10 max-w-[700px] ">
        <div className="w-fit mx-auto text-center mb-10">
          <a className="w-28 mb-5  h-28 mx-auto relative cursor-pointer block">
            <Image
              src={logo}
              layout="fill"
              alt="logo"
              priority
              loading="eager"
            />
          </a>
        </div>
        <h1 className="capitalize font-bold my-2 lg:text-5xl md:text-4xl text-3xl leading-normal px-5">
          precise & simple.
        </h1>
        <p className="mb-10  mt-5 max-w-[500px] mx-auto">
          We lead in helping speakers share their stories.
        </p>
        <div className="flex items-center gap-x-7 justify-center -mt-16">
          <Link href="/login">
            <a className="bg-red-600  rounded-full px-16 py-3 hover:bg-white hover:text-black transition-all ease-in-out font-medium mt-16">
              LogIn
            </a>
          </Link>
          <Link href="/signup">
            <a className="bg-white text-black hover:bg-red-600 hover:text-white  rounded-full px-16 py-3 transition-all ease-in-out font-medium mt-16">
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
