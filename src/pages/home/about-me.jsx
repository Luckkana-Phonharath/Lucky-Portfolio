import { motion } from 'framer-motion';
import { ArrowOutwardIcon } from '../../components/icons';
import { Button } from '../../components/button';
import { AboutMeCard } from './home-components/about-me-card';

export function AboutMe() {
  return (
    <section className="relative overflow-hidden px-10 py-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 max-w-xl pl-5"
        >
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-blue-500!">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white">
            Building software that solves real problems.
          </h2>

          <p className="mt-8 max-w-md text-lg text-slate-300">
            I enjoy creating software that solves real problems, simplifies workflows, and improves everyday experiences.
          </p>

          <div className="text-blue-400">
            <Button
              variant="plain"
              icon={ArrowOutwardIcon}
              className="-ml-4"
              size="md"
            >
              Learn more about me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <AboutMeCard />
        </motion.div>
      </div>
    </section>
  );
}