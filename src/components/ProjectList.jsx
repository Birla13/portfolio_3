import ProjectRow from "./ProjectRow";

// How many projects are shown one per row before switching to the grid.
const ROW_COUNT = 3;

/**
 * The first three projects are stacked one per row (image side alternates).
 * Any projects after that sit in a grid: three per row on desktop,
 * stacked one per row on mobile.
 */
export default function ProjectList({ projects }) {
  const rows = projects.slice(0, ROW_COUNT);
  const rest = projects.slice(ROW_COUNT);

  return (
    <>
      <div className="projects__list">
        {rows.map((project, i) => (
          <ProjectRow key={project.id} project={project} flip={i % 2 === 1} />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="projects__grid">
          {rest.map((project) => (
            <ProjectRow key={project.id} project={project} variant="card" />
          ))}
        </div>
      )}
    </>
  );
}
