import React from "react";
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

const generateRandomData = () => {
  const data = [];
  let currentDate = new Date(2023, 7, 1);
  const endDate = new Date(2023, 8, 30);

  while (currentDate <= endDate) {
    data.push({
      date: currentDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
      }),
      views: Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};

const data = generateRandomData();

function Dashboard() {
  const Investment = [
    {
      name: "John",
      date: "February 21",
      price: "$5000",
      image: investment,
    },
    {
      name: "John",
      date: "February 21",
      price: "$5000",
      image: investment,
    },
    {
      name: "John",
      date: "February 21",
      price: "$5000",
      image: investment,
    },
  ];

  const assessments = [
    {
      star: "⭐⭐⭐⭐⭐",
      value: "5",
      name: "Values",
    },
    {
      star: "⭐⭐⭐⭐⭐",
      value: "5",
      name: "Products",
    },
    {
      star: "⭐⭐⭐⭐⭐",
      value: "5",
      name: "core",
    },
    {
      star: "⭐⭐⭐⭐⭐",
      value: "5",
      name: "Market rate",
    },
    {
      star: "⭐⭐⭐⭐⭐",
      value: "5",
      name: "Team",
    },
  ];

  return (
    <div className="bg-[#fbeef9] min-h-screen px-8 py-2">
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
        <div className="flex items-center space-x-4 bg-white p-4">
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 rounded-full peer dark:bg-[#d9d9d9] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#d9d9d9] peer-checked:bg-blue-600"></div>
          </label>

          <p className="uppercase font-bold">publish startup to public</p>
        </div>
      </div>
      <div className="flex w-full h-[250px]">
        <img src={dashboard} alt="" className="h-full w-[300px] object-cover" />
        <div className="bg-white p-2 w-full">
          <div className="flex justify-between w-full">
            <p className="p-5 font-bold text-2xl">Web Technology</p>
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
                Information Technology
              </p>
            </div>
            <div className="flex flex-col gap-1 text-nowrap">
              <p className="font-bold text-[#5a5a5f]">Founded Date</p>
              <p className="bg-[#ffccf5] p-1 font-semibold">25/06/2023</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-[#5a5a5f]">Description</p>
              <p className="text-sm">
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-36 p-5">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-[#5a5a5f]">Website</p>
              <p className="font-bold text-[#ff00cc]">Webtech.com</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-[#5a5a5f]">Email</p>
              <p className="font-bold text-[#ff00cc]">Webtech@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 bg-white p-3 w-[290px] rounded-lg">
            <div className="flex justify-between">
              <p className="font-bold text-md">Seeding Target</p>
              <IconamoonEditThin className="size-6" />
            </div>
            <p className="text-[#ff00cc] text-xs font-semibold">
              Ends 26-Mar-2024
            </p>
            <div className="flex flex-col gap-1 text-xs font-bold">
              <div className="flex justify-between text-[#333399]">
                <p>Raised</p>
                <p>Target</p>
              </div>
              <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
                <div
                  className="bg-gradient-to-r from-[#fb01cb] via-[#333399]  to-[#333399] h-2 rounded-full"
                  style={{ width: "50%" }}
                />
              </div>
              <div className="flex justify-between">
                <p>$20,000</p>
                <p>$5,00,000</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 w-[290px] rounded-lg flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-bold">Invester Star</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            <p className="font-bold self-center">79</p>
          </div>
          <div className="bg-white p-3 w-[290px] rounded-lg flex flex-col gap-3">
            <p className="font-bold">Recent Investments</p>
            <p className="text-sm text-[#ff00cc] font-semibold">10 Investors</p>
            <div className="flex flex-col gap-2">
              {Investment.map((data, index) => (
                <>
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div className="flex gap-2">
                      <img
                        src={data.image}
                        alt={data.name}
                        className="object-cover rounded-lg"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold">{data.name}</p>
                        <p className="text-xs font-normal">{data.date}</p>
                      </div>
                    </div>
                    <p className="font-bold">{data.price}</p>
                  </div>
                  <div className="h-[2px] w-full bg-black"></div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="p-4 bg-white rounded-xl w-[450px] h-[260px]">
              <p className="font-bold mb-4">Startup Views</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-[#ff00cc]">
                    Investor Views
                  </p>
                  <h2 className="text-3xl font-bold text-center">
                    {data[data.length - 1].views}
                  </h2>
                </div>
                <div className="text-right">
                  <p className="text-[#ed1c24] text-sm font-semibold">
                    37% (2012){" "}
                    <span className="inline-block transform rotate-180">
                      &#x25BC;
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 text-center">
                    Last Month
                  </p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={150}>
                <AreaChart data={data.slice(-10)}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d13ce4" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#d13ce4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={false} axisLine={false} />
                  <YAxis hide={true} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stroke="#d13ce4"
                    fill="url(#colorViews)"
                    strokeWidth={3}
                  />
                  <text
                    x={0}
                    y={140}
                    fill="#000"
                    textAnchor="start"
                    fontSize="12px"
                  >
                    AUG
                  </text>
                  <text
                    x={250}
                    y={140}
                    fill="#000"
                    textAnchor="end"
                    fontSize="12px"
                  >
                    SEP
                  </text>
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="p-4 bg-white rounded-xl flex flex-col w-[440px]">
              <div className="flex justify-between mb-3">
                <p className="font-bold">Update for Startup</p>
                <IconamoonEditThin className="size-6" />
              </div>
              <textarea
                className="w-full p-2 mt-2 border focus:outline-none focus:ring-1 focus:ring-pink-400"
                rows={1}
                placeholder="Topics"
              />
              <textarea
                className="w-full p-2 mt-2 border focus:outline-none focus:ring-1 focus:ring-pink-400"
                placeholder="Content"
              />
              <button className="self-end mt-4 bg-gradient-to-r from-[#fb01cb] to-[#333399] text-white px-8 py-2 font-semibold">
                Post
              </button>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg flex flex-col gap-3 h-[260px]">
            <div className="flex justify-between">
              <p className="font-bold">Startup Assessment Details</p>
              <IconamoonEditThin className="size-6" />
            </div>
            <p className="text-[#ff00cc] font-bold">
              Helps to matching right Investors
            </p>
            <div className="flex gap-5 p-4 justify-center">
              {assessments.map((data, index) => (
                <div
                  key={index}
                  className="p-4 shadow-xl text-center flex flex-col gap-1"
                >
                  <p className="text-xs">{data.star}</p>
                  <p className="text-2xl font-bold">{data.value}</p>
                  <p className="font-semibold">{data.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
