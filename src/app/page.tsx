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

const TypewriterText = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, staggerChildren: 0.1 }}
      className="font-mono"
    >
      {text}
    </motion.span>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-[#64ffda] font-mono">
      {/* Header/Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20 md:py-32"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div className="mb-4 text-[#8892b0]">
            <TypewriterText text="$ whoami" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-[#ccd6f6]"
          >
            {'>'} Aneesa Haroon
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-[#8892b0] mb-8"
          >
            {'>'} Senior Software Engineer
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg mb-10 leading-relaxed max-w-2xl text-[#8892b0]"
          >
            <TypewriterText text="$ cat about.txt" />
            <p className="mt-4">
              A passionate software engineer with expertise in building scalable applications 
              using microservices architecture and distributed computing. Specialized in 
              Golang, TypeScript, and Node.js.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6"
          >
            <a
              href="mailto:aneesa.mharoon@gmail.com"
              className="px-6 py-3 border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors rounded"
            >
              {'>'} ./contact-me.sh
            </a>
            <a
              href="https://github.com/aneesaharoon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#8892b0] text-[#8892b0] hover:bg-[#8892b0]/10 transition-colors rounded"
            >
              {'>'} git clone profile
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
        className="py-20 bg-[#112240]"
      >
        <div className="container mx-auto px-4">
          <motion.div className="mb-12 text-[#8892b0]">
            <TypewriterText text="$ ls ./skills/" />
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                title: "languages.txt",
                skills: ["Golang", "TypeScript", "Node.js"]
              },
              {
                title: "architecture.txt",
                skills: ["Microservices", "Distributed Systems", "REST APIs"]
              },
              {
                title: "tools.txt",
                skills: ["Git", "Docker", "Cloud Platforms"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-8 bg-[#0a192f] rounded-lg border border-[#233554] hover:border-[#64ffda] transition-colors"
              >
                <h3 className="text-xl font-semibold mb-6 text-[#ccd6f6]">{'>'} cat {category.title}</h3>
                <ul className="space-y-3 text-[#8892b0]">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#64ffda]">$</span> {skill}
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
          <div className="mb-8 text-[#8892b0]">
            <TypewriterText text="$ cat ./experience/timeline.md" />
          </div>
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
