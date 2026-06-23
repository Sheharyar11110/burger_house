import { motion } from 'framer-motion'
import { Mail, Send, Gift } from 'lucide-react'
import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail('')
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-500 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-white/5 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * 200 - 100, 0],
              y: [null, Math.random() * 200 - 100, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center"
          >
            <Gift className="w-10 h-10 text-red-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get <span className="text-yellow-400">20% Off</span> Your First Order
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-white/90 mb-8"
          >
            Subscribe to our newsletter and get exclusive deals & offers
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-12 pr-4 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-400 text-red-600 font-bold rounded-full flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300"
            >
              Subscribe
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 p-3 bg-green-500 text-white rounded-full"
            >
              Thanks for subscribing! Check your email for the discount code.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter