import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const totalItems = useCartStore(state => state.getTotalItems())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-gradient-to-r from-red-600 to-red-500'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"
            >
              <span className="text-red-600 font-bold text-xl">B</span>
            </motion.div>
            <span className={`font-bold text-2xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Burger<span className="text-yellow-400">House</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
            <NavLink to="/menu" isScrolled={isScrolled}>Menu</NavLink>
            <NavLink to="/offers" isScrolled={isScrolled}>Offers</NavLink>
            <NavLink to="/locations" isScrolled={isScrolled}>Locations</NavLink>
            <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
              }`}
            >
              <Search className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
              }`}
            >
              <User className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            </motion.button>

            <Link to="/cart">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <div className={`p-2 rounded-full ${
                  isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
                }`}>
                  <ShoppingBag className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                </div>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-red-600"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/20"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-t"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</MobileNavLink>
            <MobileNavLink to="/offers" onClick={() => setIsMobileMenuOpen(false)}>Offers</MobileNavLink>
            <MobileNavLink to="/locations" onClick={() => setIsMobileMenuOpen(false)}>Locations</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}

const NavLink = ({ to, children, isScrolled }: { to: string; children: React.ReactNode; isScrolled: boolean }) => (
  <Link to={to}>
    <motion.span
      whileHover={{ y: -2 }}
      className={`font-medium transition-colors ${
        isScrolled 
          ? 'text-gray-700 hover:text-red-600' 
          : 'text-white hover:text-yellow-400'
      }`}
    >
      {children}
    </motion.span>
  </Link>
)

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link to={to} onClick={onClick}>
    <motion.span
      whileHover={{ x: 10 }}
      className="block py-2 text-gray-700 hover:text-red-600 font-medium"
    >
      {children}
    </motion.span>
  </Link>
)

export default Navbar