import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  const [DetailsProject, setDetailsProject] = useState([]);
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setDetailsProject(data));
  }, []);

  useEffect(() => {
    const findProject = DetailsProject.find((project) => project.id === id);
    console.log(findProject);
    setDetails(findProject);
  }, [DetailsProject]);

  return (
    <div>
      <h1>{details?.name}</h1>
    </div>
  );
};

export default ProjectDetails;
