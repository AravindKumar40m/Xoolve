import React from "react";
import { useState } from "react";
import { Image } from "../../assets/StartUpMentors/index";
import {
  MdiBellNotificationOutline,
  IconamoonEditThin,
} from "../../assets/Icons";
import { dashboard, investment } from "../../assets/StartUp/index";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

function Dashboard() {
  const Ideas = [
    {
      name: "Web Technology",
      sector: "Information Technology",
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
      email: "webTech@gmail.com",
      views: "1000+",
      interests: "Investors",
    },
    {
      name: "Web Technology",
      sector: "Information Technology",
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
      email: "webTech@gmail.com",
      views: "1000+",
      interests: "Investors",
    },
    {
      name: "Web Technology",
      sector: "Information Technology",
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
      email: "webTech@gmail.com",
      views: "1000+",
      interests: "Investors",
    },
    {
      name: "Web Technology",
      sector: "Information Technology",
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
      email: "webTech@gmail.com",
      views: "1000+",
      interests: "Investors",
    },
  ];
  const Investment = [
    {
      name: "John",
      date: "February 21",
      price: "$5000",
      image: investment,
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    },
    {
      name: "John",
      date: "February 21",
      price: "$5000",
      image: investment,
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    },
    {
      name: "John",
      date: "February 21",
      price: "$5000",
      image: investment,
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    },
  ];

  const TodayTask = [
    {
      name: "John",
      date: "February 21",
      task: "meeting",
      todo: "12am - 1pm",
      image: investment,
      description: "Persons",
    },
    {
      name: "John",
      date: "February 21",
      task: "$5000",
      todo: "Payment Pending",
      image: investment,
      description: "Mail to Investor",
    },
    {
      name: "John",
      date: "February 21",
      task: "meeting",
      todo: "12am - 1pm",
      image: investment,
      description: "Persons",
    },
  ];

  return (
    <div className="bg-[#fbeef9] min-h-screen p-4">
      <div>
        <div className="flex items-center gap-4 justify-end pb-2">
          <MdiBellNotificationOutline className="size-6 text-[#5a5a5f]" />
          <div className="flex items-center gap-4">
            <img src={Image} alt="Profile" className="w-12 h-12 rounded-full" />
            <div className="flex flex-col gap-2">
              <p className="mr-3 font-semibold">John</p>
              <p>Human Resource</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-2">
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#fb01cb] via-[#333399]  to-[#333399] text-transparent bg-clip-text">
            Welcome John!!!
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <div className="space-y-3">
            {Ideas.map((data, index) => (
              <>
                <div key={index} className="flex flex-wrap bg-white p-2">
                  <div className="flex justify-between w-full">
                    <div>
                      <p className="p-5 font-bold text-2xl">{data.name}</p>
                    </div>

                    <div className="flex gap-3">
                      <p className="underline text-xs text-blue-700 cursor-pointer">
                        Edit Company Info
                      </p>
                      <IconamoonEditThin className="size-5" />
                    </div>
                  </div>
                  <div className="flex flex-row gap-16 px-5">
                    <div className="flex flex-col gap-1 text-nowrap">
                      <p className="font-bold text-[#5a5a5f]">Sector</p>
                      <p className="bg-[#ffccf5] p-1 font-semibold">
                        {data.sector}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-[#5a5a5f]">Description</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-36 p-5">
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-[#5a5a5f]">Email</p>
                      <p className="font-bold text-[#ff00cc]">{data.email}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-[#5a5a5f]">Views</p>
                      <p className="font-bold text-[#ff00cc]">{data.views}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-[#5a5a5f]">Interests</p>
                      <p className="font-bold text-[#ff00cc]">
                        {data.interests}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex flex-col gap-4">
            <div className="bg-white p-3 rounded-lg flex flex-col gap-3">
              <p className="font-bold">Ready To Invest</p>
              <p className="text-sm text-[#ff00cc] font-semibold">
                10 Investors
              </p>
              <div className="flex flex-col space-y-3">
                {Investment.map((data, index) => (
                  <>
                    <div key={index} className="flex flex-col ">
                      <div className="flex justify-between item-center space-x-10 ">
                        <div className="flex item-start space-x-1">
                          <img
                            src={data.image}
                            alt={data.name}
                            className="object-cover rounded-lg"
                          />
                          <div className="flex flex-col gap-2">
                            <p className="font-semibold">{data.name}</p>
                            <p className="text-xs font-normal">{data.date}</p>
                          </div>
                        </div>
                        <div className="flex ">
                          <p className="font-bold">{data.price}</p>
                        </div>
                        <div className="text-wrap w-50">
                          <p className="semibold">{data.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[2px] w-full bg-black"></div>
                  </>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 bg-white rounded-xl flex flex-col">
                <div className="flex justify-between mb-3">
                  <p className="font-bold">New Ideas</p>
                  <IconamoonEditThin className="size-6" />
                </div>

                {/* Topics and Sector aligned in a row */}
                <div className="flex gap-3">
                  <textarea
                    className="w-full p-2 mt-2 border focus:outline-none focus:ring-1 focus:ring-pink-400"
                    rows={1}
                    placeholder="Topics"
                  />
                  <textarea
                    className="w-full p-2 mt-2 border focus:outline-none focus:ring-1 focus:ring-pink-400"
                    rows={1}
                    placeholder="Sector"
                  />
                </div>

                {/* Description and Contact Details aligned in a row */}
                <div className="flex gap-3">
                  <textarea
                    className="w-full p-2 mt-2 border focus:outline-none focus:ring-1 focus:ring-pink-400"
                    placeholder="Description"
                  />
                  <textarea
                    className="w-full p-2 mt-2 border focus:outline-none focus:ring-1 focus:ring-pink-400"
                    placeholder="Contact Details"
                  />
                </div>

                <button className="self-center mt-4 bg-gradient-to-r from-[#fb01cb] to-[#333399] text-white px-8 py-2 font-semibold">
                  Post
                </button>
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg flex flex-col gap-3">
              <p className="font-bold">Today Task</p>
              <p className="text-sm text-[#ff00cc] font-semibold">Report</p>
              <div className="flex flex-col space-y-3">
                {TodayTask.map((data, index) => (
                  <>
                    <div key={index} className="flex flex-col ">
                      <div className="flex justify-between item-center space-x-10 ">
                        <div className="flex item-start space-x-1">
                          <img
                            src={data.image}
                            alt={data.name}
                            className="object-cover rounded-lg"
                          />
                          <div className="flex flex-col gap-2">
                            <p className="font-semibold">{data.name}</p>
                            <p className="text-xs font-normal">{data.date}</p>
                          </div>
                        </div>
                        <div className="flex ">
                          <p className="font-bold">{data.task}</p>
                        </div>
                        <div className="flex ">
                          <p className="font-bold">{data.todo}</p>
                        </div>
                        <div className="text-wrap w-50">
                          <p className="semibold">{data.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[2px] w-full bg-black"></div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
