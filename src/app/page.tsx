"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header/Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20 md:py-32"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Aneesa Haroon
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8"
          >
            Senior Software Engineer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg mb-10 leading-relaxed max-w-2xl"
          >
            A passionate software engineer with expertise in building scalable applications 
            using microservices architecture and distributed computing. Specialized in 
            Golang, TypeScript, and Node.js.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6"
          >
            <a
              href="mailto:aneesa.mharoon@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/aneesaharoon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              GitHub Profile
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 dark:bg-gray-800/50 py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Technical Expertise
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                title: "Languages",
                skills: ["Golang", "TypeScript", "Node.js"]
              },
              {
                title: "Architecture",
                skills: ["Microservices", "Distributed Systems", "REST APIs"]
              },
              {
                title: "Tools & Platforms",
                skills: ["Git", "Docker", "Cloud Platforms"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Freelance Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">2024 - Present</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Upwork • Remote
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Developed and maintained web applications for international clients</li>
                <li>• Specialized in building scalable backend services using Go and Node.js</li>
                <li>• Implemented microservices architectures and distributed systems</li>
                <li>• Maintained high client satisfaction with excellent communication</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">Jan 2024 - Present</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Bellbytes • Remote
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Lead developer in user authentication and payments team</li>
                <li>• Implemented secure authentication systems and payment integrations</li>
                <li>• Developed scalable microservices architecture</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">Jun 2021 - Dec 2023</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Elucidata • Remote
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Worked on AI platform for biomedical data science teams</li>
                <li>• Core member of the data curation team</li>
                <li>• Built systems to process and manage large-scale biomedical datasets</li>
                <li>• Implemented distributed computing solutions for data processing</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Tutor</h3>
                <p className="text-gray-600 dark:text-gray-400">Jun 2017 - Jul 2019</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Triumphant Institute of Management and Education • Bangalore, India
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Taught Biology for grades 11 and 12</li>
                <li>• Prepared students for higher secondary examinations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Now third */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Master of Technology in Biotechnology</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Indian Institute of Technology, Madras
              </p>
              <p className="text-gray-600 dark:text-gray-400">2019 - 2021</p>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Technology in Biotechnology</h3>
              <p className="text-gray-600 dark:text-gray-400">
                National Institute of Technology, Calicut
              </p>
              <p className="text-gray-600 dark:text-gray-400">2013 - 2017</p>
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
