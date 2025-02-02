import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aneesa Haroon</h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Senior Web Application Developer
          </h2>
          <p className="text-lg mb-8">
            I'm a web application developer with over 4 years of experience in building scalable
            applications using microservices architecture and distributed computing.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:aneesa.mharoon@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/aneesaharoon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="space-y-2">
                <li>• Golang</li>
                <li>• TypeScript</li>
                <li>• Node.js</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Architecture</h3>
              <ul className="space-y-2">
                <li>• Microservices</li>
                <li>• Distributed Systems</li>
                <li>• REST APIs</li>
              </ul>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
              <ul className="space-y-2">
                <li>• Git</li>
                <li>• Docker</li>
                <li>• Cloud Platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Senior Web Application Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                4+ years of experience in developing scalable web applications
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Designed and implemented microservices architectures</li>
                <li>• Built distributed systems for high-scale applications</li>
                <li>• Developed RESTful APIs and backend services</li>
                <li>• Worked with modern JavaScript/TypeScript frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Aneesa Haroon. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="mailto:aneesa.mharoon@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Email
            </a>
            <a
              href="https://github.com/aneesaharoon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
