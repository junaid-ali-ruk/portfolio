'use client';

import { motion } from 'framer-motion';
import { Palette, Rocket, Monitor } from 'lucide-react';

export default function ProjectsHero() {
  return (
    <section
      id='projects'
      className="relative w-full overflow-hidden bg-[#0a0613] py-16 sm:py-20 md:py-24 font-light text-white antialiased min-h-screen flex items-center"
      style={{
        background: 'linear-gradient(135deg, #0a0613 0%, #150d27 100%)',
      }}
    >
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          <span className="mb-4 sm:mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-[10px] sm:text-xs text-[#9b87f5] uppercase tracking-wider">
            PORTFOLIO • FEATURED WORK
          </span>
          <h1 className="mx-auto mb-4 sm:mb-6 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
            Crafting <span className="text-[#9b87f5]">digital</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> experiences that matter</span>
          </h1>
          <p className="mx-auto mb-8 sm:mb-10 max-w-2xl text-base sm:text-lg md:text-xl text-white/60 leading-relaxed px-4 sm:px-0">
            Explore my collection of web applications, from full-stack solutions
            to innovative frontend experiences. Each project represents a unique
            challenge and creative solution.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0 max-w-2xl mx-auto">
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 text-white/80 bg-white/5 sm:bg-transparent rounded-xl p-4 sm:p-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#9b87f5]/20 to-[#9b87f5]/10 border border-[#9b87f5]/30 flex-shrink-0">
                <Palette className="h-6 w-6 text-[#9b87f5]" />
              </div>
              <span className="text-sm font-medium text-center sm:text-left">Creative Design</span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 text-white/80 bg-white/5 sm:bg-transparent rounded-xl p-4 sm:p-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-500/20 to-rose-700/10 border border-rose-500/30 flex-shrink-0">
                <Rocket className="h-6 w-6 text-rose-500" />
              </div>
              <span className="text-sm font-medium text-center sm:text-left">Performance</span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3 text-white/80 bg-white/5 sm:bg-transparent rounded-xl p-4 sm:p-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30 flex-shrink-0">
                <Monitor className="h-6 w-6 text-green-500" />
              </div>
              <span className="text-sm font-medium text-center sm:text-left">Responsive</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
