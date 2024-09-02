import React from "react";
import {
  profile,
  gpay,
  masterCard,
  visa,
} from "../../assets/StartUpMentors/profileSection/index";
import { mail, phone } from "../../assets";
import {
  IconamoonEditThin,
  PhCamera,
  RiBehanceFill,
  RiLinkedinFill,
  CibCashapp,
  ClarityDateSolid,
  MingcuteTimeFill,
  OcticonPlus16,
} from "../../assets/Icons";
import { Session, star } from "../../assets/StartUpMentors/index";

const Profile = () => {
  const session = {
    image: Session,
    name: "Lorem Ipsum is simply dummy text of the printing",
    description:
      "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    session: "7 Sessions",
    rating: 4.5,
    enrolled: "6000+",
    hours: 1,
    button: "Start",
    buttonColor: "bg-green-500",
  };

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
    <div className="flex flex-wrap bg-white h-full">
      <div className="w-full md:w-[35%] h-full pl-7 ">
        <div className="flex flex-col bg-[#ffe8fa] relative h-full">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <PhCamera className="size-10 bg-[#d9d9d9] rounded-full p-2 text-[#444444] absolute top-[370px] right-[2px] cursor-pointer" />
          <div className="flex flex-col gap-3 p-4">
            <h2 className="text-2xl font-bold text-center text-[#333399]">
              My Bio
            </h2>
            <p className="text-sm mb-4 font-semibold">
              It is a long established fact that a reader will be distracted by
              the readable content Of a page when looking at its layout. The
              point Of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here, content
              here', making it look like readable English. Many
            </p>
          </div>
          <div className="px-4 pb-4">
            <h3 className="font-bold text-[#333399]">Contact Details:</h3>
            <div className="flex py-4 gap-4">
              <div className="flex gap-1 items-center">
                <img src={mail} alt="" className="w-5 h-4" />
                <p>Jmpoornimaa@gmail.com</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={phone} alt="" className="w-5 h-5" />
                <p>+91 99447 23692</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <h3 className="font-bold text-[#333399]">Social Media:</h3>
            <div className="flex flex-row flex-wrap gap-2 py-4 pl-2">
              <div className="flex gap-2 items-center">
                <RiBehanceFill className="text-blue-800 size-5" />
                <p className="underline text-sm">
                  http://www.behance.net/poornimaajm
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <RiLinkedinFill className="text-blue-800 size-5" />
                <p className="underline text-sm">
                  https://www.linkedin.com/in/poornimaa-mohan-01bb00302/
                </p>
              </div>
            </div>
          </div>
          <IconamoonEditThin className="size-9 pb-4 pr-2 cursor-pointer self-end" />
        </div>
      </div>
      <div className="w-full md:w-[65%] px-6 py-2">
        <div className="flex flex-col gap-8 py-4">
          <div className="flex flex-row gap-4 items-center text-md">
            <div className="bg-gradient-to-t from-[#333399] to-pink-400 w-6 h-4 rounded-full"></div>
            <p className="font-semibold text-nowrap">Porfolio :</p>
            <p className="underline text-[#1C2AFF] font-semibold">
              https://www.figma.com/protolryPcCNUi1bTpDk9jsqsOie/=1-2&starting-point-node-id=1%3A2&t=gs6MwOvg6XHI9DWO-1
            </p>
            <IconamoonEditThin className="size-8 cursor-pointer" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-4 items-center text-md">
              <div className="flex flex-row gap-4 items-center">
                <div className="bg-gradient-to-t from-[#333399] to-pink-400 w-4 h-4 rounded-full"></div>
                <p className="font-semibold text-nowrap">My Sessions</p>
              </div>
              <IconamoonEditThin className="size-6 cursor-pointer" />
            </div>
            <div className="space-y-4 bg-white w-full p-3 rounded-3xl">
              <div className="flex gap-4">
                <img src={session.image} alt="" />
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-bold">{session.name}</p>
                  <p className="font-normal text-sm">{session.description}</p>
                  <div className="flex justify-between">
                    <div className="bg-[#fde8e9] flex gap-3 font-bold text-red-600 p-2 text-sm">
                      <p>Session:</p>
                      <p className="underline">{session.session}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex gap-3">
                      <p className="font-medium">Rating:</p>
                      <div className="flex gap-1">
                        <p className="font-bold">{session.rating}</p>
                        <img
                          src={star}
                          alt=""
                          className="object-cover w-[13px] h-[13px] mt-[6px]"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <p className="font-medium">Enrolled:</p>
                      <p className="font-bold">{session.enrolled}</p>
                    </div>
                    <p className="font-bold text-red-600">
                      {session.hours} Hours Per day
                    </p>
                    <button
                      className={`${session.buttonColor} p-1 px-4 text-white rounded-lg font-semibold`}
                    >
                      {session.button}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 items-center text-md">
                <div className="bg-gradient-to-t from-[#333399] to-pink-400 w-4 h-4 rounded-full drop-shadow-lg"></div>
                <p className="font-semibold text-nowrap">Payment</p>
              </div>
              <div className="pl-8">
                <div className="w-full h-full p-4 bg-[#ffe8fa] flex flex-col gap-5">
                  <div className="flex gap-10">
                    <div className="flex gap-7">
                      <CibCashapp className="size-9 text-[#666666]" />
                      <p className="text-nowrap text-xs font-semibold">
                        <span className="font-bold text-[#333399] text-lg">
                          $100 to $2000
                        </span>{" "}
                        Time Base
                      </p>
                    </div>
                    <IconamoonEditThin className="size-6 cursor-pointer" />
                  </div>
                  <div className="flex gap-2">
                    <img src={gpay} alt="" className="object-cover" />
                    <img src={masterCard} alt="" className="object-cover" />
                    <img src={visa} alt="" className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 items-center text-md">
                <div className="bg-gradient-to-t from-[#333399] to-pink-400 w-4 h-4 rounded-full drop-shadow-lg"></div>
                <p className="font-semibold text-nowrap">Date/Time</p>
              </div>
              <div className="pl-8">
                <div className="w-full h-full p-4 bg-[#ffe8fa] flex flex-col gap-5">
                  <div className="flex gap-10">
                    <div className="flex gap-7">
                      <ClarityDateSolid className="size-9 text-[#333399]" />
                      <p className="text-xs font-semibold">
                        Every week Monday, Wednesday and Friday
                      </p>
                    </div>
                    <IconamoonEditThin className="size-6 cursor-pointer" />
                  </div>
                  <div className="flex gap-4">
                    <MingcuteTimeFill className="size-9 text-[#333399]" />
                    <div className="flex gap-4">
                      <div className="bg-[#d2c2fb] font-extrabold text-[#333399] rounded-full p-2 text-sm">
                        10am - 12am
                      </div>
                      <div className="bg-[#d2c2fb] font-extrabold text-[#333399] rounded-full p-2 text-sm">
                        9am - 10am
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="w-full h-full flex-1 flex flex-col gap-5">
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <div className="bg-gradient-to-t from-[#333399] to-pink-400 w-4 h-4 rounded-full"></div>
                  <p className="font-semibold text-nowrap">Education</p>
                </div>
                <IconamoonEditThin className="size-6" />
              </div>
              <div className="px-5 pr-2 flex flex-col gap-4">
                {education.map((data, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <p className="font-bold text-sm">{data.course}</p>
                    <div className="flex gap-5 font-medium text-xs text-nowrap">
                      <p>{data.college}</p>
                      <p>{data.year}</p>
                      <p>{data.time}</p>
                      <p>{data.percentage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-full flex-1 flex flex-col gap-5">
              <div className="flex justify-between">
                <p className="font-medium">Experiance</p>
                <IconamoonEditThin className="size-6" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 text-sm">
                  <p className="font-bold">{experiance.role}</p>
                  <p className="font-semibold">{experiance.year}</p>
                </div>
                <div className="flex gap-4 font-medium text-xs">
                  <p>{experiance.location}</p>
                  <p>{experiance.time}</p>
                  <p>{experiance.percentage}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center text-md">
              <div className="bg-gradient-to-t from-[#333399] to-pink-400 w-4 h-4 rounded-full"></div>
              <p className="font-semibold text-nowrap">Specialist</p>
            </div>
            <div className="flex justify-between font-semibold items-center px-8">
              <div className="bg-[#ffe8fa] rounded-full p-3 px-12">
                <p>Graphic Design</p>
              </div>
              <div className="bg-[#ffe8fa] rounded-full p-3 px-12">
                <p>WEB Design</p>
              </div>
              <div className="bg-[#ffe8fa] rounded-full p-3 px-12">
                <p>UI/UX Design</p>
              </div>
              <div className="h-6 w-6 rounded-full shadow-lg bg-gradient-to-t  from-[#333399] to-[#fb01cb] flex items-center justify-center">
                <OcticonPlus16 className="text-white size-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
