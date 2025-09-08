'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Earth from '@/components/ui/globe';
import { SparklesCore } from '@/components/ui/sparkles';
import { Label } from '@/components/ui/label';
import { Check, Loader2 } from 'lucide-react';

export default function ContactUs1() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) throw new Error("Failed to send");
    setIsSubmitted(true);
    setName(""); setEmail(""); setMessage("");
  } catch (err) {
    console.error(err);
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <section id='contact' className="bg-[#0a0613] relative w-full overflow-hidden py-12 sm:py-16 md:py-24">
      <div
        className="absolute top-0 left-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] rounded-full opacity-20 blur-[80px] sm:blur-[100px] md:blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, #e60a64, transparent 70%)`,
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] rounded-full opacity-10 blur-[60px] sm:blur-[80px] md:blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, #e60a64, transparent 70%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-white/10 mx-auto max-w-5xl overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[28px] border shadow-xl backdrop-blur-sm bg-black/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative p-4 sm:p-6 md:p-8 lg:p-10" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex w-full gap-2 mb-6 sm:mb-8"
              >
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  Contact
                </h2>
                <span className="text-rose-500 relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight italic">
                  Us
                </span>
                <SparklesCore
                  id="tsparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={300}
                  className="absolute inset-0 top-0 h-20 sm:h-24 w-full"
                  particleColor="#e60a64"
                />
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="name" className="text-white text-sm">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                      className="min-h-[44px] bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label htmlFor="email" className="text-white text-sm">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="min-h-[44px] bg-white/5 border-white/20 text-white placeholder:text-white/40"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="message" className="text-white text-sm">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    required
                    className="h-32 sm:h-40 resize-none bg-white/5 border-white/20 text-white placeholder:text-white/40"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[48px] bg-gradient-to-b from-rose-500 to-rose-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] hover:from-rose-600 hover:to-rose-800"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center justify-center">
                        <Check className="mr-2 h-4 w-4" />
                        Message Sent!
                      </span>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative hidden lg:flex items-center justify-center overflow-hidden p-8"
            >
              <div className="flex flex-col items-center justify-center overflow-hidden">
                <article className="relative mx-auto h-[400px] max-w-[450px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#e60a64] to-[#e60a64]/5 p-8 text-3xl lg:text-4xl tracking-tight text-white leading-tight">
                  <span className="relative z-20">Presenting you with the best UI possible.</span>
                  <div className="absolute -right-20 -bottom-20 z-10 mx-auto flex h-full w-full max-w-[400px] items-center justify-center transition-all duration-700 hover:scale-105">
                    <Earth
                      scale={0.9}
                      baseColor={[1, 0, 0.3]}
                      markerColor={[0, 0, 0]}
                      glowColor={[1, 0.3, 0.4]}
                    />
                  </div>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
