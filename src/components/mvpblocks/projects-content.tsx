'use client';

import { motion } from 'framer-motion';
import {
  ExternalLink,
  Code2,
  Globe,
  Smartphone,
  Database,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    category: 'Full-Stack',
    icon: Globe,
    demoUrl: '#',
    codeUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Material-UI'],
    category: 'Web App',
    icon: Zap,
    demoUrl: '#',
    codeUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Social Media Platform',
    description: 'Modern social networking platform with real-time messaging, content sharing, and advanced privacy controls.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth', 'Cloudinary'],
    category: 'Social',
    icon: Globe,
    demoUrl: '#',
    codeUrl: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Mobile Fitness Tracker',
    description: 'Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    category: 'Mobile',
    icon: Smartphone,
    demoUrl: '#',
    codeUrl: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization dashboard with interactive charts, custom reports, and data export capabilities.',
    technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB', 'Chart.js'],
    category: 'Dashboard',
    icon: Database,
    demoUrl: '#',
    codeUrl: '#',
    featured: true
  }
];

 

export default function ProjectsContent() {
  return (
    <div
      id='projects-content'
      className="relative w-full overflow-hidden text-white font-light antialiased"
      style={{
        background: 'linear-gradient(135deg, #0a0613 0%, #150d27 100%)',
      }}
    >
      {/* Background overlays */}
      <div
        className="absolute top-0 right-0 h-1/2 w-1/2"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)',
        }}
      />
      <div
        className="absolute top-0 left-0 h-1/2 w-1/2 -scale-x-100"
        style={{
          background:
            'radial-gradient(circle at 70% 30%, rgba(155, 135, 245, 0.15) 0%, rgba(13, 10, 25, 0) 60%)',
        }}
      />

      {/* Featured Projects Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Featured <span className="text-[#9b87f5]">Projects</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A selection of my most impactful and innovative projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-black/20 transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-rose-700 flex-shrink-0">
                    <project.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 text-white break-words">{project.title}</h3>
                    <span className="text-xs text-[#9b87f5] bg-[#9b87f5]/10 px-2 py-1 rounded-full inline-block">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-white/80 bg-white/10 px-2 py-1 rounded-md whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors min-h-[44px] py-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </Link>
                  <Link
                    href={project.codeUrl}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors min-h-[44px] py-2"
                  >
                    <Code2 className="h-4 w-4" />
                    <span>Source Code</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Call to Action Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
              Ready to <span className="text-[#9b87f5]">collaborate</span>?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              I'm always excited to work on new projects and bring innovative ideas to life.
              Let's discuss how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-700 px-6 sm:px-8 py-3 font-medium text-white transition-all duration-200 hover:shadow-lg hover:shadow-rose-500/25 min-h-[48px] text-sm sm:text-base"
              >
                <span>Get In Touch</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 sm:px-8 py-3 font-medium text-white transition-all duration-200 hover:bg-white/10 min-h-[48px] text-sm sm:text-base"
              >
                <span>Learn More About Me</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
