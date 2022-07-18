import React from "react";
import JobsDashboard from "./components/dashboard/JobsDashboard";
import Header from "./components/header/Header";

const App = () => {
  console.log("cast");
  return (
    <>
      <Header />
      <JobsDashboard />
    </>
  );
};

export default App;
