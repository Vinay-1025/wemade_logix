import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiClock, FiDollarSign, FiZap } from 'react-icons/fi';

const Jobs = () => {
  const jobs = [
    { title: 'IoT Firmware Architect', company: 'NovaTech Systems', type: 'Full-time', location: 'Remote / SF', salary: '$120k - $160k', status: 'Applied', date: 'Applied 2d ago', tags: ['C++', 'RTOS'] },
    { title: 'Neural Network Engineer', company: 'Vintech Internal', type: 'Contract', location: 'Bangalore / Hybrid', salary: '₹18L - ₹25L', status: 'Priority', date: 'Posted 5h ago', tags: ['Python', 'PyTorch'] },
    { title: 'Embedded Systems Intern', company: 'Global Logix', type: 'Internship', location: 'Remote', salary: '$2000/mo', status: 'Available', date: 'Posted 1d ago', tags: ['Embedded C', 'IoT'] },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-10"
    >
      <div className="mb-10">
        <h1 className="lms-page-title">Career <span className="text-primary-blue">Matrix</span></h1>
        <p className="lms-page-subtitle">Strategic job assignments and synchronized recruitment status.</p>
      </div>

      <div className="flex flex-col gap-6">
        {jobs.map((job, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.01, boxShadow: 'var(--shadow-lg)' }}
            className="lms-card p-6 border-none bg-white flex flex-col md:flex-row md:items-center justify-between gap-6 group lms-stat-card"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-3xl border border-gray-100 text-primary-blue text-3xl group-hover:bg-brand-gradient group-hover:text-white transition-all duration-500 shadow-inner">
                <FiBriefcase />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary-blue transition-colors">{job.title}</h3>
                  {job.status === 'Priority' && (
                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-orange-50 text-orange-600 text-[9px] font-bold uppercase rounded-lg border border-orange-100">
                      <FiZap size={10} /> System Priority
                    </span>
                  )}
                </div>
                <p className="text-primary-cyan font-bold text-xs mb-5 uppercase tracking-widest">{job.company}</p>
                <div className="flex flex-wrap gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-2 bg-gray-50/80 px-4 py-2 rounded-xl border border-gray-100/50"><FiMapPin className="text-primary-cyan"/> {job.location}</span>
                  <span className="flex items-center gap-2 bg-gray-50/80 px-4 py-2 rounded-xl border border-gray-100/50"><FiClock className="text-primary-blue"/> {job.type}</span>
                  <span className="flex items-center gap-2 bg-gray-50/80 px-4 py-2 rounded-xl border border-gray-100/50"><FiDollarSign className="text-green-500"/> {job.salary}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 border-t md:border-t-0 pt-6 md:pt-0">
              <div className="text-right hidden xl:block min-w-[120px]">
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">{job.date}</p>
                <div className="flex gap-2 justify-end">
                   {job.tags.map(t => (
                     <span key={t} className="text-[8px] px-2 py-0.5 bg-blue-50/50 text-primary-blue rounded border border-blue-100/50 font-bold">{t}</span>
                   ))}
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-10 py-4 rounded-2xl text-[11px] font-bold tracking-widest uppercase transition-all shadow-md ${
                  job.status === 'Applied' 
                  ? 'bg-gray-100 text-gray-400 cursor-default border-none' 
                  : 'bg-brand-gradient text-white hover:shadow-xl shadow-primary-blue/20 border-none'
                }`}
              >
                {job.status === 'Applied' ? 'Application Synchronized' : 'Initiate Application'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Jobs;
