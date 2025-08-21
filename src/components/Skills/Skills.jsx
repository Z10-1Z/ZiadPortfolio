// src/components/Skills.jsx
export default function Skills() {
    const skills = [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "React", 
      "Next.js", 
      "Tailwind CSS", 
      "Git & GitHub", 
      "Responsive Design"
    ];
  
    return (
      <section id="skills" className="bg-gray-50 text-gray-800 py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
              >
                <p className="font-semibold text-lg text-indigo-600">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  