import React, { useState } from 'react';
import { motion } from "motion/react";
import { Link } from 'react-router-dom';

const BlogPost = ({ post, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-4">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        })}</span>
                    </div>
                    <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Read More Button */}
                <Link to={`/blog/${post.id}`} className="inline-flex">
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
                    >
                        Read More
                        <motion.svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            animate={{ x: isHovered ? 4 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </motion.svg>
                    </motion.span>
                </Link>
            </div>
        </motion.article>
    );
};

export default BlogPost;
