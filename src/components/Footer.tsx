import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-2xl">
                Burger<span className="text-yellow-400">House</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Serving the juiciest burgers in town since 2010. Quality ingredients, amazing taste, and fast delivery.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Menu', 'Offers', 'Locations', 'Contact'].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Burger Street, Food City, FC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-400">info@burgerhouse.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-400">Mon-Sun: 10AM - 11PM</span>
              </li>
            </ul>
          </motion.div>

          {/* App Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4">Download Our App</h3>
            <p className="text-gray-400 mb-4">Get exclusive offers and easy ordering</p>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-3 bg-gray-800 rounded-xl flex items-center gap-3 hover:bg-gray-700 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 9.48L4.4 2.28C3.8 1.96 3.1 2 2.6 2.4L12.3 12.1L17.6 9.48Z" />
                  <path d="M2.6 21.6c.2.2.4.3.7.4.3.1.6.1.9 0l13.4-7.2-5.3-5.3L2.6 21.6z" />
                  <path d="M21.8 10.4l-3.5-1.9-5.4 5.4 5.4 5.4 3.5-1.9c.8-.4 1.2-1.2 1.2-2V12.4c0-.8-.4-1.6-1.2-2z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-3 bg-gray-800 rounded-xl flex items-center gap-3 hover:bg-gray-700 transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.2 12.4c0-1-.3-1.9-.9-2.7l1.8-1.8-1.4-1.4-1.8 1.8c-.8-.6-1.7-.9-2.7-.9-1.9 0-3.5 1.3-4 3H6.3c-.4 0-.8.3-1 .7-.1.4-.1.8.2 1.1L8 15.2c-.4.7-.6 1.5-.6 2.3 0 1.7.9 3.2 2.3 4.1-.1.2-.1.4-.1.6 0 .6.2 1.2.6 1.7.4.5 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.5.6-1.1.6-1.7 0-.2 0-.4-.1-.6 1.4-.9 2.3-2.4 2.3-4.1 0-.8-.2-1.6-.6-2.3l2.3-2.3c.6.6 1.3.9 2.1.9 1.7 0 3-1.3 3-3z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2026 BurgerHouse. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-yellow-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer