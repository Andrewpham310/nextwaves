export const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development: Trends to Watch in 2024",
        excerpt: "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
        content: "Web development is evolving at an unprecedented pace. In 2024, we're seeing revolutionary changes that are reshaping how we build and interact with web applications...",
        author: "Andrew Pham",
        date: "2024-01-15",
        category: "Technology",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
        tags: ["Web Development", "Technology", "Trends"]
    },
    {
        id: 2,
        title: "Building Scalable React Applications: Best Practices",
        excerpt: "Learn the essential patterns and practices for building maintainable and scalable React applications.",
        content: "React has become the go-to library for building user interfaces, but scaling React applications requires careful planning and adherence to best practices...",
        author: "Andrew Pham",
        date: "2024-01-12",
        category: "Development",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
        tags: ["React", "JavaScript", "Best Practices"]
    },
    {
        id: 3,
        title: "Design Systems: Creating Consistency Across Products",
        excerpt: "Discover how design systems can improve consistency, efficiency, and user experience across your digital products.",
        content: "A well-designed design system is the foundation of any successful digital product.\n\n It ensures consistency, improves efficiency, and enhances user experience...",
        author: "Andrew Pham",
        date: "2024-01-10",
        category: "Design",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=600&fit=crop",
        tags: ["Design", "UI/UX", "Systems"]
    },
    {
        id: 4,
        title: "The Rise of AI in Digital Marketing",
        excerpt: "How artificial intelligence is transforming digital marketing strategies and customer engagement.",
        content: [
            "Artificial Intelligence (AI) is no longer a futuristic buzzword — it’s reshaping how businesses attract, engage, and convert customers right now. In 2025, the rise of AI in digital marketing has become the biggest competitive advantage for entrepreneurs who know how to use it.",
            "AI tools are transforming every part of marketing. Smart chatbots handle customer questions 24/7. AI copywriters create social media posts and emails in seconds. Predictive analytics helps brands understand exactly what customers want — before they even ask.",
            "For entrepreneurs and small businesses, this means saving time, cutting costs, and scaling faster than ever before. You don’t need a full marketing team to compete anymore — AI can handle repetitive tasks so you can focus on strategy and relationships."
        ],
        author: "Andrew Pham",
        date: "2024-01-08",
        category: "Marketing",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
        tags: ["AI", "Marketing", "Digital Strategy"]
    },
    {
        id: 5,
        title: "Mobile-First Design: Why It Matters More Than Ever",
        excerpt: "Understanding the importance of mobile-first design in today's digital landscape.",
        content: "With mobile devices accounting for over 50% of web traffic, mobile-first design is no longer optional—it's essential...",
        author: "Andrew Pham",
        date: "2024-01-05",
        category: "Design",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop",
        tags: ["Mobile", "Design", "Responsive"]
    },
    {
        id: 6,
        title: "Cybersecurity Best Practices for Modern Web Applications",
        excerpt: "Essential security measures every web developer should implement to protect user data and applications.",
        content: "As web applications become more complex and handle increasingly sensitive data, cybersecurity has become a critical concern...",
        author: "Andrew Pham",
        date: "2024-01-03",
        category: "Security",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
        tags: ["Security", "Web Development", "Best Practices"]
    }
]

export function getPostById(id) {
    const numericId = Number(id)
    return blogPosts.find(p => p.id === numericId)
}

