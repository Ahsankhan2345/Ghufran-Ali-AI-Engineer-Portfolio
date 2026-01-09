import { motion } from "framer-motion";
import { 
    FiCpu, 
    FiDatabase, 
    FiLayers, 
    FiCode, 
    FiZap, 
    FiSettings, 
    FiActivity, 
    FiTerminal, 
    FiArrowUpRight,
    FiCheckCircle,
    FiCoffee
} from 'react-icons/fi';

const servicesData = [
    { 
        title: "Autonomous Agent Swarms", 
        description: "Custom LangGraph agents that handle research, email, and CRM tasks while you sleep. I build the 'brain' for your business.",
        icon: FiCpu, 
        color: "text-cyan-400",
        iconBg: "bg-cyan-400/10",
        hoverBorder: "hover:border-cyan-500/50"
    },
    { 
        title: "Enterprise Knowledge RAG", 
        description: "Turn your PDFs and docs into a private ChatGPT. Fast, secure, and 99% accurate retrieval using Pinecone.",
        icon: FiDatabase, 
        color: "text-indigo-400",
        iconBg: "bg-indigo-400/10",
        hoverBorder: "hover:border-indigo-500/50"
    },
    { 
        title: "Smart n8n Automations", 
        description: "Connecting your apps with AI logic. I build workflows that self-heal and adapt to changing data schemas.",
        icon: FiLayers, 
        color: "text-emerald-400",
        iconBg: "bg-emerald-400/10",
        hoverBorder: "hover:border-emerald-500/50"
    },
    { 
        title: "AI Strategy Consulting", 
        description: "Don't know where to start? I audit your manual tasks and provide a 3-month AI roadmap for your team.",
        icon: FiCoffee, 
        color: "text-amber-400",
        iconBg: "bg-amber-400/10",
        hoverBorder: "hover:border-amber-500/50"
    },
];

const engagementModels = [
    { 
        type: "Project Based", 
        price: "From $2k", 
        features: ["Fixed Scope", "Single Agent/RAG", "30 Days Support"],
        highlight: false 
    },
    { 
        type: "Monthly Retainer", 
        price: "Custom", 
        features: ["Unlimited Iterations", "Dedicated Dev Hours", "Priority Support"],
        highlight: true 
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[#02040a] text-slate-200 relative overflow-hidden font-sans border-t border-slate-900">
            
            {/* Soft Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
            
                {/* Modern Header */}
                <div className="max-w-3xl mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-6"
                    >
                        Solutions Catalog 2026
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight"
                    >
                        I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Intelligent Engines</span> for modern teams.
                    </motion.h2>
                </div>
                
                {/* Services Grid */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-32">
                    {servicesData.map((service, i) => {
                        const IconComponent = service.icon; 
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className={`p-8 bg-slate-900/40 border border-slate-800 rounded-2xl backdrop-blur-md transition-all duration-500 group ${service.hoverBorder}`}
                            >
                                <div className={`mb-6 w-14 h-14 inline-flex items-center justify-center rounded-xl ${service.iconBg} ${service.color} group-hover:scale-110 transition-transform shadow-lg shadow-black/20`}>
                                    <IconComponent className="w-7 h-7"/>
                                </div>

                                <h3 className="font-bold text-xl mb-3 text-white">
                                    {service.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                
                                <a 
                                    href="#contact"
                                    className={`text-xs font-bold uppercase tracking-wider ${service.color} flex items-center gap-2 group-hover:translate-x-1 transition-transform`}
                                >
                                    Work With Me <FiArrowUpRight />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>

                {/* --- FREELANCE PRICING/ENGAGEMENT --- */}
                <div className="grid lg:grid-cols-3 gap-12 items-center border-t border-slate-800 pt-24">
                    <div className="lg:col-span-1">
                        <h3 className="text-3xl font-bold text-white mb-6">How we can <span className="text-indigo-400 italic">collaborate.</span></h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Every AI project is unique. Whether you need a quick MVP or a dedicated AI partner, I have a model that fits.
                        </p>
                        <div className="space-y-4">
                            {["No hidden cloud costs", "Weekly progress syncs", "Full code ownership"].map((text, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                    <FiCheckCircle className="text-emerald-400" /> {text}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {engagementModels.map((model, i) => (
                            <div key={i} className={`p-8 rounded-2xl border ${model.highlight ? 'border-indigo-500 bg-indigo-500/5 shadow-[0_0_30px_rgba(99,102,241,0.1)]' : 'border-slate-800 bg-slate-900/50'} relative overflow-hidden`}>
                                {model.highlight && <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-bl-lg">Popular</div>}
                                <h4 className="text-slate-400 font-mono text-xs uppercase tracking-widest mb-2">{model.type}</h4>
                                <div className="text-3xl font-bold text-white mb-6">{model.price}</div>
                                <ul className="space-y-3 mb-8">
                                    {model.features.map((feat, idx) => (
                                        <li key={idx} className="text-sm text-slate-500 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-slate-700" /> {feat}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${model.highlight ? 'bg-indigo-500 text-white hover:bg-indigo-600' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                                    Select Model
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 p-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent">
                    <div className="bg-[#02040a] py-12 text-center">
                        <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.4em] mb-4">Ready to automate?</p>
                        <a href="#contact" className="text-2xl md:text-4xl font-bold text-white hover:text-cyan-400 transition-colors flex items-center justify-center gap-4">
                            Let's Talk Shop <FiArrowUpRight className="text-cyan-400" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}