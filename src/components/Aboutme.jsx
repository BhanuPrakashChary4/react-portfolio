export function Aboutme() {
  return (
    <>
      <section id="about-me" className="hero-section bg-gray-950 py-7">
        <div className="container mx-auto px-64">
          {/* <div className="flex flex-col md:flex-row items-center"> */}
          <div className="md:w-2/2">
            <h1 className="text-4xl font-bold text-gray-200">About me</h1>
            <p className="mt-4 text-lg text-gray-100">
              I am a passionate and dedicated <span className="text-blue-600">Full-Stack Developer</span> with expertise in creating dynamic and responsive web applications. With a strong background in <span className="text-orange-600">HTML5</span>, <span className="text-blue-600">CSS3</span>, <span className="text-yellow-500">JavaScript</span>, <span className="text-blue-500">React</span>, and <span className="text-green-500">Node.js</span>, I bring a comprehensive approach to web development.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              My journey in coding began with a deep curiosity and a drive to solve complex problems. Over the years, I have honed my skills in <span className="text-blue-400">Python</span>, <span className="text-red-600">Java</span>, and various other technologies and frameworks, including <span className="text-green-500">Django</span> and <span className="text-gray-500">Flask</span>. I am proficient in working with databases such as <span className="text-blue-700">MySQL</span> and <span className="text-blue-500">PostgreSQL</span>.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              As a strong advocate for continuous learning, I utilize tools like <span className="text-blue-500">VS Code</span> and <span className="text-orange-500">Jupyter Notebook</span> to streamline my workflow. My experience with <span className="text-red-600">Git</span> and <span className="text-black">GitHub</span> ensures efficient version control and collaboration.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Beyond coding, I am enthusiastic about <span className="text-blue-600">Docker</span> and <span className="text-black">Linux</span>, which play a crucial role in my development environment. I am committed to delivering high-quality solutions and continuously expanding my skill set to stay at the forefront of technology.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Lets connect and build something amazing together!
            </p>
          </div>
          {/* <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <img src="path-to-your-profile-image.jpg" alt="Profile Picture" className="rounded-full w-64 h-64" />
            </div> */}
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
