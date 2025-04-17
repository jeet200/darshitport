"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Download, ChevronRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleScroll = () => {
    const sections = ["home", "about", "skills", "projects", "contact"]
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        const offsetTop = element.offsetTop
        const height = element.offsetHeight

        if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + height - 100) {
          setActiveSection(section)
        }
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 0, 255, 0.4) 0%, transparent 60%)`,
        }}
      />

      <div className="fixed top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-purple-900/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <span className="text-purple-400">D</span>arshit
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={cn(
                  "capitalize text-sm tracking-wider transition-colors hover:text-purple-400",
                  activeSection === item ? "text-purple-400" : "text-gray-400",
                )}
              >
                {item}
              </a>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/20"
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/darshit_cv.pdf" // Ensure the file is in the 'public' directory
                link.download = "darshit_cv.pdf"
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative pt-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Darshit Timania
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mb-6">Computer Engineering Student</h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Seeking to apply my extensive academic background and coding experience in an organization with an
              innovative vision.
            </p>

            <div className="flex space-x-4">
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                asChild
              >
                <a href="#contact">
                  Contact Me <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/20" asChild>
                <a href="#projects">My Projects</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg shadow-purple-500/20">
              <Image src="/profile.jpg" alt="Darshit Timania" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-purple-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Professional Summary</h3>
              <p className="text-gray-300 mb-6">
                I am a computer engineering student seeking to apply my extensive academic background and coding
                experience in an organization with an innovative vision. I am looking forward to contributing to a
                dynamic team and supporting research and development efforts.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-purple-400">Education</h3>
              <div className="mb-6">
                <h4 className="text-xl font-semibold">Bachelor of Computer Engineering | 2022-2026</h4>
                <p className="text-gray-400">GUJARAT TECHNOLOGICAL UNIVERSITY, GMIT</p>
                <p className="text-gray-300 mt-2">Relevant Coursework: HTML, CSS, JAVA, BASIC PYTHON, C, C++</p>
              </div>

              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  <span>English</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  <span>Gujarati</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  <span>Hindi</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Research Based Project Experience</h3>

              <div className="relative pl-8 pb-8 border-l border-purple-500/30">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-purple-500 transform -translate-x-1/2"></div>
                <h4 className="text-xl font-semibold">Exam Secure System | 2025</h4>
                <p className="text-gray-400 mb-4">Computer Engineering Department, GMIT</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Collaborated with a research team to study the problem which was assigned to us.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Conducted experiments using Arduino UNO, Node MCU, Arduino Mega etc.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Analyzed and interpreted data, Displayed the prototype at Techmanjari at GMIT.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Technical Skills</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Programming Languages</span>
                    <span className="text-purple-400">C++, Java, Python, C</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    ></motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Web Development</span>
                    <span className="text-purple-400">HTML, CSS</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    ></motion.div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Software Tools</span>
                    <span className="text-purple-400">VS Code, Eclipse, Git/GitHub, Arduino IDE</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Soft Skills</h3>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "Problem Solving", icon: "🧩", value: 90 },
                  { name: "Team Collaboration", icon: "👥", value: 85 },
                  { name: "Adaptability", icon: "🔄", value: 80 },
                  { name: "Communication", icon: "💬", value: 85 },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm text-center"
                  >
                    <div className="text-4xl mb-4">{skill.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Exam Secure System</h3>
                <p className="text-gray-300 text-sm mb-4">2025</p>
                <p className="text-gray-300 mb-4">
                  A comprehensive system designed to prevent cheating during exams using biometric authentication,
                  real-time proctoring, and secure distribution of exam materials.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-900/30 rounded-full text-xs text-purple-300">Arduino</span>
                  <span className="px-3 py-1 bg-purple-900/30 rounded-full text-xs text-purple-300">Node MCU</span>
                  <span className="px-3 py-1 bg-purple-900/30 rounded-full text-xs text-purple-300">IoT</span>
                  <span className="px-3 py-1 bg-purple-900/30 rounded-full text-xs text-purple-300">Security</span>
                </div>
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/20 w-full">
                  View Details
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/20 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-gray-300 text-sm mb-4">2025</p>
                <p className="text-gray-300 mb-4">
                  A futuristic portfolio website showcasing my skills, projects, and experience. Built with Next.js and
                  featuring modern animations and a unique design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-900/30 rounded-full text-xs text-purple-300">Next.js</span>
                  <span className="px-3 py-1 bg-purple-900/30 rounded-full text-xs text-purple-300">React</span>
                  <span className="px-3 py-1 bg-purple-900/30 rounded-full text-xs text-purple-300">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-purple-900/30 rounded-full text-xs text-purple-300">Framer Motion</span>
                </div>
                <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/20 w-full">
                  View Details
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-900/30 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <a
                      href="mailto:timaniadarsiht07@gmail.com"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      timaniadarsiht07@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-900/30 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-400"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <a href="tel:+918849483433" className="text-gray-300 hover:text-purple-400 transition-colors">
                      +91 8849483433
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-900/30 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-400"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Location</h4>
                    <p className="text-gray-300">Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-purple-900/30 p-3 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-purple-900/30 p-3 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Send Me a Message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-purple-900/10 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="Darshit Timania"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-purple-900/10 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      placeholder="darshit@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-purple-900/10 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-purple-900/10 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Darshit Timania. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
