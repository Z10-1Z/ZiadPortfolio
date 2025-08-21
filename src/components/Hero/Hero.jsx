export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-indigo-500">Ziad Mohamed</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-6">
          Frontend Developer | React Enthusiast
        </p>
        <a
          href="#projects"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full text-lg transition duration-300"
        >
          View My Work
        </a>
      </section>
    );
  }
  