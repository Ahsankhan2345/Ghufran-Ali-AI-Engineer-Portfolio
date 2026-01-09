import { motion } from "framer-motion";
import { FiArrowUpRight, FiZap, FiCpu, FiActivity, FiLayers, FiCheckCircle } from 'react-icons/fi';

const project = {
    title: "Autonomous Agent Swarms",
    service: "Multi-Agent Systems",
    metric: "95% Automation",
    strategy: "Orchestrated self-correcting agent loops via LangGraph for complex task decomposition.",
    result: "Reduced manual management by 90+ hours weekly.",
    tech: ["LangGraph", "Python", "GPT-4o"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1632&auto=format&fit=crop"
};

export default function AgentSwarmSection() {
    return (
        <section className="py-20 bg-[#02040a] text-slate-100 relative overflow-hidden font-sans selection:bg-cyan-500/30">
            
            {/* Top Border Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* LEFT SIDE: GRAPHICAL IMAGE BOX */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0c14] shadow-2xl">
                            {/* Scanning Line Animation */}
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                <motion.div 
                                    animate={{ translateY: ["-100%", "300%"] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    className="w-full h-32 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent"
                                />
                            </div>

                            <img 
                                src={project.image} 
                                alt="Agent Swarm" 
                                className="w-full h-[380px] object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            
                            {/* HUD Overlays */}
                            <div className="absolute bottom-4 left-4 right-4 z-30 flex justify-between items-end">
                                <div className="px-3 py-2 bg-black/80 backdrop-blur-md rounded-lg border border-white/5">
                                    <p className="text-[9px] font-bold text-slate-500 mb-1 tracking-widest">SYSTEM_ACTIVE</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                                        <span className="text-xs font-bold text-white tracking-tight">Swarm Node 01</span>
                                    </div>
                                </div>
                                <div className="px-3 py-2 bg-black/80 backdrop-blur-md rounded-lg border border-white/5 text-right">
                                    <p className="text-[9px] font-bold text-slate-500 mb-1 tracking-widest">LATENCY</p>
                                    <span className="text-xs font-bold text-cyan-400 tracking-tight">12ms</span>
                                </div>
                            </div>
                        </div>

                        {/* Ambient Glows */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-[60px] -z-10" />
                    </motion.div>

                    {/* RIGHT SIDE: CONTENT */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/5 border border-cyan-500/20 mb-6">
                            <FiLayers className="text-cyan-400 text-xs" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-400">Agentic Architecture</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white">
                            Orchestrating <span className="text-cyan-500">Neural Intelligence.</span>
                        </h2>

                        <p className="text-slate-300 text-base md:text-lg font-medium mb-8 leading-relaxed">
                            {project.strategy} This framework enables <span className="text-white font-bold">multi-agent coordination</span> to resolve complex workflows without human intervention.
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                                <FiZap className="text-cyan-400 mb-2" size={18} />
                                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Efficiency</h4>
                                <p className="text-xl font-bold text-white">{project.metric}</p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                                <FiActivity className="text-cyan-400 mb-2" size={18} />
                                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Operational Gain</h4>
                                <p className="text-xl font-bold text-white">90+ hrs/wk</p>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-10">
                            {project.tech.map((t, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#contact"
                            className="group flex items-center justify-center gap-3 w-full sm:w-max px-8 py-4 bg-cyan-500 text-black font-black text-xs tracking-[0.2em] uppercase rounded-xl hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/10"
                        >
                            View Architecture <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}