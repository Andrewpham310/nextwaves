import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import assets from '../assets/assets'
import AppointmentBooking from './AppointmentBooking'

const Chatbot = ({ theme }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [showBooking, setShowBooking] = useState(false)
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm NextWaves AI Assistant. How can I help you today? I can answer questions about our services, help you book an appointment, or assist with any inquiries!",
            sender: 'bot',
            timestamp: new Date()
        }
    ])
    const [inputMessage, setInputMessage] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return

        const userMessage = {
            id: messages.length + 1,
            text: inputMessage,
            sender: 'user',
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        setInputMessage('')
        setIsTyping(true)

        try {
            const response = await getBotResponse(inputMessage)
            const botMessage = {
                id: messages.length + 2,
                text: response,
                sender: 'bot',
                timestamp: new Date()
            }

            setTimeout(() => {
                setMessages(prev => [...prev, botMessage])
                setIsTyping(false)
            }, 1000)
        } catch (error) {
            const errorMessage = {
                id: messages.length + 2,
                text: "I'm sorry, I'm having trouble connecting right now. Please try again or contact us directly at hello@nextwaves.com",
                sender: 'bot',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, errorMessage])
            setIsTyping(false)
        }
    }

    const getBotResponse = async (userInput) => {
        const input = userInput.toLowerCase()

        // Quick responses for common questions
        if (input.includes('appointment') || input.includes('book') || input.includes('schedule')) {
            // Trigger appointment booking modal
            setTimeout(() => setShowBooking(true), 1000)
            return "I'd love to help you book an appointment! Let me open our booking form for you. Please fill out the details and we'll get back to you within 24 hours to confirm your appointment."
        }

        if (input.includes('service') || input.includes('what do you do')) {
            return "NextWaves offers comprehensive web development services including: Web Development, Mobile App Development, UI/UX Design, Digital Marketing, and Consultation Services. Would you like more details about any specific service?"
        }

        if (input.includes('price') || input.includes('cost') || input.includes('how much')) {
            return "Our pricing varies based on project scope and requirements. I'd be happy to provide a custom quote for your specific needs. Could you tell me more about your project?"
        }

        if (input.includes('contact') || input.includes('phone') || input.includes('email')) {
            return "You can reach us at hello@nextwaves.com or through our contact form. We typically respond within 24 hours. Is there anything specific you'd like to discuss?"
        }

        if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
            return "Hello! Welcome to NextWaves! I'm here to help with any questions about our services, booking appointments, or general inquiries. What can I assist you with today?"
        }

        if (input.includes('portfolio') || input.includes('work') || input.includes('examples')) {
            return "You can check out our portfolio in the 'Our Work' section on our website. We've worked with various clients across different industries. Would you like to see specific examples or discuss your project requirements?"
        }

        // For other questions, use AI response (if API key is available)
        if (import.meta.env.VITE_OPENAI_API_KEY && import.meta.env.VITE_OPENAI_API_KEY !== 'your_openai_api_key_here') {
            return await getAIResponse(userInput)
        }

        // Fallback response
        return "That's a great question! I'm still learning, but I'd be happy to connect you with our team for a detailed answer. You can email us at hello@nextwaves.com or book a consultation. What else can I help you with?"
    }

    const getAIResponse = async (userInput) => {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are NextWaves AI Assistant, a friendly customer service representative for a web development agency. Help users with questions about services, appointments, pricing, and general inquiries. Keep responses concise and professional.'
                        },
                        {
                            role: 'user',
                            content: userInput
                        }
                    ],
                    max_tokens: 150,
                    temperature: 0.7
                })
            })

            const data = await response.json()
            return data.choices[0].message.content
        } catch (error) {
            console.error('AI API Error:', error)
            throw error
        }
    }

    const formatTime = (timestamp) => {
        return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    return (
        <>
            {/* Chat Toggle Button - Bottom Right */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#6366f1',
                    borderRadius: '50%',
                    boxShadow: '0 8px 20px rgba(99, 102, 241, 0.5)',
                    zIndex: 9998,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    cursor: 'pointer'
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    )}
                </motion.div>

                {/* Notification dot */}
                {!isOpen && (
                    <motion.div
                        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2 }}
                    >
                        <span className="text-xs text-white font-bold">!</span>
                    </motion.div>
                )}
            </motion.button>

            {/* Chat Window - Positioned ABOVE the button */}
            <div
                style={{
                    position: 'fixed',
                    bottom: '110px',
                    right: '30px',
                    width: '380px',
                    height: '550px',
                    zIndex: 9999,
                    display: isOpen ? 'flex' : 'none',
                    flexDirection: 'column',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                    border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb'
                }}
            >
                {/* Header */}
                <div className="bg-primary text-white p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold">NextWaves AI</h3>
                            <p className="text-xs opacity-90">Online now</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:text-gray-200 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-xs px-4 py-2 rounded-2xl ${message.sender === 'user'
                                    ? 'bg-primary text-white'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                                    }`}
                            >
                                <p className="text-sm">{message.text}</p>
                                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                                    }`}>
                                    {formatTime(message.timestamp)}
                                </p>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-2xl">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Type your message..."
                            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={!inputMessage.trim()}
                            className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Appointment Booking Modal */}
            <AnimatePresence>
                {showBooking && (
                    <AppointmentBooking
                        onClose={() => setShowBooking(false)}
                        onBookingComplete={(bookingData) => {
                            // Add booking confirmation message to chat
                            const bookingMessage = {
                                id: messages.length + 1,
                                text: `Thank you for booking an appointment! We've received your request for ${bookingData.service} on ${bookingData.preferredDate} at ${bookingData.preferredTime}. We'll contact you at ${bookingData.email} within 24 hours to confirm.`,
                                sender: 'bot',
                                timestamp: new Date()
                            }
                            setMessages(prev => [...prev, bookingMessage])
                        }}
                    />
                )}
            </AnimatePresence>
        </>
    )
}

export default Chatbot
