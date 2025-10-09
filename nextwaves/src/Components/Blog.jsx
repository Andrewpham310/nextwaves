import React, { useState } from 'react';
import { motion } from "motion/react";
import BlogPost from './BlogPost';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');


    const categories = ['All', 'Technology', 'Development', 'Design', 'Marketing', 'Security'];

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <section id="blog" className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Our <span className="text-primary">Blog</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Stay updated with the latest insights, trends, and best practices in web development, design, and digital innovation.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Blog Posts Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredPosts.map((post, index) => (
                        <BlogPost key={post.id} post={post} index={index} />
                    ))}
                </motion.div>

                {/* Load More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25">
                        Load More Posts
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
