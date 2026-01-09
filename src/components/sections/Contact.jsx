import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';

const profile = {
    email: "alig44355@gmail.com", 
    phone: "+92 312 7572596",
    linkedin: "https://www.linkedin.com/in/ghufran-ali-a8236927b",
    location: "Lahore, Punjab, Pakistan"
};

const THEME = {
    textAccent: 'text-cyan-400', // Brighter cyan for clarity
    bgAccent: 'bg-cyan-500',
    hoverAccent: 'hover:bg-cyan-600',
};

const aiServices = [
    "Autonomous Multi-Agent Systems", 
    "Enterprise RAG Pipelines", 
    "LLM Fine-tuning & Integration", 
    "n8n Workflow Automation",
    "Custom AI Chatbots"
];

export default function Contact() {
    return (
        /* Use a clean sans-serif stack with neutral tracking for readability */
        <section id="contact" className="py-24 bg-[#02040a] text-slate-100 font-sans selection:bg-cyan-500/30">
            <div className="container mx-auto px-6">
                
                {/* Header Section */}
                <div className="mb-20 text-center max-w-4xl mx-auto">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
                    >
                        Connect_For_Intelligence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        /* font-extrabold and tracking-tight makes headers pop */
                        className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 tracking-tight"
                    >
                        Let's Automate Your <span className={THEME.textAccent}>Future.</span>
                    </motion.h2>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Ready to integrate Agentic AI into your business? Let’s discuss building self-operating systems.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* LEFT: Project Inquiry Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 p-[1px] bg-gradient-to-br from-cyan-500/30 to-transparent rounded-[2.5rem]"
                    >
                        <div className="bg-[#0a0c14] p-8 md:p-12 rounded-[2.4rem]">
                            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
                                <span className="w-2 h-10 bg-cyan-500 rounded-full"></span>
                                Start a Conversation
                            </h3>
                            
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">Full Name</label>
                                        <input className="w-full p-4 bg-white/5 border border-slate-800 rounded-2xl focus:outline-none focus:border-cyan-500/50 transition-all text-white font-semibold" placeholder="Ghufran Ali" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">Work Email</label>
                                        <input type="email" className="w-full p-4 bg-white/5 border border-slate-800 rounded-2xl focus:outline-none focus:border-cyan-500/50 transition-all text-white font-semibold" placeholder="name@company.com" />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">AI Service Needed</label>
                                    <select className="w-full p-4 bg-[#0a0c14] border border-slate-800 rounded-2xl focus:outline-none focus:border-cyan-500/50 text-slate-200 font-semibold">
                                        <option>Select Solution</option>
                                        {aiServices.map((s, i) => <option key={i}>{s}</option>)}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase text-slate-400 tracking-widest ml-1">How can I help?</label>
                                    <textarea rows="4" className="w-full p-4 bg-white/5 border border-slate-800 rounded-2xl focus:outline-none focus:border-cyan-500/50 transition-all text-white font-semibold" placeholder="Describe your technical requirements..."></textarea>
                                </div>

                                <button className="w-full py-5 bg-cyan-500 hover:bg-cyan-600 text-black font-black uppercase tracking-[0.2em] rounded-2xl transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-cyan-500/10">
                                    Send Inquiry <FiSend className="text-xl" />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* RIGHT: Direct Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="p-10 bg-slate-900/40 border border-slate-800 rounded-[2.5rem] backdrop-blur-xl">
                            <h3 className="text-3xl font-extrabold text-white mb-10 italic">Direct <span className="text-cyan-400">Contact</span></h3>
                            
                            <div className="space-y-10">
                                {/* Phone Number Added Here */}
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex-shrink-0 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 border border-cyan-500/20">
                                        <FiPhone size={24} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Phone / WhatsApp</p>
                                        <a href={`https://wa.me/${profile.phone.replace(/\s+/g, '')}`} className="text-xl md:text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
                                            {profile.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex-shrink-0 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 border border-cyan-500/20">
                                        <FiMail size={24} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Email</p>
                                        <a href={`mailto:${profile.email}`} className="text-xl md:text-2xl font-bold text-white hover:text-cyan-400 break-words transition-colors">
                                            {profile.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex-shrink-0 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 border border-cyan-500/20">
                                        <FiLinkedin size={24} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">LinkedIn</p>
                                        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-xl md:text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
                                            Ghufran Ali
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Availability Status */}
                        <div className="p-8 bg-cyan-500/5 border-2 border-slate-800 rounded-[2.5rem] flex items-center gap-6">
                            <div className="relative flex-shrink-0">
                                <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute"></div>
                                <div className="w-4 h-4 bg-green-500 rounded-full relative"></div>
                            </div>
                            <div>
                                <p className="text-xs font-black text-cyan-400 uppercase tracking-[0.2em]">Status</p>
                                <p className="text-white text-lg font-bold">Open for New AI Projects</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}