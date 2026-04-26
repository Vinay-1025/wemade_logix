import React from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiBell, FiSearch, FiUser } from 'react-icons/fi';

const LMSNavbar = ({ toggleMobileSidebar }) => {
  return (
    <header className="lms-header">
      <div className="flex items-center gap-4 min-w-0">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="lg:hidden lms-toggle-btn"
          onClick={toggleMobileSidebar}
        >
          <FiMenu size={20} />
        </motion.button>
        
        <div className="hidden lg:flex items-center gap-3">
          <img src="/company_logo.png" alt="Vintech Logix" className="h-8 w-auto object-contain" />
          <div className="w-px h-8 bg-light-tertiary mx-2"></div>
          <h2 className="text-sm font-black text-gray-900 tracking-tight uppercase">VLE Terminal</h2>
        </div>

        <div className="lg:hidden truncate">
            <img src="/company_logo.png" alt="Vintech Logix" className="h-6 w-auto object-contain" />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8 ml-auto">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-light-secondary rounded-lg border border-light-tertiary">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
            <span className="text-[10px] font-bold text-text-neutral uppercase tracking-widest">Live Sync</span>
        </div>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 text-text-neutral hover:text-primary-blue transition-colors relative"
        >
          <FiBell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </motion.button>
        
        <div className="flex items-center gap-3 md:gap-5 pl-4 md:pl-8 border-l border-light-tertiary">
          <div className="text-right hidden sm:block">
            <p className="text-[12px] font-bold text-gray-900 leading-none mb-1">John Doe</p>
            <span className="text-[9px] text-primary-cyan font-bold uppercase tracking-widest opacity-80">Lvl 4 Admin</span>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-xl bg-brand-gradient p-[2px] cursor-pointer shadow-md"
          >
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-primary-blue font-black text-xs">
              JD
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default LMSNavbar;
