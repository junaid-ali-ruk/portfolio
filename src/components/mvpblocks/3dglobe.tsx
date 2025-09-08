'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PortfolioHero() {
  return (
    <section
      id='home'
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#0a0613] pt-24 pb-10 font-light text-white antialiased sm:pt-28 md:pt-32 lg:pt-20"
      style={{
        background: 'linear-gradient(135deg, #0a0613 0%, #150d27 100%)',
      }}
    >
      {/* gradient accents */}
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

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          <span className="mb-4 sm:mb-6 inline-block rounded-full border border-[#9b87f5]/30 px-3 py-1 text-[10px] sm:text-xs text-[#9b87f5] uppercase tracking-wider">
            FULL-STACK DEVELOPER • MERN / NEXT.JS
          </span>

          <h1 className="mx-auto mb-4 sm:mb-6 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
            Hi, I'm <span className="text-[#9b87f5]">Junaid</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> I build modern web apps</span>
          </h1>

          <p className="mx-auto mb-8 sm:mb-10 max-w-2xl text-base sm:text-lg md:text-xl text-white/60 leading-relaxed px-4 sm:px-0">
            Passionate about crafting scalable, secure, and user-friendly
            digital products. I love working with Next.js, MERN stack, and
            creating smooth user experiences with clean code.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
            <Link
              prefetch={false}
              href="#projects"
              className="relative w-full sm:w-auto overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-6 sm:px-8 py-3 sm:py-2.5 text-white shadow-lg transition-all duration-300 hover:border-[#9b87f5]/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] min-h-[48px] flex items-center justify-center text-sm sm:text-base"
            >
              View My Work
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="#contact"
                prefetch={false}
                className="inline-flex w-full sm:w-auto items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-700 px-6 sm:px-8 py-3 sm:py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg min-h-[48px] text-sm sm:text-base"
              >
                <span>Let's connect</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
