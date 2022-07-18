import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useGetJobs } from "../../api/fetchJobs";
import SearchInput from "../searchInput/SearchInput";
import JobsTable from "./JobsTable";

const JobsDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (searchTerm: any) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = jobsData.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(jobsData);
    }
  };
  const jobsData = useGetJobs();

  console.log(searchResults);

  return (
    <Container className="mt-5">
      <SearchInput term={searchTerm} searchKeyword={searchHandler} />
      <JobsTable jobsData={searchTerm.length < 1 ? jobsData : searchResults} />
    </Container>
  );
};

export default JobsDashboard;
