import { useState, useEffect } from "react";

export const useGetJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://retoolapi.dev/vN3bSe/data?_page=1&_limit=10")
      .then((response) => response.json())
      .then(setJobs);
  }, []);

  return jobs;
};
