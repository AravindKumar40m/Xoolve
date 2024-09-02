import React, { useState } from "react";
import {
  CarbonSearch,
  MdiBellNotificationOutline,
  PhChat,
} from "../../assets/Icons";
import {
  Image,
  worktime,
  Session,
  star,
} from "../../assets/StartUpMentors/index";
import {
  student1,
  student2,
  student3,
  student4,
} from "../../assets/StartUpMentors/student/index";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const student = [
  {
    image: student1,
    name: "Jenny",
  },
  {
    image: student2,
    name: "Kristian",
  },
  {
    image: student3,
    name: "Kristian",
  },
  {
    image: student4,
    name: "David",
  },
  {
    image: student4,
    name: "David",
  },
];

const sessions = [
  {
    image: Session,
    name: "Lorem Ipsum is simply dummy text of the printing",
    description:
      "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    session: "2/8 Completed",
    student: [
      {
        image: student1,
      },
      {
        image: student2,
      },
      {
        image: student3,
      },
      {
        image: student4,
      },
    ],
    rating: 4.5,
    enrolled: "4000+",
    hours: 2,
    button: "Resume",
    buttonColor: "bg-blue-700",
  },
  {
    image: Session,
    name: "Lorem Ipsum is simply dummy text of the printing",
    description:
      "and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
    session: "7 Sessions",
    student: [
      {
        image: student1,
      },
      {
        image: student2,
      },
      {
        image: student3,
      },
      {
        image: student4,
      },
    ],
    rating: 4.5,
    enrolled: "6000+",
    hours: 1,
    button: "Start",
    buttonColor: "bg-green-500",
  },
];

const payment = [
  {
    image: student1,
    name: "Jenny",
    role: "UI/UX Designer, New York.",
    price: "+$10.00",
  },
  {
    image: student2,
    name: "Kristian",
    role: "WebDesign",
    price: "+$10.00",
  },
  {
    image: student4,
    name: "David",
    role: "Development",
    price: "+$10.00",
  },
  {
    image: student4,
    name: "David",
    role: "Development",
    price: "+$10.00",
  },
];

const Header = () => {
  return (
    <div className="pb-2 flex justify-between items-center mb-5 gap-10">
      <div className="relative w-[60%]">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <CarbonSearch className="size-5 text-[#707482]" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm rounded-full placeholder:text-[#707482] bg-[#fbd9f5] text-gray-600 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          placeholder="Search Your task"
          required
        />
      </div>
      <div className="flex items-center gap-10">
        <div className="flex gap-3 text-[#5a5a5f]">
          <PhChat className="size-6" />
          <MdiBellNotificationOutline className="size-6" />
        </div>
        <div className="flex items-center gap-4">
          <img src={Image} alt="Profile" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col gap-2">
            <p className="mr-3">Poornimaa JM</p>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [value, onchange] = useState(new Date());

  return (
    <aside className="w-[350px] bg-[#fbe7f7] shadow-md rounded-xl">
      <div className="mb-8 bg-white rounded-xl">
        <Calendar
          onChange={onchange}
          value={value}
          className="custom-calendar"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold p-4 mb-2">Payment</h2>
        {/* Add payment details here */}
        <div className="flex flex-col gap-8">
          {payment.map((data, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex gap-2">
                <img
                  src={data.image}
                  alt=""
                  className="object-cover rounded-full"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-bold">{data.name}</p>
                  <p className="text-sm">{data.role}</p>
                </div>
              </div>
              <p className="font-bold text-blue-600">{data.price}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

const MainContent = () => {
  return (
    <main className="flex-1 overflow-y-auto scrollbar-hide pr-6">
      <section className="mb-8 bg-white p-5 flex justify-between rounded-lg border-2 border-gray-300">
        <div className="flex flex-col justify-between p-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-700">
            Hi John!
          </h1>
          <div className="font-semibold">
            <p>You have completed 5 sessions yesterday.</p>
            <p> Start your sessions today.</p>
          </div>
        </div>
        <img src={worktime} alt="" className="object-cover" />
      </section>
      <section className="mb-8">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">My Students</h2>
          <p className="text-blue-600 cursor-pointer underline font-bold">
            view all
          </p>
        </div>
        <div className="flex space-x-8 p-4 mt-4">
          {student.map((data, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img
                src={data.image}
                alt=""
                className="object-cover flex rounded-full"
              />
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-lg font-bold mb-4">My Sessions</h2>
        <div className="space-y-4 bg-white w-full p-3 rounded-3xl">
          {sessions.map((data, index) => (
            <>
              <div key={index} className="flex gap-4">
                <img src={data.image} alt="" />
                <div className="flex flex-col gap-3">
                  <p className="text-2xl font-bold">{data.name}</p>
                  <p className="font-normal">{data.description}</p>
                  <div className="flex justify-between">
                    <div className="bg-[#fde8e9] flex gap-3 font-bold text-red-600 p-2">
                      <p>Session:</p>
                      <p className="underline">{data.session}</p>
                    </div>
                    <div>
                      <div className="flex items-center">
                        {data.student.map((d, index) => (
                          <img
                            src={d.image}
                            alt=""
                            className="flex object-cover w-10 h-10"
                          />
                        ))}
                        <p className="text-blue-600 font-bold">+ Students</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <p className="font-medium">Rating:</p>
                      <div className="flex gap-1">
                        <p className="font-bold">{data.rating}</p>
                        <img
                          src={star}
                          alt=""
                          className="object-cover w-[13px] h-[13px] mt-[6px]"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <p className="font-medium">Enrolled:</p>
                      <p className="font-bold">{data.enrolled}</p>
                    </div>
                    <p className="font-bold text-red-600">
                      {data.hours} Hours Per day
                    </p>
                    <button
                      className={`${data.buttonColor} p-1 px-4 text-white rounded-lg font-semibold`}
                    >
                      {data.button}
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-black"></div>
            </>
          ))}
        </div>
      </section>
    </main>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#fbeef9] flex flex-col p-8">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
