import { useState, useEffect } from "react";

const baseURL = "https://retoolapi.dev/vN3bSe/data/";

export const useGetJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then(setJobs);
  }, []);

  return jobs;
};

export const useGetJobById = (id: number) => {
  const [jobDetails, setJobDetails] = useState<any>({});

  useEffect(() => {
    fetch(`${baseURL}${id}`)
      .then((response) => response.json())
      .then(setJobDetails);
  }, [id]);

  return jobDetails;
};

/* 

this func is useless, i used it only for testing, don't worry ;) 

export const usePostIt = () => {
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 95,
        name: "Ceci est un post de test numéro 95",
        id_job: "post_007",
        status: "success",
        operation: "Backup",
        environment: "Sandbox",
        created_date: "Nov 4, 2021 6:18 PM",
      }),
    };
    fetch("https://retoolapi.dev/vN3bSe/data/", requestOptions).then(
      (response) => response.json()
    );
  }, []);
}; */

export const deleteJob = async (id: number) => {
  fetch(`${baseURL}${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};
