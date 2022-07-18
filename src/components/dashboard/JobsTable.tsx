import { FC, useCallback, useState } from "react";
import { Job } from "../../interfaces/user";
import { Table } from "react-bootstrap";
import React from "react";
import SortIcon from "../../assets/svgs/sort.svg";

interface JobsTableProps {
  jobsData: Job[];
}

const JobsTable: FC<JobsTableProps> = ({ jobsData }) => {
  console.log("test");
  const [sortKey, setSortKey] = useState<SortKeys>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

  type Data = typeof jobsData;

  type SortKeys = keyof Data[0];

  type SortOrder = "ascn" | "desc";

  const sortData = ({
    tableData,
    sortKey,
    reverse,
  }: {
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;
  }) => {
    if (!sortKey) return tableData;

    const sortedData = jobsData.sort((a, b) => {
      return a[sortKey]! > b[sortKey]! ? 1 : -1;
    });

    if (reverse) {
      return sortedData.reverse();
    }

    return sortedData;
  };

  const SortButton = ({
    sortOrder,
    columnKey,
    sortKey,
    onClick,
  }: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: () => void;
  }) => {
    return (
      <div
        onClick={onClick}
        className={`${
          sortKey === columnKey && sortOrder === "desc"
            ? "sort-button sort-reverse"
            : "sort-button"
        }`}
      >
        <img className="sort-icon" src={SortIcon} alt="sort-icon" />
      </div>
    );
  };

  const headers: { key: SortKeys; label: string; sort: boolean }[] = [
    { key: "id", label: "ID", sort: true },
    { key: "name", label: "Name", sort: true },
    { key: "status", label: "Status", sort: true },
    { key: "operation", label: "Operation", sort: true },
    { key: "environment", label: "Environment", sort: true },
    { key: "created_date", label: "Creation Date", sort: true },
  ];

  const sortedData = useCallback(
    () =>
      sortData({
        tableData: jobsData,
        sortKey,
        reverse: sortOrder === "desc",
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [jobsData, sortKey, sortOrder]
  );

  const changeSort = (key: SortKeys) => {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
    console.log(sortOrder);
    setSortKey(key);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {headers.map(({ key, label, sort }) => {
            return (
              <td key={key}>
                <div className="td-head">
                  {label}
                  {sort && (
                    <SortButton
                      columnKey={key}
                      onClick={() => changeSort(key)}
                      {...{
                        sortOrder,
                        sortKey,
                      }}
                    />
                  )}
                </div>
              </td>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {sortedData().map(
          ({
            operation,
            name,
            environment,
            id,
            id_job,
            status,
            created_date,
          }) => {
            const dateFormat = new Date(created_date).toLocaleDateString(
              "fr-FR"
            );
            const time = new Date(created_date).toLocaleTimeString("fr", {
              hour12: false,
              timeZone: "UTC",
            });

            const dateValue = `${dateFormat} ${time}`;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>
                  <div>{name}</div>
                  <div>{id_job}</div>
                </td>
                <td>{status}</td>
                <td>{operation}</td>
                <td>{environment}</td>
                <td>{dateValue}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </Table>
  );
};

export default JobsTable;
