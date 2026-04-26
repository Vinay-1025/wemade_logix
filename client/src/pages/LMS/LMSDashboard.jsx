import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiClock, FiCheckCircle, FiAward, FiArrowRight } from 'react-icons/fi';

const LMSDashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { label: 'Active Courses', value: '3', icon: <FiBook />, bg: 'bg-blue-50', color: 'text-blue-600' },
    { label: 'Learning Hours', value: '42h', icon: <FiClock />, bg: 'bg-cyan-50', color: 'text-cyan-600' },
    { label: 'Units Done', value: '12', icon: <FiCheckCircle />, bg: 'bg-green-50', color: 'text-green-600' },
    { label: 'Credentials', value: '4', icon: <FiAward />, bg: 'bg-orange-50', color: 'text-orange-600' },
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pb-10"
    >
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="min-w-0">
          <motion.h1 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-2">
            Control <span className="text-primary-blue">Center</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xs md:text-sm text-gray-400 font-medium tracking-wide">
            Welcome, User JD-4092. Your synchronized learning objective is currently <span className="text-primary-blue font-bold">Ahead of Schedule</span>.
          </motion.p>
        </div>
        <motion.div variants={itemVariants} className="flex gap-3">
           <div className="bg-white px-4 py-2.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">System Online</span>
           </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="lms-stat-grid">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
            className="lms-card p-6 border-none bg-white relative overflow-hidden group flex flex-col justify-between min-h-[140px]"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${stat.bg} rounded-full -mr-16 -mt-16 opacity-10 group-hover:scale-125 transition-transform duration-700`}></div>
            <div className="flex justify-between items-start z-10">
              <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center text-xl shadow-inner`}>
                {stat.icon}
              </div>
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">+12% vs LY</span>
            </div>
            <div className="z-10 mt-4">
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        <motion.div variants={itemVariants} className="lg:col-span-2 lms-card bg-white border-none p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Learning Trajectory</h3>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">Real-time Skill Synchronisation</p>
            </div>
            <div className="flex gap-2">
               {['7D', '1M', '1Y'].map(t => (
                 <button key={t} className={`px-3 py-1 text-[9px] font-bold rounded-lg transition-all ${t === '1M' ? 'bg-primary-blue text-white shadow-lg shadow-primary-blue/20' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}>{t}</button>
               ))}
            </div>
          </div>
          
          <div className="relative h-48 w-full mt-4 group/chart">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 150">
              <defs>
                 <linearGradient id="chartLineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--primary-blue)" />
                    <stop offset="100%" stopColor="var(--primary-cyan)" />
                 </linearGradient>
                 <filter id="chartGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
              </defs>
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M0,120 C50,110 80,40 120,60 C160,80 200,20 250,50 C300,80 350,10 400,30"
                fill="none"
                stroke="url(#chartLineGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#chartGlow)"
              />
              {[
                { x: 0, y: 120, label: 'Mon' },
                { x: 120, y: 60, label: 'Wed' },
                { x: 250, y: 50, label: 'Fri' },
                { x: 400, y: 30, label: 'Sun' }
              ].map((point, i) => (
                <motion.circle
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8 + i * 0.1 }}
                  cx={point.x}
                  cy={point.y}
                  r="5"
                  fill="white"
                  stroke="var(--primary-blue)"
                  strokeWidth="2"
                  className="cursor-pointer"
                />
              ))}
            </svg>
            <div className="flex justify-between mt-6 text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] px-1 border-t border-gray-50 pt-4">
               <span>Mon</span>
               <span>Wed</span>
               <span>Fri</span>
               <span>Sun</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-50">
             {[
               { label: 'Technical Core', val: '94%', color: 'text-primary-blue' },
               { label: 'Applied Logic', val: '82%', color: 'text-primary-cyan' },
               { label: 'Industry Sync', val: '76%', color: 'text-orange-500' }
             ].map((m, i) => (
               <div key={i}>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">{m.label}</p>
                  <p className={`text-lg font-bold ${m.color}`}>{m.val}</p>
               </div>
             ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="lms-card bg-dark-bg text-white border-none relative overflow-hidden p-8 flex flex-col group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary-blue/20 rounded-full -mr-24 -mt-24 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-cyan/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>
          
          <div className="relative z-10 flex-1">
            <h3 className="text-xl font-bold mb-2">Certification Matrix</h3>
            <p className="text-gray-400 text-xs mb-8 leading-relaxed">System identified 3 pending credentials in your current learning path.</p>
            
            <div className="space-y-4 mb-10">
               {[
                 { title: 'IoT Protocol Specialist', level: 'Synchronizing' },
                 { title: 'Neural Topology L1', level: 'Validated' },
                 { title: 'Cloud Compliance', level: 'Locked' }
               ].map((c, i) => (
                 <div key={i} className="flex items-center justify-between bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group/item">
                    <div>
                      <h4 className="font-bold text-sm tracking-tight">{c.title}</h4>
                      <p className={`text-[9px] font-bold uppercase tracking-widest mt-1 ${c.level === 'Validated' ? 'text-green-400' : c.level === 'Synchronizing' ? 'text-primary-cyan' : 'text-gray-500'}`}>
                         System: {c.level}
                      </p>
                    </div>
                    <FiArrowRight size={14} className="text-gray-600 group-hover/item:text-white group-hover/item:translate-x-1 transition-all" />
                 </div>
               ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 209, 209, 0.2)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-brand-gradient text-white font-bold rounded-2xl transition-all border-none"
            >
              Access Assessment Portal
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LMSDashboard;
