import React from "react";
import { motion } from "framer-motion";
import { useBlogs } from "../../hooks/useBlogs";
import "./blog-preview.css";

const BlogPreview = () => {
  const { data: posts, isLoading } = useBlogs();

  if (isLoading) return null;

  return (
    <section className="blog-preview-section section-padding">
      <div className="container">

        {/* Header */}
        <div className="blog-preview-header">
          <span className="section-tag">Insights</span>

          <h2>
            AI & Software <span>Engineering Insights</span>
          </h2>

          <p>
            Explore expert perspectives on Generative AI, modern software
            architecture, and cloud-native technologies shaping the future
            of digital innovation.
          </p>
        </div>

        {/* Grid */}
        <div className="blog-preview-grid">
          {posts &&
            posts.map((post, index) => (
              <motion.div
                className="blog-preview-card"
                key={post.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >

                {/* Meta */}
                <div className="blog-preview-meta">
                  <span className="blog-category">
                    {post.category}
                  </span>

                  <span className="blog-date">
                    {post.date ||
                      (post.createdAt
                        ? new Date(post.createdAt).toLocaleDateString()
                        : "")}
                  </span>
                </div>

                {/* Title */}
                <h3>{post.title}</h3>

                {/* Description */}
                <p>{post.excerpt}</p>

                {/* CTA */}
                <button className="blog-preview-link">
                  Read Article →
                </button>

              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;
