import React from 'react';
import { motion } from 'framer-motion';
import { FiHelpCircle, FiClock, FiPlay, FiAward, FiLock } from 'react-icons/fi';

const Quizzes = () => {
  const quizzes = [
    { title: 'IoT Protocol Assessment', course: 'Advanced IoT Systems', duration: '20 mins', questions: 15, status: 'Ready', level: 'Intermediate' },
    { title: 'Neural Topology Quiz', course: 'Neural Network Mastery', duration: '15 mins', questions: 10, status: 'Completed', score: '92%', level: 'Advanced' },
    { title: 'Cloud Compliance Exam', course: 'Secure Cloud Operations', duration: '45 mins', questions: 30, status: 'Locked', level: 'Expert' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-10"
    >
      <div className="mb-10">
        <h1 className="lms-page-title">Knowledge <span className="text-primary-blue">Matrix</span></h1>
        <p className="lms-page-subtitle">Demonstrate your expertise through synchronized technical assessments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quizzes.map((quiz, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`lms-card group relative overflow-hidden border-none bg-white flex flex-col lms-stat-card ${quiz.status === 'Locked' ? 'opacity-70 grayscale' : ''}`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${
                quiz.status === 'Ready' ? 'bg-primary-blue/10 text-primary-blue' : 
                quiz.status === 'Completed' ? 'bg-green-50 text-green-500' : 'bg-gray-100 text-gray-400'
              }`}>
                {quiz.status === 'Locked' ? <FiLock /> : <FiHelpCircle />}
              </div>
              {quiz.status === 'Completed' && (
                <div className="text-right">
                  <span className="flex items-center gap-1 text-green-500 font-bold text-[9px] uppercase tracking-widest mb-1"><FiAward /> Verified</span>
                  <p className="text-2xl font-bold text-gray-900 leading-none">{quiz.score}</p>
                </div>
              )}
            </div>
            
            <div className="mb-3">
               <span className="text-[9px] font-bold text-primary-cyan uppercase tracking-[0.2em] mb-1 block">{quiz.level} Synchronisation</span>
               <h3 className="font-bold text-xl leading-tight text-gray-900 group-hover:text-primary-blue transition-colors">{quiz.title}</h3>
            </div>
            <p className="text-[10px] text-gray-400 mb-8 font-bold uppercase tracking-widest bg-gray-50 inline-block px-3 py-1 rounded-lg border border-gray-100/50">{quiz.course}</p>
            
            <div className="flex items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8 pb-8 border-b border-gray-50 mt-auto">
              <span className="flex items-center gap-2"><FiClock className="text-primary-blue"/> {quiz.duration}</span>
              <span className="flex items-center gap-2"><FiHelpCircle className="text-primary-cyan"/> {quiz.questions} Qs</span>
            </div>
            
            <motion.button 
              whileHover={quiz.status === 'Ready' ? { scale: 1.02, boxShadow: '0 10px 20px -10px rgba(0, 209, 209, 0.4)' } : {}}
              whileTap={quiz.status === 'Ready' ? { scale: 0.98 } : {}}
              className={`w-full py-4 rounded-2xl text-[10px] font-bold tracking-[0.1em] uppercase flex items-center justify-center gap-3 transition-all border-none ${
                quiz.status === 'Ready' ? 'bg-brand-gradient text-white shadow-lg shadow-primary-blue/20' : 
                quiz.status === 'Completed' ? 'bg-gray-50 text-gray-400 cursor-default border border-gray-100' : 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
              }`}
            >
              {quiz.status === 'Ready' ? (<><FiPlay /> Start Protocol</>) : quiz.status === 'Completed' ? 'Evaluation Verified' : 'Prerequisites Missing'}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Quizzes;
