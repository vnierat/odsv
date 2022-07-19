import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useGetJobs } from "../../api/fetchJobs";
import SearchInput from "../searchInput/SearchInput";
import JobsListTable from "./JobsListTable";

const JobsDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const jobsData = useGetJobs();

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

  const isSearchTerm = Boolean(searchTerm.length);

  return (
    <Container className="mt-5">
      <SearchInput term={searchTerm} searchKeyword={searchHandler} />
      <JobsListTable jobsData={isSearchTerm ? searchResults : jobsData} />
    </Container>
  );
};

export default JobsDashboard;
