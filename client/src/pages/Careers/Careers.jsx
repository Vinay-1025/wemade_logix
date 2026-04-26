import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Users,
  Rocket,
  Heart,
  Star,
  ChevronRight,
  Zap,
  MapPin,
  Filter,
  Quote
} from "lucide-react";
import SEO from "../../components/ui/SEO";
import "./careers.css";

const Careers = () => {
  const navigate = useNavigate();

  const [activeDepartment, setActiveDepartment] = useState("All");

  const jobs = [
    {
      id: 1,
      title: "Generative AI Engineer",
      department: "AI Engineering",
      location: "Remote / India",
      type: "Full-time",
      salary: "₹25L - ₹45L"
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      department: "AI Engineering",
      location: "Bangalore / Remote",
      type: "Full-time",
      salary: "₹20L - ₹40L"
    },
    {
      id: 3,
      title: "Senior Backend Engineer (Node / Java)",
      department: "Platform Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "₹18L - ₹35L"
    },
    {
      id: 4,
      title: "Full Stack Developer (React + Node)",
      department: "Product Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "₹15L - ₹30L"
    },
    {
      id: 5,
      title: "AI Platform Engineer",
      department: "AI Infrastructure",
      location: "Remote / Global",
      type: "Full-time",
      salary: "$120k - $180k"
    }
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter(
      job => activeDepartment === "All" || job.department === activeDepartment
    );
  }, [activeDepartment]);

  const departments = ["All", ...new Set(jobs.map(j => j.department))];

  const testimonials = [
    {
      name: "Aarav Mehta",
      role: "Senior AI Engineer",
      text: "Working at Wemade Logix means building real AI products that solve meaningful problems. The engineering culture here is exceptional.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Emily Carter",
      role: "Full Stack Engineer",
      text: "The team encourages experimentation with AI and new technologies. Every project feels like building the future.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Rohan Sharma",
      role: "Machine Learning Engineer",
      text: "The opportunity to work with cutting-edge AI systems while collaborating with talented engineers makes this an amazing place to grow.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  const handleApply = job => {
    navigate(`/careers/apply/${job.id}`);
  };

  return (
    <div className="careers-page">
      <SEO
        title="Careers | Wemade Logix"
        description="Join Wemade Logix and build the future of AI-driven software. Work on Generative AI, machine learning systems, and scalable enterprise software."
      />

      {/* HERO */}

      <section className="careers-hero">
        <div className="careers-hero-overlay"></div>

        <div className="container">
          <motion.div
            className="careers-hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="section-tag">Join the Mission</span>

            <h1>
              Build the Future of <span>AI Software</span>
            </h1>

            <p>
              At Wemade Logix, we build intelligent software powered by
              Artificial Intelligence and Generative AI. Join a team of
              engineers and researchers creating next-generation AI
              platforms and enterprise software.
            </p>

            <button
              className="btn btn-primary"
              onClick={() =>
                document
                  .getElementById("open-positions")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Open Positions <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CULTURE */}

      <section className="careers-culture section-padding">
        <div className="container culture-grid">
          <div className="section-header">
            <span className="section-tag">Our Culture</span>

            <h2>
              Building <span>Intelligent Software</span>
            </h2>

            <p>
              Our culture is built around engineering excellence,
              curiosity, and rapid innovation. We empower engineers to
              design AI systems and scalable platforms that redefine how
              businesses operate.
            </p>

            <div className="values-list">
              <div className="value-item-premium">
                <div className="value-icon-box">
                  <Star />
                </div>

                <div>
                  <h4>Engineering Excellence</h4>
                  <p>
                    We design scalable and high-performance software
                    systems.
                  </p>
                </div>
              </div>

              <div className="value-item-premium">
                <div className="value-icon-box">
                  <Rocket />
                </div>

                <div>
                  <h4>AI-Driven Innovation</h4>
                  <p>
                    Exploring the frontier of Artificial Intelligence and
                    Generative AI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="culture-visual-stack">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Team"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="careers-benefits-revamp section-padding">
        <div className="container">

          <div className="text-center mb-5">
            <div className="section-header">
              <h2>
                Why Join <span>Wemade Logix</span>
              </h2>
            </div>
          </div>

          <div className="benefits-grid-modern">
            {[
              {
                icon: <Briefcase />,
                title: "Remote-First Culture",
                desc:
                  "Work from anywhere while collaborating with a global team."
              },
              {
                icon: <Heart />,
                title: "Health & Wellbeing",
                desc:
                  "Comprehensive health support and balanced work culture."
              },
              {
                icon: <Zap />,
                title: "Innovation Time",
                desc:
                  "Dedicated time for exploring AI research and experiments."
              },
              {
                icon: <Users />,
                title: "Learning & Growth",
                desc:
                  "Access AI courses, conferences, and engineering mentorship."
              }
            ].map((b, i) => (
              <div key={i} className="benefit-card-v2">
                <div className="benefit-icon-wrapper">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB LIST */}

      <section id="open-positions" className="open-positions section-padding">
        <div className="container">

          <div className="flex-header section-header">
            <h2>
              Open <span>Positions</span>
            </h2>

            <div className="job-filters">
              <Filter size={16} />

              {departments.map(d => (
                <button
                  key={d}
                  className={`pill ${activeDepartment === d ? "active" : ""
                    }`}
                  onClick={() => setActiveDepartment(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="jobs-grid-dynamic">
            <AnimatePresence>
              {filteredJobs.map(job => (
                <motion.div
                  key={job.id}
                  className="job-card-premium-v2"
                  whileHover={{ y: -6 }}
                >
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className="job-salary">{job.salary}</span>
                  </div>

                  <div className="job-meta-tag">
                    <span>
                      <MapPin size={14} /> {job.location}
                    </span>

                    <span>
                      <Briefcase size={14} /> {job.department}
                    </span>
                  </div>

                  <div className="job-footer">
                    <span className="job-type-badge">{job.type}</span>

                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleApply(job)}
                    >
                      Apply <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="employee-talks section-padding">
        <div className="container">

          <div className="section-header">
            <h2 className="text-center">
              Life at <span>Wemade Logix</span>
            </h2>
          </div>

          <div className="testimonials-carousel">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card-glass">
                <Quote />

                <p>"{t.text}"</p>

                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} />

                  <div>
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;
