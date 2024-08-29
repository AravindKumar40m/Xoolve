import React, { useState } from "react";
import google from "../../assets/jobPicture/Google.jpg";
import arrow from "../../assets/jobPicture/arrow.png";
import verified from "../../assets/jobPicture/verified.png";
import { IcOutlineShare } from "../../assets/Icons";

const JobDetailPage = ({ setOpenModal }) => {
  const [successModel, setSuccessModel] = useState(false);

  const data = {
    Image: google,
    role: "UI/UX Designer",
    experience: "1-2 years experience",
    type: "Full time",
    location: "USA",
    skills: "Figma, Sketch, Wireframe, AdobeXD, Photoshop, Illustrator",
    company: "Google",
    postedDate: "22/06/2024",
    description: `Lorem ipsum dolor sit amet consectetur. Faucibus tellus nulla augue tristique at vel. 
      Pretium porttitor pulvinar diam mattis nullam at ornare. Malesuada turpis et faucibus sed in erat urna. 
      Pulvinar ultrices porttitor dui faucibus facilisis dictum sed lorem. Adipiscing eu sed eget sapien. 
      Quis tristique mi eget integer turpis integer lectus fermentum. In gravida lorem vestibulum nunc commodo sed habitasse. 
      Et sollicitudin elementum nibh gravida senectus aliquet habitant adipiscing in. Dolor amet porta viverra lobortis purus arcu sit urna dignissim. 
      Laoreet nec ut viverra non suspendisse sodales dictum sit. Cursus viverra sed et at eleifend pharetra. Bibendum risus fringilla rhoncus neque lectus. 
      Viverra eu accumsan et cursus volutpat est augue. Amet arcu fames lacinia mi dui dis. Massa ac nullam magna tempus. 
      In pretium felis nullam diam. Adipiscing porta id faucibus sed. Porta egestas erat pretium eu facilisis sed. 
      Nisl posuere quisque ut sed.`,
    requiredSkills: [
      "Lorem ipsum dolor sit amet consectetur. Faucibus tellus nulla augue tristique at vel. Pretium porttitor pulvinar diam mattis nullam at ornare. Malesuada turpis et faucibus sed in erat urna. Pulvinar ultrices porttitor dui faucibus",
      "facilisis dictum sed lorem Adipiscing eu sed eget sapien. Quis tristique mi eget integer turpis integer lectus fermentum. In gravida lorem vestibulum nunc commodo sed habitasse.",
      "Et sollicitudin elementum nibh gravida senectus aliquet habitant adipiscing in. Dolor amet porta viverra lobortis purus arcu sit urna dignissim. Laoreet nec ut viverra non suspendisse sodales dictum sit. Cursus viverra sed et at eleifend pharetra. Bibendum risus fringilla rhoncus neque lectus. Viverra eu",
      "accumsan et cursus volutpat est augue. Amet arcu fames lacinia mi dui dis. Massa ac nullam magna tempus. In pretium felis nullam diam. Adipiscing porta id faucibus sed. Porta egestas erat pretium eu facilisis sed. Nisl posuere quisque ut sed.",
    ],
  };

  const handleEasyApply = () => {
    setSuccessModel(true);
    setTimeout(() => {
      setSuccessModel(false);
    }, 2000);
    setTimeout(() => {
      setOpenModal(false);
    }, 2000);
  };

  return (
    <>
      <div
        id="modal-backdrop"
        onClick={() => setOpenModal(false)}
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed inset-0 z-10 w-[1100px] h-[700px] overflow-y-auto left-6 md:left-64"
        >
          <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col rounded-xl">
              <div className="p-4 rounded-lg flex gap-10 items-center">
                <div className="flex flex-col gap-3">
                  <img
                    onClick={() => setOpenModal(false)}
                    src={arrow}
                    alt=""
                    className="object-cover cursor-pointer w-5 h-5"
                  />
                  <img
                    src={data.Image}
                    alt={data.company}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-xl font-bold">{data.role}</p>
                  </div>
                  <div className="flex gap-10">
                    <p>{data.experience}</p>
                    <p>{data.type}</p>
                    <p>{data.location}</p>
                    <p>{data.skills}</p>
                  </div>
                </div>
                <div className="self-start">
                  <IcOutlineShare className="size-6 cursor-pointer" />
                </div>
              </div>
              <div className="flex items-center justify-center gap-32">
                <button
                  onClick={handleEasyApply}
                  className="p-3 px-10 font-semibold bg-white border-2 border-purple-800"
                >
                  Easy Apply
                </button>
                <button className="p-3 px-10 font-semibold text-white bg-gradient-to-r from-[#fb01cb] to-[#333399] border-2 border-purple-800">
                  Apply Site
                </button>
              </div>
              <div className="mt-10 flex flex-col gap-3">
                <h3 className="text-md font-medium">Company</h3>
                <p className="text-sm">{data.description}</p>
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <h3 className="text-md font-medium">Required skills:</h3>
                <ul className="list-disc pl-5 text-sm">
                  {data.requiredSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="text-sm font-medium mt-5">
                <p>Posted on {data.postedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {successModel && (
        <div
          id="modal-backdrop"
          onClick={() => setSuccessModel(false)}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 z-10 w-[1100px] h-[700px] overflow-y-auto left-6 md:left-64"
          >
            <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border-4 border-green-500 flex rounded-xl">
                <div className="flex flex-col items-center justify-center gap-3">
                  <img src={verified} alt="" />
                  <p className="font-semibold text-green-600 text-xl">
                    Applied Successfully
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetailPage;
