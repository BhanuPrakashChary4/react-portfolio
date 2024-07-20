import { projects } from './projects';

export function Cards() {
  return (
    <>
      <div id="cards" className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-950 shadow-md rounded-lg overflow-hidden">
            <div className="h-48 w-full overflow-hidden">
              <img className="w-full h-full object-fill" src={project.imageUrl} alt={project.title} />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-200">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block bg-yellow-400 text-white px-4 py-2 rounded-md text-sm font-medium">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

