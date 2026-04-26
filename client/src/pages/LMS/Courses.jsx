import React from 'react';
import { motion } from 'framer-motion';
import { FiPlayCircle, FiClock, FiUsers, FiFilter, FiBook, FiCheckCircle } from 'react-icons/fi';

const Courses = () => {
  const courses = [
    { title: 'IoT Systems Architecture', instructor: 'Sarah Jenkins', lessons: 24, progress: 45, students: 1240, duration: '12h 40m', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', color: 'from-blue-500 to-indigo-600' },
    { title: 'Neural Network Mastery', instructor: 'Michael Chen', lessons: 18, progress: 100, students: 856, duration: '8h 15m', image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad89?auto=format&fit=crop&w=800&q=80', color: 'from-cyan-500 to-blue-500' },
    { title: 'Secure Cloud Operations', instructor: 'Dr. Emily Smith', lessons: 32, progress: 12, students: 532, duration: '22h 10m', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', color: 'from-purple-500 to-blue-600' },
    { title: 'Full Stack Hardware Integ.', instructor: 'James Wilson', lessons: 15, progress: 0, students: 945, duration: '10h 00m', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80', color: 'from-blue-600 to-cyan-500' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="lms-courses-container"
    >
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
        <div className="min-w-0">
          <h1 className="lms-page-title">Curriculum <span className="text-primary-blue">Matrix</span></h1>
          <p className="lms-page-subtitle">Your synchronized learning modules and specialized paths.</p>
        </div>
        <div className="flex gap-4">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-700 hover:shadow-md transition-all h-fit"
          >
            <FiFilter /> Filters
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-brand-gradient text-white rounded-xl text-sm font-bold hover:shadow-lg transition-all border-none h-fit"
          >
            Explore Paths
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="lms-card p-0 border-none bg-white relative overflow-hidden group flex flex-col h-full"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                 <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg">
                   Core Module
                 </span>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-[10px] font-bold text-white">
                     {course.instructor[0]}
                   </div>
                   <span className="text-[10px] font-bold text-white uppercase tracking-widest">{course.instructor}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl leading-tight text-gray-900 pr-4">
                  {course.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 mb-8 text-[10px] font-bold text-text-neutral uppercase tracking-widest">
                 <span className="flex items-center gap-1.5"><FiClock className="text-primary-cyan"/> {course.duration}</span>
                 <span className="flex items-center gap-1.5"><FiBook size={12} className="text-primary-blue"/> {course.lessons} Units</span>
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[10px] font-bold text-text-neutral uppercase tracking-widest">
                    {course.progress === 100 ? (
                      <span className="text-green-500 flex items-center gap-1"><FiCheckCircle /> Validated</span>
                    ) : 'Synchronizing'}
                  </span>
                  <span className="text-sm font-black text-gray-900">{course.progress}%</span>
                </div>
                <div className="w-full bg-light-secondary h-[8px] rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`absolute left-0 top-0 h-full rounded-full ${course.progress === 100 ? 'bg-green-500' : 'bg-brand-gradient'}`}
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;
