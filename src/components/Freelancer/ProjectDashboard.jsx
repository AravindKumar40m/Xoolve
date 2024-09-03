import React, { useState } from "react";
import { HiBell, HiOutlineBell } from "react-icons/hi";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { image1 } from "../../assets/index";
const ProjectDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [alertEnabled, setAlertEnabled] = useState(false);
  const [savedProjects, setSavedProjects] = useState({});
  const [sortOption, setSortOption] = useState("latest");
  const [projectType, setProjectType] = useState("");
  const [hourRateRange, setHourRateRange] = useState(50); // Default value
  const [fixedRateRange, setFixedRateRange] = useState(500); // Default value
  const [projectsYouMightLike, setProjectsYouMightLike] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1",
      biddingAmount: "4000 INR",
      skills: ["React", "Node.js"],
      timePosted: "1 hour ago",
      image: image1,
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      biddingAmount: "2500 INR",
      skills: ["JavaScript", "CSS"],
      timePosted: "3 hours ago",
      image: image1,
    },
    // Add more projects here
  ]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here if needed
    console.log("Search for:", searchTerm);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    // Implement sorting logic here based on the selected option
  };

  const handleApplyFilters = () => {
    // Apply the filters to the project list
  };

  const handleClearFilters = () => {
    setProjectType("");
    setHourRateRange(50);
    setFixedRateRange(500);
    setProjectsYouMightLike("");
    setSpeciality("");
  };

  const handleBookmarkClick = (projectId) => {
    setSavedProjects((prevState) => ({
      ...prevState,
      [projectId]: !prevState[projectId],
    }));
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFECFB] flex flex-wrap p-4">
      {/* Left Side - Project List */}
      <div className="w-full md:w-3/4 p-4">
        <div className="mb-4 flex justify-content">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Find your Project"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full  p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleSearch}
            className="ml-2 px-6 py-2 text-white font-semibold text-lg flex justify-content space-x-2 bg-gradient-to-r from-[#FF00CC] via-[#9E18B4] to-[#333399] rounded-md hover:bg-gradient-to-br"
          >
            <IoIosSearch size={27} />
            Find
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-3">
            <h2 className="text-base font-semibold">Results: </h2>
            <h2 className="text-base font-semibold mb-4 text-[#333399]">
              {filteredProjects.length} Projects
            </h2>
          </div>

          {/* Alert Enable Button */}
          <div className="flex justify-end space-x-3">
            <div
              className={`flex items-center cursor-pointer ${
                alertEnabled ? "text-[#9919B2]" : "text"
              }`}
              onClick={() => setAlertEnabled(!alertEnabled)}
            >
              {alertEnabled ? (
                <HiBell size={20} />
              ) : (
                <HiOutlineBell size={20} />
              )}
              <span className="ml-2 text-base font-semibold">
                Notification alert
              </span>
            </div>

            {/* Sort By Dropdown */}
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="latest">Latest</option>
              <option value="relevant">Relevant</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>

        <div>
          <ul className="space-y-4">
            {filteredProjects.map((project) => (
              <li
                key={project.id}
                className="p-4 bg-white shadow rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-13 h-13 rounded-full mr-2"
                    />
                    <h3 className="font-bold text-xl">{project.title}</h3>
                  </div>
                  <div className="flex space-x-4">
                    <span className="text-lg">1bid</span>
                    <span className="text-lg font-semibold text-[#FF00CC]">
                      {project.biddingAmount}
                    </span>
                  </div>
                </div>
                <p className="text-sm mb-2">{project.description}</p>
                <p className="text-sm text-[#333399] font-semibold mb-2">
                  * {project.skills.join(" * ")}
                </p>
                <div className="flex justify-end items-center space-x-3 mt-4">
                  <span className="text-base">{project.timePosted}</span>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => handleBookmarkClick(project.id)}
                  >
                    {savedProjects[project.id] ? (
                      <FaBookmark size={20} />
                    ) : (
                      <FaRegBookmark size={20} />
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side - Live Project and Filters */}
      <div className="w-full md:w-1/4 p-4">
        {/* Live Project */}
        <div className="mb-6 p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Live Project</h2>
          <p className="text-gray-600">
            Current working project description...
          </p>
        </div>

        {/* Filters */}
        <div className="p-4 bg-white shadow rounded-lg">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold mb-4">Filter</h2>
            <div>
              <button
                onClick={handleClearFilters}
                className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Project Type Filter */}
          <div className="mb-4 p-2">
            <h3 className="text-md font-bold">Project Type</h3>
            <div className="mt-2 space-y-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="projectType"
                    value="hourRate"
                    checked={projectType === "hourRate"}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Hour Rate</span>
                </label>
                {projectType === "hourRate" && (
                  <div className="ml-6 mt-2">
                    <label className="block text-gray-700">
                      Rate: {hourRateRange} USD/hour
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="200"
                      value={hourRateRange}
                      onChange={(e) => setHourRateRange(e.target.value)}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="projectType"
                    value="fixedRate"
                    checked={projectType === "fixedRate"}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Fixed Rate</span>
                </label>
                {projectType === "fixedRate" && (
                  <div className="ml-6 mt-2">
                    <label className="block text-gray-700">
                      Rate: {fixedRateRange} USD
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      value={fixedRateRange}
                      onChange={(e) => setFixedRateRange(e.target.value)}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Projects You Might Like Filter */}
          <div className="mb-4 p-2">
            <h3 className="text-md font-bold">Projects You Might Like</h3>
            <div className="mt-2 space-y-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="projectsYouMightLike"
                    value="bestMatches"
                    checked={projectsYouMightLike === "bestMatches"}
                    onChange={(e) => setProjectsYouMightLike(e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Best Matches</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="projectsYouMightLike"
                    value="mostRelevant"
                    checked={projectsYouMightLike === "mostRelevant"}
                    onChange={(e) => setProjectsYouMightLike(e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Most Relevant</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="projectsYouMightLike"
                    value="saved"
                    checked={projectsYouMightLike === "saved"}
                    onChange={(e) => setProjectsYouMightLike(e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Saved</span>
                </label>
              </div>
            </div>
          </div>

          {/* Specialities Filter */}
          <div className="mb-4 p-2">
            <h3 className="text-md font-bold">Specialities</h3>
            <div className="mt-2 space-y-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="speciality"
                    value="graphicDesigner"
                    checked={speciality === "graphicDesigner"}
                    onChange={(e) => setSpeciality(e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Graphic Designer</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="speciality"
                    value="uiDesigner"
                    checked={speciality === "uiDesigner"}
                    onChange={(e) => setSpeciality(e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">UI Designer</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="speciality"
                    value="uxDesigner"
                    checked={speciality === "uxDesigner"}
                    onChange={(e) => setSpeciality(e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">UX Designer</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="speciality"
                    value="webDesigner"
                    checked={speciality === "webDesigner"}
                    onChange={(e) => setSpeciality(e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Web Designer</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="speciality"
                    value="others"
                    checked={speciality === "others"}
                    onChange={(e) => setSpeciality(e.target.value)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Others</span>
                </label>
              </div>
            </div>
          </div>

          {/* Apply and Clear Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleApplyFilters}
              className="px-3 py-2 text-white bg-gradient-to-r from-[#FF00CC] via-[#9E18B4] to-[#333399] rounded-md hover:bg-gradient-to-br"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
