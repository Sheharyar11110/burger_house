import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import PopularItems from './components/PopularItems'
import MenuSection from './components/MenuSection'
import Offers from './components/Offers'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import CartPage from './pages/CartPage'
import MenuPage from './pages/MenuPage'
import OffersPage from './pages/OffersPage'
import LocationsPage from './pages/LocationPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Hero />
                <Features />
                <Stats />
                <PopularItems />
                <MenuSection />
                <Offers />
                <HowItWorks />
                <Testimonials />
                <Gallery />
                <Newsletter />
                <Footer />
              </motion.div>
            } />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App