import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Freelancer from "./components/Freelancer/Freelancer";
import Profile from "./components/Freelancer/Profile";
import ProjectDashboard from "./components/Freelancer/ProjectDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/freelancer/" element={<Freelancer />}>
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<ProjectDashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
