import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FiTerminal, FiChevronRight } from "react-icons/fi";

const THEME = {
    textAccent: 'text-cyan-500',
    bgAccent: 'bg-cyan-500',
    hoverAccent: 'hover:text-cyan-400',
    btnHover: 'hover:bg-cyan-400',
    bgNav: 'bg-[#02040a]/90'
};

const profile = {
    name: "GHUFRAN",
    lastName: "ALI",
    role: "AI ARCHITECT",
    // Ensure this path is correct in your public folder
    avatar: "/images/ghufran.jpg" 
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const links = [
    { name: "Systems", href: "#services" },
    { name: "Nodes", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full ${THEME.bgNav} backdrop-blur-2xl border-b border-white/5 z-[100]`}>
      {/* Scroll Progress Bar */}
      <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-500 origin-left z-[111]" style={{ scaleX }} />

      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Profile Branding */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-[110]"
        >
            <a href="#" className="flex items-center gap-3 group">
                <div className="relative">
                    <motion.img 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        src={profile.avatar} 
                        alt="Ghufran Ali" 
                        className="w-10 h-10 rounded-full object-cover border border-cyan-500/30 group-hover:border-cyan-500 transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#02040a] rounded-full animate-pulse" />
                </div>
                <div className="flex flex-col">
                    <span className="font-black text-lg tracking-tighter text-white leading-none uppercase">
                        {profile.name}<span className={THEME.textAccent}>{profile.lastName}</span>
                    </span>
                    <div className="flex items-center gap-1">
                        <span className="text-[7px] font-black text-slate-500 uppercase tracking-[0.4em]">{profile.role}</span>
                    </div>
                </div>
            </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center bg-white/5 px-6 py-2 rounded-full border border-white/5 gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`relative text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 transition-all ${THEME.hoverAccent} group`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* ADVANCED ACTION BUTTON */}
        <div className="hidden md:flex items-center">
            <motion.a
                href="#contact"
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="relative group flex items-center justify-center"
            >
                {/* Outer Glow effect on hover */}
                <motion.div 
                    variants={{ hover: { opacity: 1, scale: 1.2 } }}
                    initial={{ opacity: 0, scale: 1 }}
                    className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full transition-all duration-500"
                />

                {/* Main Button Body */}
                <motion.div
                    variants={{
                        initial: { x: 0 },
                        tap: { scale: 0.95 }
                    }}
                    className={`
                        relative flex items-center gap-3 px-6 py-2.5 
                        text-[10px] font-black uppercase tracking-[0.2em] 
                        text-black rounded-full overflow-hidden
                        ${THEME.bgAccent} shadow-[0_0_20px_rgba(6,182,212,0.4)]
                    `}
                >
                    {/* Shimmer Streak Animation */}
                    <motion.div 
                        animate={{ x: ['-150%', '150%'] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[30deg]"
                    />

                    <FiTerminal className="text-sm relative z-10 group-hover:rotate-12 transition-transform" />
                    <span className="relative z-10">Let's Chat</span>
                </motion.div>
            </motion.a>
        </div>
        
        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-white z-[110] p-2"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex flex-col gap-1.5 items-end">
                <motion.div animate={isOpen ? { rotate: 45, y: 7, width: 24 } : { rotate: 0, y: 0, width: 24 }} className="h-0.5 bg-white rounded-full" />
                <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="h-0.5 bg-cyan-500 w-4 rounded-full" />
                <motion.div animate={isOpen ? { rotate: -45, y: -7, width: 24 } : { rotate: 0, y: 0, width: 18 }} className="h-0.5 bg-white rounded-full" />
            </div>
        </button>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[104] md:hidden"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-[#02040a] border-l border-white/5 p-10 flex flex-col z-[105] md:hidden"
                    >
                        <div className="mt-20 space-y-8">
                            <p className="text-[10px] font-bold text-slate-500 tracking-[0.5em] uppercase border-b border-white/5 pb-4">Menu_System</p>
                            {links.map((link, i) => (
                                <motion.a 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link.name} 
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between text-2xl uppercase tracking-tighter font-black text-white hover:text-cyan-500 transition-colors group"
                                >
                                    {link.name}
                                    <FiChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                                </motion.a>
                            ))}
                        </div>
                        
                        <div className="mt-auto">
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="flex justify-center items-center py-4 text-xs font-black uppercase tracking-widest text-black bg-cyan-500 rounded-xl w-full shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                            >
                                Start Collaboration
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
      </div>
    </header>
  );
}