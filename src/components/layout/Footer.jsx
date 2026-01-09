import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiTwitter, FiArrowUpRight, FiTerminal, FiMapPin } from 'react-icons/fi';

const profile = {
    email: "alig44355@gmail.com",
    linkedin: "https://www.linkedin.com/in/ghufran-ali-a8236927b",
    github: "#", 
    name: "GHUFRAN ALI",
    role: "AI Engineer",
    // ADD YOUR IMAGE URL HERE
    avatar: "/public/images/ghufran.jpg" 
};

const footerNav = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#stack" },
    { name: "Contact", href: "#contact" }, 
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#02040a] border-t border-slate-900 text-slate-100 pt-24 relative overflow-hidden font-sans">
            {/* Top Glow Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
            
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-slate-900">
                    
                    {/* LEFT SIDE: BRANDING & PROFILE */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative">
                                <img 
                                    src={profile.avatar} 
                                    alt={profile.name} 
                                    className="w-14 h-14 rounded-full object-cover border-2 border-slate-800 grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-[#02040a] rounded-full animate-pulse" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black tracking-tighter uppercase italic leading-none">
                                    {profile.name}<span className="text-cyan-500">.</span>
                                </h3>
                                <p className="text-[10px] font-bold text-cyan-500/80 tracking-[0.3em] uppercase mt-1">
                                    {profile.role}
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-400 max-w-sm text-base leading-relaxed font-medium">
                            Developing <span className="text-white">autonomous intelligence</span> systems that bridge the gap between complex data and human intuition.
                        </p>
                        
                        <div className="mt-10">
                            <motion.a
                                href="#contact"
                                whileHover={{ gap: '15px' }}
                                className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] py-3 px-6 rounded-full bg-white/5 border border-white/10 text-white hover:bg-cyan-500 hover:text-black transition-all duration-300"
                            >
                                Hire for Projects <FiArrowUpRight className="text-sm" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* CENTER: NAV LINKS */}
                    <div className="lg:col-span-3 grid grid-cols-1 gap-8">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-slate-600">Site Map</h4>
                            <ul className="space-y-4">
                                {footerNav.map((item) => (
                                    <motion.li key={item.name} whileHover={{ x: 5 }}>
                                        <a 
                                            href={item.href} 
                                            className="text-slate-400 hover:text-cyan-400 transition-colors text-xs font-bold uppercase tracking-[0.15em]"
                                        >
                                            {item.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* RIGHT: CONNECT BOX */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 p-8 rounded-3xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm"
                    >
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-slate-500">Global Hub</h4>
                        
                        <div className="flex items-center gap-3 text-slate-300 mb-8">
                            <FiMapPin className="text-cyan-500" />
                            <span className="text-xs font-bold tracking-widest uppercase">Lahore, PK // GMT +5</span>
                        </div>

                        <div className="flex gap-3">
                            {[
                                { icon: FiLinkedin, link: profile.linkedin, color: 'hover:bg-blue-600' },
                                { icon: FiGithub, link: profile.github, color: 'hover:bg-purple-600' },
                                { icon: FiMail, link: `mailto:${profile.email}`, color: 'hover:bg-cyan-500' }
                            ].map((social, i) => (
                                <motion.a 
                                    key={i}
                                    href={social.link} 
                                    target="_blank" 
                                    whileHover={{ y: -8 }}
                                    className={`w-12 h-12 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-300 ${social.color} hover:text-white hover:border-transparent transition-all duration-300 shadow-xl`}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
                
                {/* BOTTOM BAR */}
                <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
                        &copy; {currentYear} {profile.name} <span className="mx-2 text-slate-800">/</span> Dev_Protocol_v4.0
                    </p>
                    
                    <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform" />
                            <span className="group-hover:text-cyan-400">Security Encrypted</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700 font-mono">
                            <FiTerminal size={14} />
                            <span>Build.Deploy.Iterate</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}