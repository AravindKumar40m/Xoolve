import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/freelancer/" element={<Freelancer />}>
          <Route path="profile" element={<Profile />} />
          <Route path="job" element={<JobPage />} />
          <Route path="projects" element={<ProjectDashboard />} />
        </Route>
        <Route path="/mentor/" element={<MentorLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<MentorProfile />} />
        </Route>
        <Route path="/startup/" element={<StartUpLayout />}>
          <Route path="dashboard" element={<StartUpDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
