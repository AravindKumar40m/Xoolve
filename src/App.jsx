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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/freelancer/" element={<Freelancer />}>
          <Route path="profile" element={<Profile />} />
          <Route path="job" element={<JobPage />} />
          <Route path="projects" element={<ProjectDashboard />} />
        </Route>
        <Route path="/mentor/" element={<MentorLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<MentorProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
