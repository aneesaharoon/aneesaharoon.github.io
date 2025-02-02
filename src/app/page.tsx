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
          <motion.div className="mb-4 text-[#8892b0] text-sm">
            <TypewriterText text="$ whoami" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#ccd6f6] leading-tight"
          >
            <span className="hidden sm:inline">{'>'} </span>
            <span>Aneesa Haroon</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-[#8892b0] mb-6"
          >
            <span className="hidden sm:inline">{'>'} </span>
            <span>Senior Software Engineer</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base mb-8 leading-relaxed max-w-2xl text-[#8892b0]"
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
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="mailto:aneesa.mharoon@gmail.com"
              className="px-4 py-2 sm:px-6 sm:py-3 border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors rounded text-sm sm:text-base text-center"
            >
              {'>'} ./contact-me.sh
            </a>
            <a
              href="https://github.com/aneesaharoon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-6 sm:py-3 border border-[#8892b0] text-[#8892b0] hover:bg-[#8892b0]/10 transition-colors rounded text-sm sm:text-base text-center"
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-[#8892b0]"
          >
            <TypewriterText text="$ neofetch --skills" />
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-[#0a192f] rounded-lg border border-[#233554] p-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Terminal Window */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex-1 font-mono"
              >
                <div className="mb-6 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[#64ffda]">{'>'} Languages</span>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="ml-4 mt-2"
                    >
                      {["Go", "TypeScript", "Node.js", "Python"].map((lang, idx) => (
                        <motion.div 
                          key={lang}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-2 text-[#8892b0]"
                        >
                          <span className="text-[#64ffda]">$</span> {lang}
                          <motion.div 
                            className="h-1 bg-[#64ffda]" 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(idx + 2) * 20}px` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <div>
                    <span className="text-[#64ffda]">{'>'} Cloud & DevOps</span>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="ml-4 mt-2"
                    >
                      {["AWS", "GCP", "Docker", "Kubernetes"].map((tool, idx) => (
                        <motion.div 
                          key={tool}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="flex items-center gap-2 text-[#8892b0]"
                        >
                          <span className="text-[#64ffda]">$</span> {tool}
                          <motion.div 
                            className="h-1 bg-[#64ffda]" 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(idx + 2) * 20}px` }}
                            transition={{ duration: 1, delay: 0.4 + idx * 0.1 }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <div>
                    <span className="text-[#64ffda]">{'>'} Databases</span>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="ml-4 mt-2"
                    >
                      {["PostgreSQL", "MongoDB", "Redis", "Firestore"].map((db, idx) => (
                        <motion.div 
                          key={db}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          className="flex items-center gap-2 text-[#8892b0]"
                        >
                          <span className="text-[#64ffda]">$</span> {db}
                          <motion.div 
                            className="h-1 bg-[#64ffda]" 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(idx + 2) * 20}px` }}
                            transition={{ duration: 1, delay: 0.6 + idx * 0.1 }}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* ASCII Art Section */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="hidden md:block w-64 text-[#64ffda] font-mono whitespace-pre"
              >
                {`
   ____  _    _ _ _     
  / ___|| | _(_) | |___ 
  \\___ \\| |/ / | | / __|
   ___) |   <| | | \\__ \\
  |____/|_|\\_\\_|_|_|___/
                `}
              </motion.div>
            </div>
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
            <div className="p-6 bg-[#112240] rounded-lg border border-[#233554] hover:border-[#64ffda] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#ccd6f6]">Freelance Software Engineer</h3>
                <p className="text-[#8892b0]">2024 - Present</p>
              </div>
              <p className="text-[#8892b0] mb-4">
                <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer"
                  className="hover:text-[#64ffda] transition-colors">
                  Upwork
                </a> • Remote
              </p>
              <ul className="space-y-2 text-[#8892b0]">
                <li>• Developed and maintained web applications for international clients</li>
                <li>• Specialized in building scalable backend services using Go and Node.js</li>
                <li>• Implemented microservices architectures and distributed systems</li>
                <li>• Maintained high client satisfaction with excellent communication</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#233554]">
                <p className="text-[#64ffda] text-sm mb-2">$ Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {["Go", "Node.js", "TypeScript", "Firebase", "AWS", "GCP"].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full border border-[#64ffda] text-[#64ffda]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#112240] rounded-lg border border-[#233554] hover:border-[#64ffda] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#ccd6f6]">Senior Software Engineer</h3>
                <p className="text-[#8892b0]">Jan 2024 - Present</p>
              </div>
              <p className="text-[#8892b0] mb-4">
                <a href="https://www.bellbytes.com" target="_blank" rel="noopener noreferrer"
                  className="hover:text-[#64ffda] transition-colors">
                  Bellbytes
                </a> • Remote
              </p>
              <ul className="space-y-2 text-[#8892b0]">
                <li>• Lead developer in user authentication and payments team</li>
                <li>• Implemented secure authentication systems and payment integrations</li>
                <li>• Developed scalable microservices architecture</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#233554]">
                <p className="text-[#64ffda] text-sm mb-2">$ Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {["Go", "PostgreSQL", "Firestore", "Redis", "Docker", "Kubernetes", "GCP", "Stripe" ].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full border border-[#64ffda] text-[#64ffda]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#112240] rounded-lg border border-[#233554] hover:border-[#64ffda] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#ccd6f6]">Software Engineer</h3>
                <p className="text-[#8892b0]">Jun 2021 - Dec 2023</p>
              </div>
              <p className="text-[#8892b0] mb-4">
                <a href="https://www.elucidata.io" target="_blank" rel="noopener noreferrer"
                  className="hover:text-[#64ffda] transition-colors">
                  Elucidata
                </a> • Remote
              </p>
              <ul className="space-y-2 text-[#8892b0]">
                <li>• Worked on AI platform for biomedical data science teams</li>
                <li>• Core member of the data curation team</li>
                <li>• Built systems to process and manage large-scale biomedical datasets</li>
                <li>• Implemented distributed computing solutions for data processing</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#233554]">
                <p className="text-[#64ffda] text-sm mb-2">$ Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "TypeScript", "Python", "Jupyter", "AWS S3", "Docker", "AWS"].map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full border border-[#64ffda] text-[#64ffda]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#112240] rounded-lg border border-[#233554] hover:border-[#64ffda] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#ccd6f6]">Tutor</h3>
                <p className="text-[#8892b0]">Jun 2017 - Jul 2019</p>
              </div>
              <p className="text-[#8892b0] mb-4">
                <a 
                  href="https://www.time4education.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#64ffda] transition-colors"
                >
                  Triumphant Institute of Management and Education
                </a> • Bangalore, India
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
