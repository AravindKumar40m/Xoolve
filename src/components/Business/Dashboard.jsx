import React from "react";
import { useState } from "react";
import { Image } from "../../assets/StartUpMentors/index";
import {
  MdiBellNotificationOutline,
  IconamoonEditThin,
} from "../../assets/Icons";
import { SlCalender } from "react-icons/sl";
import { FaDownload } from "react-icons/fa"; // Import download icon
import { TiStar } from "react-icons/ti";
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
  const Business = [
    {
      name: "Motars",
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
      progression: 45,
      team: "$50000",
      funding: "50000",
      market: "70%(50000)",
      investors: "",
    },
    {
      name: "Product Base",
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
      progression: 65,
      team: "$50000",
      funding: "50000",
      market: "70%(50000)",
      investors: "",
    },
    {
      name: "Product Base",
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
      progression: 65,
      team: "$50000",
      funding: "50000",
      market: "70%(50000)",
      investors: "",
    },
  ];
  const Xperts = [
    {
      name: "Rishab",
      skills: ["Graphic Design", "Web Design"],
      session: "13 Sessions",
      rating: "4.5",
      image: investment,
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    },
    {
      name: "Rishab",
      skills: ["Graphic Design", "Web Design"],
      session: "13 Sessions",
      rating: "4.5",
      image: investment,
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    },
    {
      name: "Rishab",
      skills: ["Graphic Design", "Web Design"],
      session: "13 Sessions",
      rating: "4.5",
      image: investment,
      description:
        "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    },
  ];
  const TodayTask = [
    {
      ProjectName: "Product",
      ProjectCore: "Technology",
      MeetingStatus: "Schedule for meeting",
      Timing: "10:00am - 11:30am",
      Review: "Progression",
      View:"VIEW",
      DownloadLink: "#", // Replace with actual file URL
    },
    {
      ProjectName: "Motor",
      ProjectCore: "AutoMobile",
      MeetingStatus: "Pending",
      Timing: "-",
      Review: "-",
      View:"VIEW",
      DownloadLink: "#",
    },
    {
        ProjectName: "Webi",
        ProjectCore: "UI/UX Design",
        MeetingStatus: "Schedule for meeting",
        Timing: "2:00pm - 3:00pm",
        Review: "Pending",
        View:"VIEW",
        DownloadLink: "#",
      },
      {
        ProjectName: "Designer",
        ProjectCore: "UI/UX Design development",
        MeetingStatus: "Schedule for meeting",
        Timing: "2:00pm - 3:00pm",
        Review: "Pending",
        View:"VIEW",
        DownloadLink: "#",
      },
    // Add more data...
  ];

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  
  // Filtering logic (if needed)
  const filteredTasks = TodayTask.filter((task) => {
    // Add filtering conditions based on month and year here
    return true; // Modify this as per your requirements
  });

  const handleExport = () => {
    // Logic for exporting data to CSV
    console.log("Exporting data...");
    // Implement CSV export logic here
  };

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
      </div>
      <div className="flex flex-col">
        <div className="p-4">
          <div className="flex flex-row justify-content space-x-10 rounded-md overflow-x-scroll">
            {Business.map((data, index) => {
              // Determine the progression color based on the value
              const progressionColor =
                data.progression <= 50
                  ? "bg-yellow-400"
                  : data.progression <= 60
                  ? "bg-green-400"
                  : "bg-green-600"; // For >60, it can be a darker green

              return (
                <>
                  <div
                    key={index}
                    className="flex-col bg-white p-2 rounded-lg shadow-lg"
                  >
                    <div className="flex justify-between">
                      <div>
                        <p className="p-5 font-bold text-2xl">{data.name}</p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-16 px-5">
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-[#5a5a5f] underline">
                          Description
                        </p>
                        <p className="text-sm">{data.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-16 px-5">
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-[#5a5a5f] ">
                          Progression
                        </p>
                        {/* Progress Bar */}
                        <div className=" flex flex-col justify-content w-[650px] bg-gray-200 rounded-full h-2">
                          <div
                            className={`${progressionColor} h-2 rounded-full`}
                            style={{ width: `${data.progression}%` }}
                          ></div>
                        </div>
                        <p className="text-sm mt-2">{data.progression}%</p>
                      </div>
                    </div>

                    <div className="flex flex-row gap-36 p-5">
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-[#5a5a5f]">Team</p>
                        <p className="font-bold text-[#ff00cc]">{data.team}</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-[#5a5a5f]">Funding</p>
                        <p className="font-bold text-[#ff00cc]">
                          {data.funding}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-[#5a5a5f]">
                          Market Status
                        </p>
                        <p className="font-bold text-[#ff00cc]">
                          {data.market}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-[#5a5a5f]">Investors</p>
                        <p className="font-bold text-[#ff00cc]">
                          {data.investors}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-full p-4">
          <div className="flex flex-col gap-4">
            <p className="font-bold">Our Xperts</p>
            <div className=" p-3 rounded-lg flex flex-col gap-3">
              <div className="flex flex-row justify-content space-x-2 rounded-md overflow-x-scroll">
                {Xperts.map((data, index) => (
                  <>
                    <div key={index} className="flex flex-col bg-white">
                      <div className="flex justify-between item-center space-x-10 w-[500px] h-[300px]">
                        <div className="flex justify-content space-x-1">
                          <img
                            src={data.image}
                            alt={data.name}
                            className="object-cover rounded-lg p-5 w-[250px]"
                          />
                          <div className="flex flex-col gap-2 p-2 mt-4">
                            <p className="text-3xl font-semibold">
                              {data.name}
                            </p>
                            <p className="text-sm font-normal">
                              {data.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {data.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="flex justify-start">
                              <p className="text-sm font-bold text-[#FF0000] ">
                                Sessions:{" "}
                              </p>
                              <p className="text-sm font-bold text-[#FF0000] underline">
                                {data.session}
                              </p>
                            </div>
                            <div className="flex justify-start">
                              <p className="text-sm font-normal">
                                {data.rating}
                              </p>
                              <TiStar className="text-yellow-500 size-5" />
                            </div>
                            <div className="flex justify-between ">
                              <button className="bg-green-600 text-white py-2 px-4 font-semibold">
                                Connect
                              </button>
                              <button className="bg-blue-600 text-white py-2 px-4  font-semibold">
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
                <div><p className="font-Normal, font-semibold">Project Report</p></div>
        <div className="flex justify-end gap-3 ">
            <div className="bg-white flex justify-between items-center space-x-2 p-2">
                <SlCalender size={25}/>
          <div>
            <label className="font-semibold"></label>
            <select
              className=" p-2 rounded bg-transparent"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value="">Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
              {/* Add more months */}
            </select>
          </div>

          <div>
            <label className="font-semibold"></label>
            <select
              className=" p-2 rounded bg-transparent"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Year</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="Before 2023">Before 2023</option>
              {/* Add more years */}
            </select>
          </div>
          </div>
          {/* Export Button */}
        <button
          className="px-5 py-1 w-[150px] text-white bg-gradient-to-r from-[#FF00CC] via-[#9E18B4] to-[#333399] rounded-lg hover:bg-gradient-to-br"
          onClick={handleExport}
        >
          Export
        </button>
        </div>
      </div>

      {/* Task Table */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="text-[#333399]">
            <th className="px-4 py-2 text-left border-b">Project Name</th>
            <th className="px-4 py-2 text-left border-b">Project Core</th>
            <th className="px-4 py-2 text-left border-b">Meeting Status</th>
            <th className="px-4 py-2 text-left border-b">Timing</th>
            <th className="px-4 py-2 text-left border-b">Review</th>
            <th className="px-4 py-2 text-left border-b">View</th>
            <th className="px-4 py-2 text-left border-b">Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((data, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2 font-semibold">{data.ProjectName}</td>
              <td className="px-4 py-2 font-semibold">{data.ProjectCore}</td>
              <td className="px-4 py-2 font-semibold">{data.MeetingStatus}</td>
              <td className="px-4 py-2 font-semibold text-green-700">{data.Timing}</td>
              <td className="px-4 py-2 font-semibold">{data.Review}</td>
              <td className="px-4 py-2 font-semibold">{data.View}</td>
              <td className="px-4 py-2">
                <a href={data.DownloadLink} className="text-blue-500">
                  <FaDownload />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
