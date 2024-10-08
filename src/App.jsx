import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Freelancer from "./components/Freelancer/Freelancer";
import Profile from "./components/Freelancer/Profile";
import JobPage from "./components/Freelancer/JobPage";
import ProjectDashboard from "./components/Freelancer/ProjectDashboard";
import MentorLayout from "./components/StartupMentors/Layout";
import Dashboard from "./components/StartupMentors/Dashboard";
import MentorProfile from "./components/StartupMentors/Profile";
import StartUpDashboard from "./components/startUp/Dashboard";
import StartUpLayout from "./components/startUp/Layout";
import SignIn from "./components/SignIn";
import { useSelector } from "react-redux";
import Ideathon from "./components/Ideathon/Ideathon";
import IdeathonDashboard from "./components/Ideathon/Dashboard";
import JobHosterLayout from "./components/JobHosters/Layout";
import JobHosterDasboard from "./components/JobHosters/Dashboard";
import JobHosterProfile from "./components/JobHosters/profile";

import Business from "./components/Business/Business";
import BusinessDashboard from "./components/Business/Dashboard";
const App = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/freelancer/"
          element={
            user?.role === "Freelancer" ? <Freelancer /> : <Navigate to={"/"} />
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="job" element={<JobPage />} />
          <Route path="projects" element={<ProjectDashboard />} />
        </Route>
        <Route path="/jobhoster/" element={<JobHosterLayout />}>
          <Route path="profile" element={<JobHosterProfile />} />
          {/* <Route path="profile" element={<MentorProfile />} /> */}
        </Route>
        <Route path="/mentor/" element={<MentorLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<MentorProfile />} />
        </Route>
        <Route path="/startup/" element={<StartUpLayout />}>
          <Route path="dashboard" element={<StartUpDashboard />} />
        </Route>
        <Route path="/ideathon" element={<Ideathon />}>
          <Route path="dashboard" element={<IdeathonDashboard />} />
        </Route>
        <Route path="/business" element={<Business />}>
          <Route path="dashboard" element={<BusinessDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
