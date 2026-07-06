import { motion } from 'framer-motion';
import {
  UserIcon,
  StarIcon,
  ProjectIcon,
  LocationIcon,
} from '../../../components/icons';

const stats = [
  {
    icon: UserIcon,
    value: '4+',
    label: 'Years Building Software',
  },
  {
    icon: StarIcon,
    value: 'CS',
    label: 'Bachelor’s Degree',
  },
  {
    icon: ProjectIcon,
    value: '20+',
    label: 'Projects Built',
  },
  {
    icon: LocationIcon,
    value: 'Utah',
    label: 'Open to Remote Work',
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export function AboutMeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 8, rotateY: -8 }}
      whileInView={{ opacity: 1, rotateX: 0, rotateY: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="group relative w-full max-w-xl rounded-3xl border border-white/5 bg-slate-950/60 p-8 shadow-2xl shadow-blue-950/30 backdrop-blur-md"
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/30 via-transparent to-cyan-400/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

      <div className="relative grid grid-cols-2 overflow-hidden rounded-2xl">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-700/40" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-slate-700/40" />

        {stats.map(({ icon: Icon, value, label }, index) => (
          <motion.div
            key={label}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              ease: 'easeOut',
              delay: index * 0.1,
            }}
            whileHover={{ x: 4 }}
            className="relative flex items-center gap-5 p-6"
          >
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="flex size-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500"
            >
              <Icon className="size-7" />
            </motion.div>

            <div>
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="mt-1 text-sm text-slate-400">{label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}