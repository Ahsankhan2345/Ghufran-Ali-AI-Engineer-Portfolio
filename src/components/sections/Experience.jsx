import { motion } from "framer-motion";
import { FiCpu, FiDatabase, FiGlobe, FiTrendingUp, FiCheckCircle } from 'react-icons/fi'; 

const experienceData = [
    {
        role: "AI Engineer",
        company: "DeepVision.ai",
        location: "Lahore, PK",
        period: "Oct '25 - Present",
        details: [
            "Architecting autonomous multi-agent systems using LangGraph and LangChain.",
            "Developing Enterprise RAG pipelines with LlamaIndex and Vector DBs.",
            "Implementing self-healing n8n automation for internal API orchestration."
        ],
        tech: ["LangGraph", "LlamaIndex", "n8n", "Python"]
    },
    {
        role: "R&D Specialist",
        company: "Academic Publication",
        location: "International",
        period: "2024",
        details: [
            "Authored research on AI-driven nodes and decentralized network scalability.",
            "Analyzed modern network protocols for digital economy optimization."
        ],
        tech: ["Data Analysis", "Network Security"]
    },
];

const valuePropositions = [
    { icon: FiCpu, title: "Agentic Specialist", desc: "Building recursive loops for autonomous task handling." },
    { icon: FiDatabase, title: "Vector Architect", desc: "Low-latency RAG systems with optimized retrieval." },
    { icon: FiTrendingUp, title: "AI Automation", desc: "Transforming manual logic into self-operating workflows." },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-[#02040a] text-slate-100 font-sans selection:bg-cyan-500/30">
            <div className="container mx-auto px-6">
                
                {/* Section Title */}
                <div className="mb-16 max-w-3xl">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <span className="h-[2px] w-8 bg-cyan-500"></span>
                        <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest">Experience_Log</span>
                    </motion.div>
                    
                    <motion.h2 
                        className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight"
                    >
                        Engineering <span className="text-cyan-500">Autonomous Systems.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* LEFT: Experience Timeline */}
                    <div className="lg:col-span-7 space-y-12">
                        {experienceData.map((exp, i) => (
                            <div key={i} className="relative pl-8 border-l border-slate-800">
                                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                                
                                <div className="flex flex-wrap items-baseline justify-between mb-2 gap-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-wider bg-slate-900 px-3 py-1 rounded border border-slate-800">
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-4 text-sm font-medium">
                                    <span className="text-cyan-400">{exp.company}</span>
                                    <span className="text-slate-700">•</span>
                                    <span className="text-slate-400 flex items-center gap-1"><FiGlobe size={12}/> {exp.location}</span>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx} className="text-slate-300 text-sm md:text-base leading-snug flex items-start gap-3">
                                            <FiCheckCircle className="mt-1 text-cyan-500 flex-shrink-0 text-xs" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t, idx) => (
                                        <span key={idx} className="text-[10px] font-bold py-1 px-3 bg-cyan-500/5 text-cyan-400 border border-cyan-500/20 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Why Ghufran? */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
                            <h2 className="text-xl font-bold text-white mb-8 tracking-tight">Why <span className="text-cyan-500">Ghufran?</span></h2>

                            <div className="space-y-8">
                                {valuePropositions.map((prop, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                            <prop.icon size={18} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-sm tracking-tight">{prop.title}</h3>
                                            <p className="text-slate-400 text-xs leading-normal mt-1 font-medium">{prop.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Quick View */}
                        <div className="p-8 border border-slate-800 rounded-2xl bg-gradient-to-br from-slate-900/50 to-transparent">
                            <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-4">Education</p>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-white font-bold text-sm">BS Computer Science</p>
                                    <p className="text-slate-500 text-xs font-medium">The Superior University • 2022-26</p>
                                </div>
                                <div className="pt-4 border-t border-slate-800">
                                    <p className="text-white font-bold text-sm">R&D Publication</p>
                                    <p className="text-slate-500 text-xs font-medium leading-tight mt-1 italic">Exploring the Digital Economy Using Modern Networks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}