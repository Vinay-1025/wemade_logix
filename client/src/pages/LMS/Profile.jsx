import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiMapPin, FiCamera, FiEdit3, FiShield, FiBell, FiAward } from 'react-icons/fi';

const Profile = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-10"
    >
      <div className="mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-2">Personal <span className="text-primary-blue">Profile</span></h1>
        <p className="text-xs md:text-sm text-gray-400 font-medium tracking-wide">Synchronize your identity and manage your learning credentials.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="lms-card text-center py-12 border-none bg-white relative overflow-hidden lms-stat-card lms-grain"
          >
            <div className="absolute top-0 left-0 w-full h-32 bg-brand-gradient opacity-10"></div>
            <div className="relative inline-block mb-6">
              <div className="w-36 h-36 rounded-[40px] bg-white flex items-center justify-center text-4xl text-primary-blue font-bold border-4 border-white shadow-2xl relative z-10">
                JD
                <div className="absolute inset-2 border-2 border-primary-blue/10 rounded-[32px]"></div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-brand-gradient text-white rounded-2xl flex items-center justify-center border-4 border-white shadow-xl z-20"
              >
                <FiCamera />
              </motion.button>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">John Doe</h2>
            <p className="text-[10px] text-primary-cyan font-bold uppercase tracking-[0.2em] mb-10">Systems Engineering Architect</p>
            
            <div className="grid grid-cols-3 gap-2 px-6 py-8 bg-gray-50/50 rounded-3xl border border-gray-100/50 mx-4">
               <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1.5 opacity-50">Units</p>
                 <p className="text-xl font-bold text-gray-900 tracking-tight">12</p>
               </div>
               <div className="border-x border-gray-100">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1.5 opacity-50">Paths</p>
                 <p className="text-xl font-bold text-gray-900 tracking-tight">4</p>
               </div>
               <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1.5 opacity-50">Sync</p>
                 <p className="text-xl font-bold text-gray-900 tracking-tight text-primary-blue font-mono">92%</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="lms-card p-8 border-none bg-white lms-stat-card"
          >
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
               <FiShield className="text-primary-blue" /> Security Protocols
            </h3>
            <div className="space-y-2">
               {[
                 { label: 'Identity Mapping', icon: <FiUser /> },
                 { label: 'Credential Audit', icon: <FiAward /> },
                 { label: 'Event Logging', icon: <FiBell /> }
               ].map((item, i) => (
                 <button key={i} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-primary-blue/[0.03] transition-all group">
                    <div className="flex items-center gap-4">
                       <span className="text-gray-300 group-hover:text-primary-blue transition-colors">{item.icon}</span>
                       <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900">{item.label}</span>
                    </div>
                    <FiArrowRight size={14} className="text-gray-300 group-hover:text-primary-blue group-hover:translate-x-1 transition-all" />
                 </button>
               ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="lms-card border-none bg-white p-10 lms-stat-card lms-grain">
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-50">
               <h3 className="text-xl font-bold text-gray-900">Synchronized Identity Data</h3>
               <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-100">Live Connection</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Primary Identifier</label>
                <input type="text" defaultValue="John" className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary-blue/5 focus:bg-white focus:border-primary-blue/30 transition-all font-bold text-gray-700" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Surname</label>
                <input type="text" defaultValue="Doe" className="w-full px-6 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary-blue/5 focus:bg-white focus:border-primary-blue/30 transition-all font-bold text-gray-700" />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Communication Channel</label>
                <div className="relative">
                  <FiMail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type="email" defaultValue="john.doe@vintech.io" className="w-full pl-14 pr-6 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary-blue/5 focus:bg-white focus:border-primary-blue/30 transition-all font-bold text-gray-700" />
                </div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Trajectory Abstract</label>
                <textarea rows="5" className="w-full px-8 py-6 bg-gray-50/50 border border-gray-100 rounded-3xl focus:outline-none focus:ring-4 focus:ring-primary-blue/5 focus:bg-white focus:border-primary-blue/30 transition-all font-medium text-gray-600 leading-relaxed" placeholder="Describe your technical trajectory..."></textarea>
              </div>
            </div>
            <div className="mt-12 pt-10 border-t border-gray-50 flex justify-end">
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgba(0, 209, 209, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 bg-brand-gradient text-white rounded-2xl font-bold tracking-widest uppercase text-xs hover:shadow-xl transition-all border-none"
              >
                Synchronize Objective
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Internal Import helper
const FiArrowRight = ({ size, className }) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={size} width={size} className={className} xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

export default Profile;
