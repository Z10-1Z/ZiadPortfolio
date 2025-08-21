// src/components/Projects.jsx
export default function Projects() {
    const projects = [
      {
        title: "ToDo List App",
        description: "A simple task management app built with React to add, delete, and complete tasks.",
        link: "#",
      },
      {
        title: "Landing Page",
        description: "A responsive landing page built with React and Tailwind CSS.",
        link: "#",
      },
      {
        title: "Portfolio Website",
        description: "Personal portfolio website to showcase my work and skills.",
        link: "#",
      },
    ];
  
    return (
      <section id="projects" className="bg-white text-gray-800 py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="text-sm font-medium text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  