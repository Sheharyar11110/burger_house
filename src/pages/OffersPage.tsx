import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Clock, Gift, Tag, Zap, Copy, Check, Flame, Percent, Coffee, Crown } from 'lucide-react'

const offersData = [
  {
    id: 1,
    title: "Buy 1 Get 1 Free",
    description: "On all classic burgers. Perfect for sharing with a friend!",
    code: "BOGO2024",
    discount: "50% OFF",
    validUntil: "2024-12-31",
    minOrder: "$10",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bgColor: "from-red-600 to-red-700",
    icon: Gift,
    terms: "Valid on Classic Burgers only. Cannot be combined with other offers."
  },
  {
    id: 2,
    title: "20% Off First Order",
    description: "New customers get 20% off on their first order above $15",
    code: "WELCOME20",
    discount: "20% OFF",
    validUntil: "2024-12-31",
    minOrder: "$15",
    image: "https://media.istockphoto.com/id/2205783545/photo/woman-choosing-a-slice-of-pizza-at-a-food-counter.webp?a=1&b=1&s=612x612&w=0&k=20&c=REnxjKgvfiu6-jGzc7rm0fvG-X_mDW0FtClC0pbgUJI=",
    bgColor: "from-yellow-500 to-yellow-600",
    icon: Percent,
    terms: "Valid for new customers only. One time use."
  },
  {
    id: 3,
    title: "Free Delivery",
    description: "Free delivery on all orders above $25. No code needed!",
    code: "FREEDEL",
    discount: "FREE",
    validUntil: "2024-12-31",
    minOrder: "$25",
    image: "https://images.unsplash.com/photo-1584824388178-1defc3484ce3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnJlZSUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww",
    bgColor: "from-red-600 to-yellow-500",
    icon: Zap,
    terms: "Automatic apply at checkout. Minimum order $25 required."
  },
  {
    id: 4,
    title: "Combo Special",
    description: "Any Burger + Fries + Drink for just $12.99",
    code: "COMBO24",
    discount: "Save $5",
    validUntil: "2024-12-31",
    minOrder: "$12.99",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bgColor: "from-yellow-500 to-red-600",
    icon: Coffee,
    terms: "Valid on selected combos. Cannot be combined with other offers."
  },
  {
    id: 5,
    title: "Family Feast",
    description: "4 Burgers + 2 Large Fries + 4 Drinks for just $39.99",
    code: "FAMILY",
    discount: "Save $15",
    validUntil: "2024-12-31",
    minOrder: "$39.99",
    image: "https://images.unsplash.com/photo-1561758033-7e924f619b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bgColor: "from-red-700 to-red-600",
    icon: Crown,
    terms: "Perfect for family of 4. Valid on all burgers."
  },
  {
    id: 6,
    title: "Late Night Special",
    description: "15% off on all orders between 10PM - 12AM",
    code: "LATENIGHT",
    discount: "15% OFF",
    validUntil: "2024-12-31",
    minOrder: "No minimum",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bgColor: "from-yellow-600 to-red-600",
    icon: Clock,
    terms: "Valid during late night hours only. Auto-applied."
  },
  {
    id: 7,
    title: "Birthday Special",
    description: "Free dessert on your birthday! Valid with valid ID",
    code: "HBD2024",
    discount: "FREE",
    validUntil: "2024-12-31",
    minOrder: "Any order",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bgColor: "from-red-600 to-yellow-500",
    icon: Gift,
    terms: "Valid on your birthday month. Must show ID at pickup."
  },
  {
    id: 8,
    title: "Student Discount",
    description: "10% off every order with valid student ID",
    code: "STUDENT",
    discount: "10% OFF",
    validUntil: "2024-12-31",
    minOrder: "No minimum",
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bgColor: "from-yellow-500 to-red-600",
    icon: Percent,
    terms: "Valid with valid student ID. Cannot be combined."
  }
]

const OffersPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const endOfDay = new Date(now)
      endOfDay.setHours(23, 59, 59, 999)
      
      const diff = endOfDay.getTime() - now.getTime()
      
      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    const timer = setInterval(() => {
      setTimeLeft({ 'daily': calculateTimeLeft() })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 py-16 mb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-white/5 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: [null, Math.random() * 100 - 50, 0],
                y: [null, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center"
            >
              <Flame className="w-12 h-12 text-red-600" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Hot <span className="text-yellow-400">Offers</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Grab these amazing deals before they're gone! New offers added weekly.
            </p>

            {/* Daily Deal Timer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 inline-block"
            >
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-4">
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="text-white font-medium">Daily Deals ending in</div>
                    <div className="text-2xl font-bold text-yellow-400 font-mono">
                      {timeLeft['daily'] || '23:59:59'}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Featured Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4"
                >
                  ⚡ LIMITED TIME OFFER
                </motion.div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-2">50% OFF</h2>
                <p className="text-xl mb-4">on all combo meals</p>
                <p className="text-white/90 max-w-md">
                  Use code <span className="font-mono font-bold bg-white/20 px-3 py-1 rounded-lg">COMBO50</span> at checkout
                </p>
              </div>
              
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Order Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyToClipboard('COMBO50')}
                  className="px-8 py-4 bg-white/20 backdrop-blur text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
                >
                  {copiedCode === 'COMBO50' ? (
                    <>
                      <Check className="w-5 h-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      Copy Code
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Offer Categories */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {['All Offers', 'BOGO', '% Discount', 'Free Items', 'Combo Deals'].map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap ${
                index === 0
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {offersData.map((offer, index) => {
            const Icon = offer.icon
            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              >
                <div className={`relative h-48 bg-gradient-to-r ${offer.bgColor}`}>
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <span className="text-2xl font-bold">{offer.discount}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{offer.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Tag className="w-4 h-4 text-red-600" />
                      <span className="font-mono font-bold text-gray-700">Code: {offer.code}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-red-600" />
                      <span className="text-gray-600">Valid until {offer.validUntil}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Gift className="w-4 h-4 text-red-600" />
                      <span className="text-gray-600">Min. order: {offer.minOrder}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mb-4">{offer.terms}</p>

                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyToClipboard(offer.code)}
                      className="flex-1 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                    >
                      {copiedCode === offer.code ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy Code
                        </>
                      )}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      Claim
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* How to Use Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            How to <span className="text-yellow-500">Use</span> Offers
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Browse Offers", description: "Find the best deals that suit you" },
              { step: 2, title: "Copy Code", description: "Click copy to save the promo code" },
              { step: 3, title: "Add Items", description: "Add eligible items to your cart" },
              { step: 4, title: "Apply at Checkout", description: "Paste code and enjoy savings" }
            ].map((step) => (
              <motion.div
                key={step.step}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terms & Conditions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          <p>* Terms and conditions apply to all offers. Offers cannot be combined.</p>
          <p>** Offers valid until stock lasts or as mentioned.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default OffersPage