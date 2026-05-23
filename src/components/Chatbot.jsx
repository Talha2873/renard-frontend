import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Minimize2, Maximize2, Sparkles, ChevronRight } from 'lucide-react'

const QUICK_ACTIONS = [
  'Find executive talent',
  'Submit my candidacy',
  'Learn about our services',
  'Request a consultation',
]

const INITIAL_MESSAGES = [
  {
    id: 1,
    role: 'assistant',
    content: "Good day. I'm the Renard International virtual assistant. How may I assist you today — are you looking to hire exceptional hospitality talent, or are you a professional seeking your next executive opportunity?",
    timestamp: new Date(),
  },
]

const TypingIndicator = () => (
  <div className="flex items-end gap-2">
    <div className="w-7 h-7 rounded-full bg-champagne-500/20 border border-champagne-500/30 flex items-center justify-center flex-shrink-0">
      <Sparkles size={12} className="text-champagne-400" />
    </div>
    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-none px-4 py-3">
      <div className="flex gap-1.5 items-center h-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-champagne-400/60"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  </div>
)

const Message = ({ message }) => {
  const isUser = message.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-end gap-2 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-champagne-500/20 border border-champagne-500/30 flex items-center justify-center flex-shrink-0 mb-0.5">
          <Sparkles size={12} className="text-champagne-400" />
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm font-body leading-relaxed ${
          isUser
            ? 'bg-champagne-500/20 border border-champagne-500/30 text-white rounded-br-none'
            : 'bg-white/5 border border-white/10 text-white/80 rounded-bl-none'
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  )
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasUnread, setHasUnread] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom()
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized, messages])

  // Pulse notification after 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setHasUnread(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
    setHasUnread(false)
    setIsMinimized(false)
  }

  const simulateResponse = (userMessage) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      const responses = {
        default:
          'Thank you for reaching out to Renard International. Our team of expert consultants would be happy to discuss your needs in detail. Please contact us at +1 (416) 364 8325 or use our contact form, and a specialist will be in touch within one business day.',
      }

      const lower = userMessage.toLowerCase()
      let content = responses.default

      if (lower.includes('hire') || lower.includes('employer') || lower.includes('recruit')) {
        content =
          "Excellent. Our retained executive search services are available to hospitality organizations worldwide. We specialize in C-suite, VP, and director-level placements across all hospitality verticals. Shall I connect you with one of our search consultants?"
      } else if (lower.includes('job') || lower.includes('candid') || lower.includes('opportunit')) {
        content =
          "We'd be delighted to discuss your career aspirations. Renard International places hospitality professionals across 75+ countries. You can browse current openings at careers.renardinternational.com, or I can add you to our exclusive talent pool."
      } else if (lower.includes('contact') || lower.includes('consult') || lower.includes('talk')) {
        content =
          "Absolutely. You can reach our Toronto headquarters at +1 (416) 364 8325, or visit our Contact page to submit an inquiry. Our consultants respond within one business day."
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: 'assistant', content, timestamp: new Date() },
      ])
    }, 1800)
  }

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg = { id: Date.now(), role: 'user', content: input.trim(), timestamp: new Date() }
    setMessages((prev) => [...prev, userMsg])
    simulateResponse(input.trim())
    setInput('')
  }

  const handleQuickAction = (action) => {
    const userMsg = { id: Date.now(), role: 'user', content: action, timestamp: new Date() }
    setMessages((prev) => [...prev, userMsg])
    simulateResponse(action)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={handleOpen}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-champagne-500 text-white shadow-gold-lg flex items-center justify-center group hover:bg-champagne-400 transition-colors duration-300"
            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
            aria-label="Open chat"
          >
            <MessageCircle size={22} />
            {hasUnread && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-charcoal-900"
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              height: isMinimized ? 'auto' : undefined,
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 right-8 z-50 w-[360px] md:w-[400px] shadow-luxury-lg"
            style={{ maxHeight: '85vh' }}
          >
            <div className="flex flex-col bg-charcoal-900/95 backdrop-blur-2xl border border-white/10 overflow-hidden h-full"
              style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-navy-950/50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-champagne-500/20 border border-champagne-500/30 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={14} className="text-champagne-400" />
                  </div>
                  <div>
                    <p className="text-sm font-body font-medium text-white">Renard Assistant</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-2xs text-white/40 font-body">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="w-7 h-7 flex items-center justify-center text-white/40 hover:text-white/70 transition-colors"
                  >
                    {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-7 h-7 flex items-center justify-center text-white/40 hover:text-white/70 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col flex-1 overflow-hidden"
                    style={{ maxHeight: '65vh' }}
                  >
                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-5 space-y-4 min-h-0" style={{ maxHeight: '320px' }}>
                      {messages.map((msg) => (
                        <Message key={msg.id} message={msg} />
                      ))}
                      {isTyping && <TypingIndicator />}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Actions */}
                    {messages.length === 1 && !isTyping && (
                      <div className="px-5 pb-3">
                        <p className="text-2xs text-white/30 font-body mb-2 tracking-wider uppercase">Quick actions</p>
                        <div className="grid grid-cols-2 gap-1.5">
                          {QUICK_ACTIONS.map((action) => (
                            <button
                              key={action}
                              onClick={() => handleQuickAction(action)}
                              className="flex items-center gap-1.5 text-left px-3 py-2 text-xs font-body text-white/60 hover:text-champagne-400 bg-white/3 hover:bg-white/5 border border-white/5 hover:border-champagne-500/20 transition-all duration-200"
                            >
                              <ChevronRight size={10} className="flex-shrink-0" />
                              {action}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Input */}
                    <div className="px-4 py-4 border-t border-white/5 bg-navy-950/30">
                      <div className="flex items-end gap-3">
                        <textarea
                          ref={inputRef}
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyDown={handleKeyDown}
                          placeholder="Type a message..."
                          rows={1}
                          className="flex-1 bg-white/5 border border-white/10 text-white/80 placeholder-white/25 text-sm font-body px-4 py-2.5 focus:outline-none focus:border-champagne-500/40 transition-colors resize-none"
                          style={{ minHeight: '42px', maxHeight: '100px' }}
                        />
                        <button
                          onClick={handleSend}
                          disabled={!input.trim() || isTyping}
                          className="w-10 h-10 bg-champagne-500 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-champagne-400 transition-colors duration-200 flex-shrink-0"
                        >
                          <Send size={15} />
                        </button>
                      </div>
                      <p className="text-2xs text-white/20 font-body mt-2 text-center">
                        Powered by Renard International AI
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}