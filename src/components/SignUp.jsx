import React from "react";
import image from "../assets/signUpImage.png";
import { FaGoogle, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import Input from "./common/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 ">
      <div className="flex-1 p-10 flex flex-col gap-2 bg-[#ededed]">
        <p className="text-5xl font-extrabold bg-gradient-to-t from-[#333399] via-pink-400 to-pink-400 text-transparent bg-clip-text">
          Xoolve
        </p>
        <p className="font-semibold">Get Started Today</p>
        <p className="text-[#777777]">
          Easy way to get your dream job{" "}
          <span className="font-bold text-blue-800">"Become an Xpert"</span>
        </p>
        <img src={image} alt="" className="w-full h-[550px] object-cover" />
        <div className="flex gap-3 text-pink-500">
          <FaGoogle className="h-5 w-5" />
          <FaFacebookF className="h-5 w-5" />
          <FaInstagram className="h-5 w-5" />
          <FaYoutube className="h-5 w-5" />
          <FaXTwitter className="h-5 w-5" />
        </div>
      </div>
      <div className="flex-1 px-20 py-10 flex flex-col gap-3">
        <p className="flex items-center justify-end gap-1 text-blue-700">
          English (USA) <GoTriangleDown className="h-7 w-7" />
        </p>
        <p className="text-[#777777] font-semibold">Start for Free</p>
        <p className="text-4xl font-bold bg-gradient-to-r  from-[#fb01cb] via-[#333399]  to-[#333399] text-transparent bg-clip-text">
          Sign up to Xoolve
        </p>
        <form className="flex flex-col gap-4 pr-24">
          <div className="flex flex-row gap-5">
            <Input
              id={"firstName"}
              label={"First Name"}
              placeholder={"First Name"}
              type={"text"}
            />
            <Input
              id={"lastName"}
              label={"Last Name"}
              placeholder={"Last Name"}
              type={"text"}
            />
          </div>
          <Input
            id={"mobileNo"}
            label={"Mobile No"}
            placeholder={"1234567890"}
            type={"text"}
          />
          <Input
            id={"email"}
            label={"Email ID"}
            placeholder={"abc@gmail.com"}
            type={"email"}
          />
          <Input
            id={"password"}
            label={"Password"}
            placeholder={"Password"}
            type={"password"}
          />
          <button className="p-3 rounded-xl bg-gradient-to-r  from-[#fb01cb] via-[#333399]  to-[#333399] font-bold text-white">
            Create Account
          </button>
          {/* <div className="p-[2px] bg-gradient-to-r from-[#fb01cb] via-[#333399] to-[#333399] rounded-xl"> */}
          <button className="w-full p-3 rounded-xl bg-white text-transparent bg-clip-text bg-gradient-to-r from-[#fb01cb] via-[#333399] to-[#333399] border-2 border-rose-400 flex items-center justify-center gap-2">
            <FcGoogle className="size-7" /> Sign up with Google
          </button>
          {/* </div> */}
        </form>
        <p className="text-[#777777]">
          Already have account?{" "}
          <Link to={"#"} className="text-blue-700 font-semibold underline">
            Sign In
          </Link>
        </p>
        <div className="flex gap-1 items-baseline">
          <input type="checkbox" />
          <p>
            By accessing or using our Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, you may not
            access the Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
