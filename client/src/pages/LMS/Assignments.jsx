import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiDownload, FiUploadCloud, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Assignments = () => {
  const assignments = [
    { title: 'IoT Edge Computing Lab', course: 'Advanced IoT Systems', deadline: 'March 25, 2024', status: 'Active', points: '100', priority: 'High' },
    { title: 'Neural Model Optimization', course: 'Neural Network Mastery', deadline: 'March 18, 2024', status: 'Submitted', points: '150', priority: 'Medium' },
    { title: 'Cloud Infrastructure Audit', course: 'Secure Cloud Operations', deadline: 'March 12, 2024', status: 'Graded', points: '98/100', priority: 'Low' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-10"
    >
      <div className="mb-10">
        <h1 className="lms-page-title">Unit <span className="text-primary-blue">Assessments</span></h1>
        <p className="lms-page-subtitle">Submit your technical reports and track evaluation status.</p>
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="lms-card p-0 border-none bg-white overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Assessment Name</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Module Context</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Temporal Deadline</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Execution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {assignments.map((asg, index) => (
                <tr key={index} className="hover:bg-primary-blue/[0.02] transition-colors group">
                  <td className="px-8 py-7">
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${
                        asg.status === 'Active' ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-blue-500'
                      }`}>
                        <FiFileText />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 block mb-1.5 tracking-tight">{asg.title}</span>
                        <span className={`text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-md border ${
                          asg.priority === 'High' ? 'bg-red-50 text-red-500 border-red-100' : asg.priority === 'Medium' ? 'bg-orange-50 text-orange-500 border-orange-100' : 'bg-green-50 text-green-500 border-green-100'
                        }`}>
                          {asg.priority} Priority
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-7">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Module Context</span>
                    <span className="text-sm text-gray-700 font-bold">{asg.course}</span>
                  </td>
                  <td className="px-8 py-7">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Deadline</span>
                       <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${asg.status === 'Active' ? 'text-orange-600' : 'text-gray-500'}`}>{asg.deadline}</span>
                        {asg.status === 'Active' && <FiAlertCircle size={14} className="text-orange-500 animate-pulse" />}
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-7">
                    <span className={`text-[9px] font-bold px-4 py-1.5 rounded-xl uppercase tracking-[0.15em] inline-flex items-center gap-2 border ${
                      asg.status === 'Active' ? 'bg-orange-50 text-orange-700 border-orange-100' : 
                      asg.status === 'Submitted' ? 'bg-cyan-50 text-cyan-700 border-cyan-100' : 'bg-green-50 text-green-700 border-green-100'
                    }`}>
                      {asg.status === 'Graded' ? <FiCheckCircle size={12} /> : null}
                      {asg.status} {asg.status === 'Graded' && `[${asg.points}]`}
                    </span>
                  </td>
                  <td className="px-8 py-7 text-right">
                    <div className="flex justify-end gap-3">
                      <motion.button whileHover={{ scale: 1.1, backgroundColor: 'white' }} className="p-3 text-gray-400 hover:text-primary-blue bg-gray-50 rounded-xl border border-transparent hover:border-gray-100 transition-all shadow-sm">
                        <FiDownload />
                      </motion.button>
                      {asg.status === 'Active' && (
                        <motion.button 
                          whileHover={{ scale: 1.02, boxShadow: '0 10px 30px -10px rgba(0, 209, 209, 0.4)' }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-2 px-6 py-3.5 bg-brand-gradient text-white text-[10px] font-bold tracking-widest uppercase rounded-2xl transition-all border-none"
                        >
                          <FiUploadCloud size={16} /> Synchronize Report
                        </motion.button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Assignments;
