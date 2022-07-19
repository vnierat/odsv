import { FC, useState, Fragment, useEffect } from "react";
import { Job } from "../../interfaces/job";
import { Table } from "react-bootstrap";
import React from "react";
import SortIcon from "../../assets/svgs/sort.svg";
import DeleteIcon from "../../assets/svgs/delete.svg";
import { deleteJob } from "../../api/fetchJobs";
import { Link } from "react-router-dom";
import { dateFormatter, getIconType } from "../../utils/utils";

interface JobsTableProps {
  jobsData: Job[];
}

const JobsListTable: FC<JobsTableProps> = ({ jobsData }) => {
  const [data, setData] = useState(jobsData);
  const [order, setOrder] = useState<string>("ASC");

  useEffect(() => {
    setData(jobsData);
  }, [jobsData]);

  const sortColumn = (col: string) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a: any, b: any) =>
        a[col] > b[col] ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a: any, b: any) =>
        a[col] < b[col] ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  const headers = [
    { key: null, label: null, sort: false },
    { key: "id", label: "ID", sort: true },
    { key: "name", label: "Name", sort: true },
    { key: "status", label: "Status", sort: true },
    { key: "operation", label: "Operation", sort: true },
    { key: "environment", label: "Environment", sort: true },
    { key: "created_date", label: "Creation Date", sort: false },
  ];

  const handleDelete = (id: number) => {
    deleteJob(id);
    setData(data.filter((el) => el.id !== id));
  };

  return (
    <Table striped bordered hover>
      <thead className="font-weight-bold">
        <tr>
          {headers.map(({ key, label, sort }) => (
            <Fragment key={key}>
              <td onClick={() => sortColumn(`${key}`)}>
                <div className="td-head">
                  {label}
                  {sort && (
                    <img className="svg-icon" src={SortIcon} alt="svg-icon" />
                  )}
                </div>
              </td>
            </Fragment>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map(
          ({
            operation,
            name,
            environment,
            id,
            id_job,
            status,
            created_date,
          }) => {
            return (
              <tr key={id}>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(id)}
                  >
                    <img src={DeleteIcon} className="svg-icon" alt="svg-icon" />
                  </button>
                </td>
                <td>{id}</td>
                <td>
                  <Link to={`/job/${id}`}>
                    <div className="text-primary">{name}</div>
                  </Link>
                  <div className="text-secondary text-id">{id_job}</div>
                </td>
                <td>
                  <img
                    src={getIconType(status)}
                    className="svg-icon"
                    alt="svg-icon"
                  />
                </td>
                <td>{operation}</td>
                <td>{environment}</td>
                <td>{dateFormatter(created_date)}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </Table>
  );
};

export default JobsListTable;
