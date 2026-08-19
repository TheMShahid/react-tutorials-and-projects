import "./fetchNewProjects";
import { useFetchNewProjects } from "./fetchNewProjects";

const Projects = () => {
  const { loading, projects } = useFetchNewProjects();

  if (loading) {
    <section className="projects">
      <h2>loading...</h2>
    </section>;
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, url, img, title } = project;
          return (
            <a href={url} target="_blank" rel="no-referrer" className="project">
              <img src={img} alt={title} />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
