// src/components/About.jsx
export default function About() {
    return (
      <section id="about" className="bg-white text-gray-800 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            I’m a passionate <span className="font-semibold text-indigo-600">Frontend Developer</span> 
            with <span className="font-semibold">2 years of experience</span> in building modern, responsive 
            web applications using <span className="text-indigo-600">React</span> and 
            <span className="text-indigo-600"> Next.js</span>.  
            I love creating clean, user-friendly interfaces and turning ideas into reality through code.
          </p>
        </div>
      </section>
    );
  }
  