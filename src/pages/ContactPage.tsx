import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, HelpCircle, Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const faqs = [
    {
      question: "What are your delivery hours?",
      answer: "We deliver from 10 AM to 11 PM, 7 days a week. Late night delivery available at select locations."
    },
    {
      question: "Do you offer catering services?",
      answer: "Yes! We offer catering for parties, events, and corporate gatherings. Contact us for custom quotes."
    },
    {
      question: "How can I apply for a job?",
      answer: "Visit our Careers page or send your resume to careers@burgerhouse.com"
    },
    {
      question: "Do you have gluten-free options?",
      answer: "Yes, we offer gluten-free buns and several gluten-free menu items."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 py-16 mb-12">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            Get in <span className="text-yellow-400">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-center mt-4 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+1 (555) 123-4567",
                sub: "Mon-Sun, 10AM-11PM",
                color: "from-red-600 to-red-500"
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "info@burgerhouse.com",
                sub: "support@burgerhouse.com",
                color: "from-yellow-500 to-yellow-400"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "123 Burger Street",
                sub: "Food City, FC 12345",
                color: "from-red-600 to-yellow-500"
              },
              {
                icon: Clock,
                title: "Working Hours",
                content: "Mon-Sun: 10AM - 11PM",
                sub: "24/7 Delivery Available",
                color: "from-yellow-500 to-red-600"
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} p-0.5`}>
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                    <p className="text-sm text-gray-500">{item.sub}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, color: "bg-blue-600" },
                  { icon: Twitter, color: "bg-sky-500" },
                  { icon: Instagram, color: "bg-pink-600" },
                  { icon: Youtube, color: "bg-red-600" },
                  { icon: MessageCircle, color: "bg-green-500" }
                ].map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <HelpCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 text-green-700 rounded-xl text-center"
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-red-600" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage