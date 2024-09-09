import React, { useState } from "react";
import {
  PhCamera,
  IcOutlineShare,
  IconamoonEditThin,
  RiBehanceFill,
  RiLinkedinFill,
  LucideUsers,
  OcticonPlus16,
} from "../../assets/Icons";
import { profile, mail, lawyer, phone, pdf } from "../../assets/index";
import { useSelector } from "react-redux";
import EditModel from "./EditModel";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);

  const education = [
    {
      course: "B.Sc.Physics",
      college: "The Madura college",
      year: "2013-2016",
      time: "Full time",
      percentage: "62%",
    },
    {
      course: "HSC (Computer science)",
      college: "EVRN corp.Girls.hr.sec.school",
      year: "2012-2013",
      time: "Full time",
      percentage: "75%",
    },
  ];

  const experiance = {
    role: "Graphic Designer Internship",
    year: "Oct,2023 - Mar,2024",
    location: "Nextlevel web solution, Gujarat, India",
    time: "Full time",
    percentage: "62%",
  };

  return (
    <>
      <div className="min-h-screen w-full px-5">
        <div className="w-full h-full xl:h-full md:h-[250px] bg-white rounded-xl border border-1 flex flex-col md:flex-row">
          <div className="relative p-2 flex items-center">
            <img
              src={user?.profile?.profilePhoto}
              alt="image"
              className="w-64 h-52 object-cover flex items-center p-3"
            />
            <PhCamera className="size-10 bg-[#d9d9d9] rounded-full p-2 text-[#444444] absolute bottom-4 left-24 cursor-pointer" />
          </div>
          <div className="p-2 w-full flex flex-col gap-3">
            <div className="flex gap-3 md:justify-end">
              <IcOutlineShare className="size-5" />
              <IconamoonEditThin
                className="size-5 cursor-pointer"
                onClick={() => setOpenModal(true)}
              />
            </div>
            <p className="text-blue-800 font-semibold text-4xl">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-[#444444] font-semibold">
              {user?.profile?.workPosition}
            </p>
            <div className="flex flex-row flex-wrap gap-10">
              <div className="flex gap-1 items-center">
                <img src={mail} alt="" className="w-5 h-4" />
                <p>{user?.email}</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={phone} alt="" className="w-5 h-5" />
                <p>{user?.phoneNumber}</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={lawyer} alt="" className="w-5 h-5" />
                {/* <p>6 months experience in Graphic Designer Intern</p> */}
                <p>{user?.profile?.experiance}</p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-10">
              <div className="flex gap-2 items-center">
                <RiBehanceFill className="text-blue-800 size-6" />
                {/* <p className="underline">http://www.behance.net/poornimaajm</p> */}
                <a href={user?.profile?.behanceLink} className="underline">
                  {user?.profile?.behanceLink}
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <RiLinkedinFill className="text-blue-800 size-6" />
                {/* <p className="underline">
                  https://www.linkedin.com/in/poornimaa-mohan-01bb00302/
                </p> */}
                <a href={user?.profile?.linkedInLink} className="underline">
                  {user?.profile?.linkedInLink}
                </a>
              </div>
            </div>
            <div className="flex gap-2 items-center ml-5">
              <LucideUsers />
              <p className="text-blue-600">250 Connections</p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex gap-10">
          <div className="flex flex-col gap-3">
            <div className="flex gap-5 flex-1 items-center">
              <p className="font-semibold">Resume</p>
              <div className="flex gap-2 items-center">
                <p className="text-blue-700 underline">poornimaa.pdf</p>
                <img src={pdf} alt="" />
              </div>
            </div>
            <div className="flex flex-1 gap-3">
              <button className="p-3 bg-[#e8dce6] px-5 rounded-lg">
                Upload
              </button>
              <button className="p-3 bg-[#09dc65] px-5 rounded-lg">
                Download
              </button>
            </div>
          </div>
          <div className="flex  gap-5">
            <p className="font-semibold">Portfolio: </p>
            {/* <p className="text-blue-700 underline">
              https://www.figma.com/proto/rypcCNUj1bTpDk9jsqsOje/portfolio?page-id=O%3A1&node-id=1-2&starting-point-node-s6MwOv
              6XH19DWO-1
            </p> */}
            <a
              href={user?.profile?.portfolioLink}
              className="text-blue-700 underline"
            >
              {user?.profile?.portfolioLink}
            </a>
            {/* <IconamoonEditThin className="size-7" /> */}
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-10">
          <div className="w-full h-[250px] flex-1 bg-gradient-to-b from-pink-200 to-purple-100 p-4 flex flex-col gap-5 rounded-lg">
            <div className="flex justify-between">
              <p className="font-medium">Education</p>
              <IconamoonEditThin className="size-6" />
            </div>
            <div className="px-10 flex flex-col gap-4">
              {education.map((data, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <p className="font-bold">{data.course}</p>
                  <div className="flex gap-5 font-medium">
                    <p>{data.college}</p>
                    <p>{data.year}</p>
                    <p>{data.time}</p>
                    <p>{data.percentage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[250px] flex-1 bg-gradient-to-b from-pink-200 to-purple-100 rounded-lg p-4 flex flex-col gap-5">
            <div className="flex justify-between">
              <p className="font-medium">Experiance</p>
              <IconamoonEditThin className="size-6" />
            </div>
            <div className="px-10 flex flex-col gap-4">
              <div className="flex gap-4">
                <p className="font-bold">{experiance.role}</p>
                <p className="font-semibold">{experiance.year}</p>
              </div>
              <div className="flex gap-4 font-medium">
                <p>{experiance.location}</p>
                <p>{experiance.time}</p>
                <p>{experiance.percentage}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between flex-wrap mt-5 gap-10">
          <div className="w-[30%] h-[70px] bg-[#ebe0ea] flex items-center  justify-between px-8 rounded-md">
            <p>Certificate</p>
            <div className="h-6 w-6 rounded-sm shadow-lg bg-gradient-to-t  from-[#333399] to-[#fb01cb] flex items-center justify-center">
              <OcticonPlus16 className="text-white size-5" />
            </div>
          </div>
          <div className="w-[30%] h-[70px] bg-[#ebe0ea] flex items-center  justify-between px-8 rounded-md">
            <p>Add Skills</p>
            <div className="h-6 w-6 rounded-sm shadow-lg bg-gradient-to-t  from-[#333399] to-[#fb01cb] flex items-center justify-center">
              <OcticonPlus16 className="text-white size-5" />
            </div>
          </div>
          <div className="w-[30%] h-[70px] bg-[#ebe0ea] flex items-center  justify-between px-8 rounded-md">
            <p>Prefered Location</p>
            <div className="h-6 w-6 rounded-sm shadow-lg bg-gradient-to-t  from-[#333399] to-[#fb01cb] flex items-center justify-center">
              <OcticonPlus16 className="text-white size-5" />
            </div>
          </div>
          <div className="w-[30%] h-[70px] bg-[#ebe0ea] flex items-center  justify-between px-8 rounded-md">
            <p>Projects</p>
            <div className="h-6 w-6 rounded-sm shadow-lg bg-gradient-to-t  from-[#333399] to-[#fb01cb] flex items-center justify-center">
              <OcticonPlus16 className="text-white size-5" />
            </div>
          </div>
          <div className="w-[30%] h-[70px] bg-[#ebe0ea] flex items-center  justify-between px-8 rounded-md">
            <p>KYC</p>
            <div className="h-6 w-6 rounded-sm shadow-lg bg-gradient-to-t  from-[#333399] to-[#fb01cb] flex items-center justify-center">
              <OcticonPlus16 className="text-white size-5" />
            </div>
          </div>
          <div className="w-[30%] h-[70px] bg-[#ebe0ea] flex items-center  justify-between px-8 rounded-md">
            <p>Hobbies</p>
            <div className="h-6 w-6 rounded-sm shadow-lg bg-gradient-to-t  from-[#333399] to-[#fb01cb] flex items-center justify-center">
              <OcticonPlus16 className="text-white size-5" />
            </div>
          </div>
        </div>
      </div>
      {openModal && <EditModel setOpenModal={setOpenModal} user={user} />}
    </>
  );
};

export default Profile;
