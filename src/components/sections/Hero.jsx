import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiTerminal, FiLayers, FiZap, FiCpu, FiDatabase, FiActivity, FiDownload } from 'react-icons/fi'; 
import { SiN8N } from 'react-icons/si'; 

const profile = {
    name: "Ghufran Ali", 
    tagline: "Building the next generation of Autonomous Agents & Intelligent Workflows.", 
    expertise: "AI ENGINEER | AGENTIC AI & LLM SPECIALIST", 
    techStack: [
        { name: "LangGraph", icon: FiLayers, color: "from-cyan-400 to-blue-500", shadow: "shadow-cyan-500/20" },
        { name: "RAG Pipelines", icon: FiDatabase, color: "from-emerald-400 to-teal-500", shadow: "shadow-emerald-500/20" },
        { name: "n8n Automation", icon: SiN8N, color: "from-orange-400 to-red-500", shadow: "shadow-orange-500/20" },
        { name: "Generative AI", icon: FiCpu, color: "from-indigo-400 to-purple-500", shadow: "shadow-indigo-500/20" }
    ],
    linkedin: "https://www.linkedin.com/in/ghufran-ali-a8236927b/", 
    github: "https://github.com/ghufranali-ai", // Update with your actual github
    email: "mailto:alig44355@gmail.com",
    resumeUrl: "/public/ghufran.pdf" // Path to your PDF in the public folder
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center bg-[#02040a] text-slate-100 relative overflow-hidden font-sans">
            
            {/* Cybernetic Background */}
            <div className="absolute inset-0 z-0 opacity-20" 
                 style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] z-0 animate-pulse" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-7 text-center lg:text-left pt-20 lg:pt-0">
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-cyan-300">{profile.expertise}</span>
                    </motion.div>
                    
                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85]">
                        <span className="block mb-2">HELLO, I'M</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                            {profile.name.toUpperCase()}
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mt-8 text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light">
                        {profile.tagline} I help businesses <span className="text-cyan-300 font-normal underline decoration-cyan-500/30">automate complexity</span> using Agentic Workflows and 
                        high-performance RAG Architectures.
                    </motion.p>
                    
                    <motion.div variants={itemVariants} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
                        {profile.techStack.map((tech, index) => ( 
                            <motion.div 
                                key={index}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={`relative group p-4 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden transition-all hover:border-slate-600 ${tech.shadow} hover:shadow-lg`}
                            >
                                <div className={`absolute -right-2 -bottom-2 opacity-10 group-hover:opacity-20 transition-opacity text-5xl text-white`}>
                                    <tech.icon />
                                </div>
                                <div className="relative z-10 flex flex-col gap-3">
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-slate-900 shadow-lg`}>
                                        <tech.icon size={20} />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold tracking-tight text-slate-300 uppercase">
                                        {tech.name}
                                    </span>
                                </div>
                                <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${tech.color}`} />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center gap-6">
                        {/* USER FRIENDLY CV BUTTON */}
                        <a 
                            href={profile.resumeUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative w-full sm:w-auto px-8 py-4 bg-cyan-500 text-black font-black rounded-lg overflow-hidden transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-cyan-400/60"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3 tracking-widest text-xs">
                                <FiDownload className="group-hover:animate-bounce" /> GET MY RESUME
                            </span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-20" />
                        </a>

                        <div className="flex gap-6">
                            {[ 
                                { icon: FiLinkedin, href: profile.linkedin }, 
                                { icon: FiGithub, href: profile.github }, 
                                { icon: FiMail, href: profile.email } 
                            ].map((soc, i) => (
                                <a key={soc.href} href={soc.href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                                    <soc.icon size={22} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Visual Section */}
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="lg:col-span-5 relative flex justify-center lg:justify-end">
                    <div className="relative w-72 h-96 md:w-[380px] md:h-[480px]">
                        <div className="absolute inset-0 border border-cyan-500/20 rounded-2xl transform rotate-3 z-0" />
                        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 z-10">
                            <img src="/images/ghufran.jpg" alt={profile.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent opacity-60" />
                        </div>
                        
                        {/* Status Badge */}
                        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -left-8 bg-[#0a0f1a]/90 backdrop-blur-xl p-5 rounded-2xl border border-white/5 shadow-2xl z-20 hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400"><FiActivity size={24} /></div>
                                    <div className="absolute top-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-4 border-[#0a0f1a] animate-ping" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 font-mono tracking-tighter">AI AGENT STATUS</p>
                                    <p className="text-sm font-bold text-white uppercase tracking-widest">System Online</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}