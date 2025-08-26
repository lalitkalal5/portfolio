import React from 'react';

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">LALIT KALAL</h1>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white pt-20">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m <span className="text-yellow-300">Lalit</span></h1>
        <p className="text-xl mb-6"> Android dev | Flutter | MERN Stack Developer </p>
        <div className="flex gap-4">
          <a href="https://github.com/lalitkalal5/" className="px-6 py-3 bg-grey-800 text-black rounded-xl shadow-lg">Github</a>
          <a href="https://www.linkedin.com/in/lalit-kalal-481662198/" className="px-6 py-3 bg-grey-800 text-black rounded-xl shadow-lg">LinkedIn</a>
        </div>
        <div className="flex gap-6 margin-2">
          <a href="#projects" className="px-6 py-3 bg-yellow-400 text-black rounded-xl shadow-lg">View Projects</a>
          <a href="#contact" className="px-6 py-3 bg-white text-black rounded-xl shadow-lg">Contact Me</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="text-lg text-gray-700 space-y-6 text-center">
    <p>I am an Android App & Web developer with a foundation in the Flutter & MERN stack.</p>
    <hr className="border-gray-300" />
    <p>My expertise extends to real-time communication technologies such as WebRTC and Socket.IO, 
       and I am familiar with Django.</p>
    <hr className="border-gray-300" />
    <p>Currently, I am diving into the world of Android app development.</p>
    <hr className="border-gray-300" />
    <p>Enhancing skills in API integration as Retrofit, UI design, and cloud storage as Firebase solutions.</p>
  </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-100 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">Technologies & Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-6">
          {[ 'React', 'Node.js','Java-Script','MongoDB','Flutter','Retrofit','Firebase','socket.io'].map(skill => (
            <div key={skill} className="p-4 bg-white rounded-xl shadow text-center font-medium hover:scale-105 transition-transform">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
            <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
  <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        name: "Annochat",
        desc: "A real-time chat app with WebRTC & Socket.IO.",
        link: "https://annochat.onrender.com/",
        image: "/images/annochat.png",
        git:"https://github.com/lalitkalal5/annochat"
      },
      {
        name: "Twitter-Clone",
        desc: "A MERN social media clone with posts, likes & follows.",
        link: "https://twitterclone-7pir.vercel.app/",
        image: "/images/twitter-clone.png",
        git:"https://github.com/lalitkalal5/twitterclone"
      },
      {
        name: "News-Android App",
        desc: "An Android app using Kotlin, Retrofit & Firebase.",
        link: "https://github.com/lalitkalal5/NewsApp",
        image: "/images/Newsapp.png",
        git:"https://github.com/lalitkalal5/NewsApp"
      }
    ].map((project) => (
      <div 
        key={project.name} 
        className="relative rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-opacity" />
        
        {/* Content */}
        <div className="relative p-6 text-white flex flex-col justify-end h-64">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-sm text-gray-200 mb-3">{project.desc}</p>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-4 py-2 bg-blue-500 rounded-lg text-sm font-medium hover:bg-blue-600"
          >
            Visit →
          </a>

           {/* GitHub Button */}
            <a
              href={project.git}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 flex items-center justify-center"
            >
              {/* GitHub SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.486 2 12.021c0 4.42 2.865 8.167 6.839 9.504.5.092.682-.217.682-.482 
                  0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 
                  1.004.07 1.531 1.033 1.531 1.033.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 
                  0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 
                  9.564 0 0 1 12 6.844c.85.004 1.705.115 2.503.338 1.91-1.296 2.748-1.026 2.748-1.026.546 
                  1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 
                  0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 
                  0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.481A10.025 
                  10.025 0 0 0 22 12.021C22 6.486 17.523 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

        </div>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form className="max-w-2xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded-xl text-black" />
          <input type="email" placeholder="Your Email" className="p-3 rounded-xl text-black" />
          <textarea placeholder="Your Message" className="p-3 rounded-xl text-black" rows="5"></textarea>
          <button type="submit" className="px-6 py-3 bg-yellow-400 text-black rounded-xl shadow-lg">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-6">
        © {new Date().getFullYear()} Lalit Kalal 
      </footer>
    </div>
  );
};

export default App;
