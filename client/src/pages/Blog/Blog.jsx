import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiUser, FiArrowRight, FiSearch } from 'react-icons/fi';
import SEO from '../../components/ui/SEO';

const Blog = () => {
  const posts = [
    { title: 'The Future of Silicon Photonics', category: 'VLSI', date: 'Mar 12, 2026', read: '5 min', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Securing the Edge: IoT Protocols', category: 'Security', date: 'Mar 10, 2026', read: '8 min', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Neural Topology Optimization', category: 'AI', date: 'Mar 08, 2026', read: '12 min', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <div className="blog-page bg-gray-50 min-h-screen">
      <SEO title="Insights" description="Technical deep-dives and industry updates from Vintech Logix." />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0a0d1a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-blue/10 to-transparent"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary-blue font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Knowledge Matrix v4.0</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">Engineering <span className="text-primary-blue">Insights</span></h1>
            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">Synchronize your understanding with our technical deep-dives into IoT, VLSI, and Enterprise AI.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-primary-blue">
                    {post.category}
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6 border-b border-gray-50 pb-6">
                    <span className="flex items-center gap-2"><FiClock className="text-primary-blue" /> {post.date}</span>
                    <span className="flex items-center gap-2"><FiUser className="text-primary-blue" /> Admin</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-6 group-hover:text-primary-blue transition-colors line-clamp-2 leading-tight uppercase tracking-tight">
                    {post.title}
                  </h3>
                  <button className="flex items-center gap-3 text-primary-blue font-black text-[10px] uppercase tracking-[0.2em] group/btn">
                    Protocol Access <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform text-lg" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
