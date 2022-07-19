import React from "react";
import { Card, Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useGetJobById } from "../../../api/fetchJobs";
import PreviousIcon from "../../../assets/svgs/previous.svg";
import { dateFormatter, getIconType } from "../../../utils/utils";
const JobDetails = () => {
  const { id } = useParams();
  const jobDetails = useGetJobById(Number(id));

  const { name, id_job, environment, operation, status, created_date } =
    jobDetails;

  const isLoaded = Boolean(
    (name && id_job && environment && operation && status && created_date) !==
      undefined
  );

  return (
    <Container className="mt-3">
      <Link to="/">
        <div className="mb-3 d-flex">
          <div>
            <img src={PreviousIcon} className="svg-icon" alt="svg-icon" />
          </div>
          <div className="ml-2 font-weight-bold">Previous</div>
        </div>
      </Link>
      {isLoaded ? (
        <Card>
          <Card.Header className="h3">{`${id} - ${name}`}</Card.Header>
          <Card.Body>
            <Card.Title>{id_job}</Card.Title>
            <Card.Text>
              <span className="font-weight-bold">Environement : </span>
              {environment}
            </Card.Text>
            <Card.Text>
              <span className="font-weight-bold">Operation :</span> {operation}
            </Card.Text>
            <Card.Text>
              <span className="font-weight-bold">Creation date :</span>{" "}
              {dateFormatter(created_date)}
            </Card.Text>
            <Card.Text>
              <span className="font-weight-bold">Status :</span> {status}
              <img
                src={getIconType(status)}
                alt="svg-icon"
                className="svg-icon"
              />
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <div className="h3">Loading...</div>
      )}
    </Container>
  );
};

export default JobDetails;
