import React, { useState } from "react";
import {
  FaPencilAlt,
  FaEnvelope,
  FaShare,
  FaPhoneAlt,
  FaUsers,
  FaBehance,
  FaLinkedin,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import UpdateProfileDialog from "./UpdateProfileDialog";
// import RecruiterProfile from "./recruiter/RecruiterProfile";

const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  console.log(user);

  return (
    <>
      <div className="p-2 bg-purple-50 ">
        {/* Profile Header */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
          <div
            className={`relative w-40 h-40 overflow-hidden border-4 ${
              user?.role == "freelancer"
                ? "border-green-400 rounded-full ml-5 cursor-pointer hover:border-green-500 transition duration-300"
                : "border-blue-400 rounded-full ml-5 cursor-pointer hover:border-blue-500 transition duration-300"
            } `}
          >
            <img
              src={
                user?.profile?.profilePhoto
                  ? user?.profile?.profilePhoto
                  : "https://via.placeholder.com/150"
              }
              alt="Profile"
              className="rounded-full w-40 h-40 object-cover"
            />
          </div>
          <div className="flex-1 m-3 ml-5">
            <h1 className="text-3xl font-bold text-gray-800">
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="text-gray-600 mt-1">
              {user?.profile?.bio ? user?.profile?.bio : "Add your bio"}
            </p>
            <div className="flex items-center gap-4 mt-4 text-gray-700">
              <FaEnvelope />
              <a
                href={`mailto:${user?.email}`}
                className="text-blue-500 hover:underline"
              >
                {user?.email}
              </a>
              <span className="text-gray-500">|</span>
              <FaPhoneAlt />
              <span>
                {user?.phoneNumber ? user?.phoneNumber : "999-9999-999"}
              </span>
              <span className="text-gray-500">|</span>
              <FaBehance />
              <a
                target="blank"
                href="https://www.behance.net/"
                className="text-blue-500 hover:underline"
              >
                Behance
              </a>
              <span className="text-gray-500">|</span>
              <FaLinkedin />
              <a
                target="blank"
                href="https://www.linkedin.com/"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-4 text-gray-700 flex items-center gap-2">
              <FaUsers />
              <Link to="/my-network" className=" text-blue-500 hover:underline">
                250 Connections
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-4">
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition duration-300">
              <FaShare className="text-gray-600" />
              <span className="text-gray-800">Share Profile</span>
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition duration-300"
              onClick={() => setOpen(true)}
            >
              <FaPencilAlt className="text-gray-600" />
              <span className="text-gray-800">Edit Profile</span>
            </div>
          </div>
        </div>
      </div>
      {/* {user?.role == "JobHoster" && (
        <>
          <RecruiterProfile />
        </>
      )}
      <UpdateProfileDialog open={open} setOpen={setOpen} /> */}
    </>
  );
};

export default ProfilePage;
