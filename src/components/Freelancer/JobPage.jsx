import React, { useState } from "react";
import {
  CarbonSearch,
  RiCustomerService2Line,
  TablerSettings,
  PhChat,
  MdiBellNotificationOutline,
  IcOutlineShare,
} from "../../assets/Icons";
import Select from "react-select";
import { image, slider } from "../../assets/index";
import {
  google,
  tcs,
  capgemini,
  accenture,
} from "../../assets/jobPicture/index";
import JobDetailPage from "./jobDetailPage";

const JobPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const jobs = [
    {
      Image: google,
      role: "UI/UX Designer",
      experience: "1-2 years experience",
      type: "Full time",
      location: "USA",
      skills: "Figma, Sketch, Wireframe, AdobeXD, Photoshop, Illustrator",
    },
    {
      Image: tcs,
      role: "UI/UX Designer",
      experience: "1-2 years experience",
      type: "Full time",
      location: "USA",
      skills: "Figma, Sketch, Wireframe, AdobeXD, Photoshop, Illustrator",
    },
    {
      Image: capgemini,
      role: "UI/UX Designer",
      experience: "1-2 years experience",
      type: "Full time",
      location: "USA",
      skills: "Figma, Sketch, Wireframe, AdobeXD, Photoshop, Illustrator",
    },
    {
      Image: accenture,
      role: "UI/UX Designer",
      experience: "1-2 years experience",
      type: "Full time",
      location: "USA",
      skills: "Figma, Sketch, Wireframe, AdobeXD, Photoshop, Illustrator",
    },
    {
      Image: google,
      role: "UI/UX Designer",
      experience: "1-2 years experience",
      type: "Full time",
      location: "USA",
      skills: "Figma, Sketch, Wireframe, AdobeXD, Photoshop, Illustrator",
    },
  ];

  const experianceOptions = [
    {
      value: "Fresher",
      label: "Fresher",
    },
    {
      value: "1-2 years",
      label: "1-2 years",
    },
    {
      value: "3-5 years",
      label: "3-5 years",
    },
    {
      value: "5< more",
      label: "5< more",
    },
  ];

  const postedOptions = [
    {
      value: "24 hours",
      label: "24 hours",
    },
    {
      value: "1 week",
      label: "1 week",
    },
    {
      value: "2 week",
      label: "2 week",
    },
    {
      value: "30 days",
      label: "30 days",
    },
  ];

  const TypeOptions = [
    {
      value: "Remote",
      label: "Remote",
    },
    {
      value: "On-site",
      label: "On-site",
    },
    {
      value: "Hybrid",
      label: "Hybrid",
    },
  ];

  const locationOptions = [
    {
      value: "Madurai",
      label: "Madurai",
    },
    {
      value: "coimbatore",
      label: "coimbatore",
    },
    {
      value: "chennai",
      label: "chennai",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];

  const salaryOptions = [
    {
      value: "1-2 L",
      label: "1-2 L",
    },
    {
      value: "2-5 L",
      label: "2-5 L",
    },
    {
      value: "5-10 L",
      label: "5-10 L",
    },
    {
      value: "10< more",
      label: "10< more",
    },
  ];

  const CustomStyle = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: !state.hasValue ? "#fbd9f5" : "white",
      borderColor: state.isFocused ? "#fbd9f5" : provided.borderColor,
      width: "160px",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      "&:hover": {
        borderColor: "#fbd9f5",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      textAlign: "center",
      width: "100%",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "black",
      textAlign: "center",
      width: "100%",
    }),
  };

  return (
    <>
      <div className="min-h-screen px-5 p-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-5 gap-10">
            <div className="relative w-[60%]">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <CarbonSearch className="size-5 text-[#707482]" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm rounded-xl placeholder:text-[#707482] bg-gray-100 text-gray-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Find your job"
                required
              />
            </div>
            <div className="flex gap-3 text-[#5a5a5f]">
              <RiCustomerService2Line className="size-6" />
              <TablerSettings className="size-6" />
              <PhChat className="size-6" />
              <MdiBellNotificationOutline className="size-6" />
            </div>
            <div className="flex items-center gap-4">
              <img
                src={image}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col gap-2">
                <p className="mr-3">Poornimaa JM</p>
                <p>UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-10 mb-5">
            <Select
              options={experianceOptions}
              placeholder="Experiance"
              styles={CustomStyle}
            />
            <Select
              options={postedOptions}
              placeholder="Posted by"
              styles={CustomStyle}
            />
            <Select
              options={TypeOptions}
              placeholder="Type"
              styles={CustomStyle}
            />
            <Select
              options={locationOptions}
              placeholder="Location"
              styles={CustomStyle}
            />
            <Select
              options={salaryOptions}
              placeholder="Salary Range"
              styles={CustomStyle}
            />
            <img
              src={slider}
              alt=""
              className="h-7 w-6 object-cover cursor-pointer"
            />
          </div>
          <div className="space-y-6 mt-10">
            {jobs.map((job, index) => (
              <div
                key={index}
                onClick={() => setOpenModal(true)}
                className="bg-white p-4 rounded-lg shadow-lg flex gap-10 items-center cursor-pointer"
              >
                <div>
                  <img
                    src={job.Image}
                    alt={job.company}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-xl font-bold">{job.role}</p>
                  </div>
                  <div className="flex gap-10">
                    <p>{job.experience}</p>
                    <p>{job.type}</p>
                    <p>{job.location}</p>
                    <p>{job.skills}</p>
                  </div>
                </div>
                <div className="self-start">
                  <IcOutlineShare className="size-6 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-5">
            <button className="px-4 py-2 rounded-full mx-1">1</button>
            <button className="px-4 py-2 rounded-full mx-1">2</button>
            <button className="px-4 py-2 rounded-full mx-1">3</button>
            <button className="px-4 py-2 rounded-full mx-1">4</button>
            <button className="px-4 py-2 rounded-full mx-1">5</button>
            <button className="px-4 py-2 rounded-full mx-1">6</button>
            <button className="px-4 py-2 rounded-full mx-1">7</button>
            <button className="px-4 py-2 bg-[#333399] text-white text-xl rounded-full mx-1">
              &gt;
            </button>
          </div>
        </div>
      </div>
      {openModal && <JobDetailPage setOpenModal={setOpenModal} />}
    </>
  );
};

export default JobPage;
