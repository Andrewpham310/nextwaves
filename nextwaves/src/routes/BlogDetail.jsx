import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPostById } from '../data/blogPosts'
import BlogNavbar from '../Components/BlogNavbar'

const BlogDetail = () => {
    const { id } = useParams()
    const post = getPostById(id)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    if (!post) {
        return (
            <div className="dark:bg-black min-h-screen">
                <BlogNavbar theme={theme} setTheme={setTheme} />
                <div className="flex items-center justify-center px-4 min-h-[calc(100vh-80px)]">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Post not found</h1>
                        <Link to="/" className="text-primary underline">Go back home</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="dark:bg-black min-h-screen">
            <BlogNavbar theme={theme} setTheme={setTheme} />
            <main className="show-cursor py-16 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-gray-900 min-h-[calc(100vh-80px)]">
                <article className="max-w-4xl mx-auto">
                    <header className="mb-10">
                        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 mb-3">
                            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
                            <span>•</span>
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">{post.title}</h1>
                        <p className="text-gray-600 dark:text-gray-300">By {post.author}</p>
                    </header>

                    <img src={post.image} alt={post.title} className="w-full h-[320px] sm:h-[420px] object-cover rounded-xl mb-10" />

                    <div className="prose prose-lg max-w-none leading-8">
                        {Array.isArray(post.content)
                            ? post.content.map((paragraph, i) => (
                                <p key={i} className="mb-6 text-gray-700 dark:text-gray-300">{paragraph}</p>
                            ))
                            : post.content.split('\n\n').map((paragraph, i) => (
                                <p key={i} className="mb-6 text-gray-700 dark:text-gray-300">{paragraph}</p>
                            ))
                        }
                    </div>

                    <div className="mt-10 flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                            <span key={idx} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs">{tag}</span>
                        ))}
                    </div>

                    <div className="mt-12">
                        <Link to="/" className="text-primary underline">← Back to Home</Link>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default BlogDetail


