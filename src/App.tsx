import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Server, Users, Leaf, Cloud, Settings, 
  CheckCircle, Moon, Sun, Menu, X, Image as ImageIcon,
  Download, ShieldCheck, Gauge, Zap, Cpu, Lock, Terminal
} from 'lucide-react';

const PlaceholderImage = ({ text }: { text: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mt-6 w-full h-64 bg-slate-100 dark:bg-slate-800/50 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center text-slate-500 p-8 text-center"
  >
    <div className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-sm mb-4">
      <ImageIcon size={32} className="opacity-50" />
    </div>
    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Evidence Screenshot Placeholder</p>
    <p className="text-xs opacity-60 mt-1 italic">{text}</p>
  </motion.div>
);

const projectData = [
  {
    id: 'summary',
    title: 'Executive Summary',
    icon: LayoutDashboard,
    stats: [
      { label: 'Security Level', value: 'Enterprise', icon: ShieldCheck, color: 'text-green-500' },
      { label: 'Deployment', value: 'Zero-Touch', icon: Zap, color: 'text-yellow-500' },
      { label: 'Cloud Status', value: 'Intune Ready', icon: Cloud, color: 'text-blue-500' },
      { label: 'Sustainability', value: 'A+ Grade', icon: Leaf, color: 'text-emerald-500' },
    ],
    content: (
      <div className="space-y-6">
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl font-light leading-relaxed text-slate-600 dark:text-slate-300">
            This capstone project outlines the strategic migration and management of a modern <span className="text-blue-600 dark:text-blue-400 font-semibold">Windows 11 environment</span>. 
          </p>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg my-6">
            <p className="italic m-0">"The core objective is to deliver an IT infrastructure that is not only highly secure and productive but also sustainable and user-friendly."</p>
          </div>
          <p>
            By leveraging <strong>Windows Autopilot</strong>, <strong>Microsoft Intune</strong>, and <strong>Copilot AI</strong>, this project reduces the IT carbon footprint (Green IT) and extends hardware lifecycles.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'phase1',
    title: 'Phase 1: Sustainable Virtualization',
    icon: Server,
    content: (
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
            VM Installation & Efficiency
          </h3>
          <p className="mb-4 text-slate-600 dark:text-slate-400">To simulate deployment without physical waste, a virtualized environment was established using VMware Workstation.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
            <ul className="space-y-2 list-none p-0">
              <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle size={16} className="text-green-500 shrink-0" /> <strong>CPU:</strong> 2 Cores (Dynamic)</li>
              <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle size={16} className="text-green-500 shrink-0" /> <strong>RAM:</strong> 4GB Optimized</li>
              <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle size={16} className="text-green-500 shrink-0" /> <strong>Security:</strong> TPM 2.0 Enabled</li>
            </ul>
            <ul className="space-y-2 list-none p-0">
              <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle size={16} className="text-green-500 shrink-0" /> <strong>Tool:</strong> Winget Batch Scripting</li>
              <li className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"><CheckCircle size={16} className="text-green-500 shrink-0" /> <strong>State:</strong> Clean Base Snapshot</li>
            </ul>
          </div>
          <PlaceholderImage text="Screenshot: VMware Resource Monitoring & Winget scripts" />
        </section>
      </div>
    )
  },
  {
    id: 'phase2',
    title: 'Phase 2: Cloud Management',
    icon: Cloud,
    content: (
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
            Microsoft Intune & Autopilot
          </h3>
          <p className="mb-4 text-slate-600 dark:text-slate-400">Implementing zero-touch deployment strategies to ensure devices are ready for use immediately upon unboxing.</p>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
              <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Configuration Profiles</h4>
              <p className="text-sm">Automated delivery of Wi-Fi settings, VPN configurations, and browser policies across the fleet.</p>
            </div>
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-2">App Deployment</h4>
              <p className="text-sm">Silent installation of essential productivity tools (Office 365, Teams) using Intune Win32 App packaging.</p>
            </div>
          </div>
          <PlaceholderImage text="Screenshot: Intune Dashboard - Device Compliance Status" />
        </section>
      </div>
    )
  },
  {
    id: 'phase3',
    title: 'Phase 3: Security & Compliance',
    icon: ShieldCheck,
    content: (
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
            <div className="h-2 w-2 bg-red-500 rounded-full"></div>
            Endpoint Protection
          </h3>
          <p className="mb-4 text-slate-600 dark:text-slate-400">Hardening the Windows 11 environment against modern threats using Microsoft Defender for Endpoint.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <Lock size={24} className="mx-auto mb-2 text-red-500" />
              <span className="text-xs font-bold uppercase">BitLocker</span>
              <p className="text-[10px] mt-1">Full Disk Encryption</p>
            </div>
            <div className="p-4 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <Users size={24} className="mx-auto mb-2 text-blue-500" />
              <span className="text-xs font-bold uppercase">RBAC</span>
              <p className="text-[10px] mt-1">Least Privilege Access</p>
            </div>
            <div className="p-4 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <Terminal size={24} className="mx-auto mb-2 text-emerald-500" />
              <span className="text-xs font-bold uppercase">ASR Rules</span>
              <p className="text-[10px] mt-1">Attack Surface Reduction</p>
            </div>
          </div>
          <PlaceholderImage text="Screenshot: Security Baseline Compliance Report" />
        </section>
      </div>
    )
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    icon: CheckCircle,
    content: (
      <div className="space-y-8">
        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden shadow-xl">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-white">Project Outcome</h3>
            <p className="text-blue-100 mb-6">Successfully architected a zero-touch, cloud-managed workspace that meets 2024 ESG (Environmental, Social, and Governance) standards.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <span className="block text-3xl font-bold">45%</span>
                <span className="text-xs uppercase tracking-wider opacity-80">Energy Reduction</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <span className="block text-3xl font-bold">100%</span>
                <span className="text-xs uppercase tracking-wider opacity-80">Remote Management</span>
              </div>
            </div>
          </div>
          <Cloud className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
        </div>
      </div>
    )
  }
];


export default function App() {
  const [activeSection, setActiveSection] = useState(projectData[0].id);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  const activeContent = projectData.find(s => s.id === activeSection) || projectData[0];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-slate-950' : 'bg-slate-50'}`}>
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-slate-600 dark:text-slate-400">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Gauge size={18} />
              </div>
              <span className="font-bold text-slate-900 dark:text-white hidden sm:block">CloudOps Workspace</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block text-right">
              <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Suyash Kumar Choudhary</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">ID: 310-24422</p>
            </div>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 transition-transform active:scale-95">
              {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-600" />}
            </button>
            <button onClick={() => window.print()} className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
              <Download size={18} />
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8 lg:flex gap-8">
        
        {/* Sidebar */}
        <aside className={`fixed inset-0 z-40 lg:relative lg:block lg:w-72 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="h-full lg:h-auto bg-white dark:bg-slate-900 lg:bg-transparent border-r lg:border-none p-4 lg:p-0">
            <div className="lg:sticky lg:top-24 space-y-2">
              {projectData.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => { setActiveSection(section.id); setIsMobileMenuOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all group ${
                      isActive 
                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20' 
                        : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-500'} />
                    {section.title}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-blue-600">
                    <activeContent.icon size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {activeContent.title}
                  </h2>
                </div>

                {/* Optional Stats Bar */}
                {activeContent.stats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {activeContent.stats.map((s, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <s.icon size={20} className={`${s.color} mb-2`} />
                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">{s.label}</span>
                        <span className="text-lg font-bold text-slate-900 dark:text-white">{s.value}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeContent.content}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
