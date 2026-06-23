import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Flame, Star, Truck, Clock, Award, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-yellow-500 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d=%22M54%206%20L54%2054%20L6%2054%22%20stroke=%22rgba(255,255,255,0.1)%22%20stroke-width=%221%22%20fill=%22none%22/%3E%3C/svg%3E')] opacity-20" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, -100, 0],
              x: [null, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            style={{ y: y1, opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30 shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Flame className="w-5 h-5 text-yellow-400" />
              </motion.div>
              <span className="text-white font-medium">Hot & Fresh Daily 🔥</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Taste the
              <span className="text-yellow-400 block relative">
                Perfect Burger
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <path
                    d="M10,6 Q150,12 290,6"
                    stroke="#FFC72C"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/90 mb-8 max-w-lg leading-relaxed"
            >
              Experience the juiciest burgers in town, made with 100% fresh beef and our secret signature sauce. 
              Every bite is a celebration of flavor!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/menu">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-yellow-400 text-red-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10">Order Now</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              
              <Link to="/offers">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 relative overflow-hidden group"
                >
                  <span className="relative z-10">View Offers</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12"
            >
              {[
                { icon: Truck, value: '500+', label: 'Daily Orders' },
                { icon: Award, value: '50+', label: 'Burger Varieties' },
                { icon: Clock, value: '24/7', label: 'Delivery' }
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-yellow-400" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mt-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-white/80">Trusted by 10k+ customers</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Burger Image with 3D Effect */}
          <motion.div
            style={{ y: y2, scale }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Burger Image with 3D Tilt */}
            <motion.div
              animate={{
                rotateY: mousePosition.x,
                rotateX: -mousePosition.y,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              className="relative z-10"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Delicious Burger"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                />
                
                {/* Glowing Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent" />
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 2,
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Badges - Redesigned */}
            <motion.div
              animate={{ 
                rotate: 360,
                y: [0, -10, 0],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl"
            >
              <div className="text-center transform -rotate-12">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl font-bold text-red-600"
                >
                  50%
                </motion.div>
                <div className="text-sm font-bold text-red-600">OFF</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-5 -left-5 bg-white/90 backdrop-blur p-4 rounded-xl shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute" />
                  <div className="w-3 h-3 bg-green-500 rounded-full relative" />
                </div>
                <div>
                  <span className="font-bold text-gray-900">Free Delivery</span>
                  <p className="text-xs text-gray-600">On orders above $20</p>
                </div>
              </div>
            </motion.div>

            {/* New Badge - Left Side */}
            <motion.div
              animate={{ 
                x: [0, 10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-20 -left-10 bg-white/90 backdrop-blur p-3 rounded-lg shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-600" />
                <span className="font-bold text-gray-900">Spicy</span>
              </div>
            </motion.div>

            {/* Floating Ingredients */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-5 left-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-xl"
            >
              <span className="text-sm font-medium text-gray-900">🥬 Fresh Lettuce</span>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, -10, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 -right-5 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-xl"
            >
              <span className="text-sm font-medium text-gray-900">🧀 Extra Cheese</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/80 text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-white/80" />
        </div>
      </motion.div>

      {/* Wave Divider with Animation */}
      <div className="absolute bottom-0 left-0 w-full">
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                      
                      M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                      
                      M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              repeatCount="indefinite"
              fill="freeze"
            />
          </path>
        </motion.svg>
      </div>
    </section>
  )
}

export default Hero