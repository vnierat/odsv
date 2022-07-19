import React from "react";
import { Route, Routes } from "react-router-dom";
import JobDetails from "./components/dashboard/job/JobDetails";
import JobsDashboard from "./components/dashboard/JobsDashboard";
import Header from "./components/header/Header";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<JobsDashboard />} />
      <Route path="/job/:id" element={<JobDetails />} />
    </Routes>
  </>
);
export default App;
