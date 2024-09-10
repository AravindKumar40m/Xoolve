import React, { useState } from "react";
import { signUpImage } from "../assets/index";
import { FaGoogle, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import Input from "./common/Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const URL = import.meta.env.VITE_APP_BASE_URL;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loadingToastId = toast.loading("Logging in...", {
      style: {
        backgroundColor: "#4a90e2",
        color: "white",
        borderRadius: "0.375rem",
        padding: "0.75rem 1.25rem",
        fontSize: "0.875rem",
        fontWeight: "bold",
      },
    });

    axios
      .post(URL + "user/login", formData)
      .then((res) => {
        document.cookie = `token=${res.data.token}; path=/; SameSite=None; Secure`;
        toast.success("Login Successful", {
          style: {
            backgroundColor: "#34d399",
            color: "white",
            borderRadius: "0.375rem",
            padding: "0.75rem 1.25rem",
            fontSize: "0.875rem",
            fontWeight: "bold",
          },
        });
        toast.dismiss(loadingToastId);
        console.log(res.data);
        dispatch(setUser(res?.data?.user));
        if (res?.data?.user?.role === "Freelancer") {
          navigate("/freelancer/profile");
        }
        if (res?.data?.user?.role === "JobHoster") {
          navigate("/jobhoster/profile");
        }
      })
      .catch((err) => {
        toast.error("Login Error: " + err.message, {
          style: {
            backgroundColor: "#ef4444",
            color: "white",
            borderRadius: "0.375rem",
            padding: "0.75rem 1.25rem",
            fontSize: "0.875rem",
            fontWeight: "bold",
          },
        });
        toast.dismiss(loadingToastId);
        console.log(err);
      });
  };

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
        <img
          src={signUpImage}
          alt=""
          className="w-full h-[550px] object-cover"
        />
        <div className="flex gap-3 text-pink-500 cursor-pointer">
          <FaGoogle className="h-5 w-5" />
          <FaFacebookF className="h-5 w-5" />
          <FaInstagram className="h-5 w-5" />
          <FaYoutube className="h-5 w-5" />
          <FaXTwitter className="h-5 w-5" />
        </div>
      </div>
      <div className="flex-1 px-20 py-10 flex flex-col gap-3">
        <p className="flex items-center justify-end gap-1 text-blue-700 mb-10">
          English (USA) <GoTriangleDown className="h-7 w-7" />
        </p>
        <p className="text-[#777777] font-semibold">Start for Free</p>
        <p className="text-4xl mb-10 font-bold bg-gradient-to-r  from-[#fb01cb] via-[#333399]  to-[#333399] text-transparent bg-clip-text">
          Sign up to Xoolve
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pr-24">
          <Input
            id={"email"}
            label={"Email ID"}
            placeholder={"abc@gmail.com"}
            handleChange={handleChange}
            type={"email"}
          />
          <Input
            id={"password"}
            label={"Password"}
            placeholder={"Password"}
            handleChange={handleChange}
            type={"password"}
          />
          <button className="p-3 mt-10 rounded-xl bg-gradient-to-r  from-[#fb01cb] via-[#333399]  to-[#333399] font-bold text-white">
            Log In
          </button>
          {/* <div className="p-[2px] bg-gradient-to-r from-[#fb01cb] via-[#333399] to-[#333399] rounded-xl"> */}
          <button className="w-full p-3 rounded-xl bg-white text-transparent bg-clip-text bg-gradient-to-r from-[#fb01cb] via-[#333399] to-[#333399] border-2 border-rose-400 flex items-center justify-center gap-2">
            <FcGoogle className="size-7" /> Sign up with Google
          </button>
          {/* </div> */}
        </form>
        <p className="text-[#777777] mb-5">
          Don't have an account?{" "}
          <Link
            to={"/signup"}
            className="text-blue-700 font-semibold underline"
          >
            Sign Up
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

export default SignIn;
