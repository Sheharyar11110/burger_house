import { motion } from 'framer-motion'
import { Clock, Gift, Tag, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const offers = [
  {
    id: 1,
    title: "Buy 1 Get 1 Free",
    description: "On all classic burgers. Every Monday & Tuesday",
    code: "BOGO2024",
    validUntil: "2024-12-31",
    bgImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-red-600 to-red-700"
  },
  {
    id: 2,
    title: "20% Off First Order",
    description: "New customers get 20% off on orders above $15",
    code: "WELCOME20",
    validUntil: "2024-12-31",
    bgImage: "https://images.unsplash.com/photo-1553979459-d2229c33e428?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    id: 3,
    title: "Free Delivery",
    description: "Free delivery on all orders above $25",
    code: "FREEDEL",
    validUntil: "2024-12-31",
    bgImage: "https://images.unsplash.com/photo-1606755962773-d324e0df1307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-red-600 to-yellow-500"
  },
  {
    id: 4,
    title: "Combo Special",
    description: "Burger + Fries + Drink for just $12.99",
    code: "COMBO24",
    validUntil: "2024-12-31",
    bgImage: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-yellow-500 to-red-600"
  }
]

const Offers = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-red-600 font-semibold text-lg">Special Offers</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Hot <span className="text-yellow-500">Deals</span> For You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Grab these amazing offers before they're gone
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative overflow-hidden rounded-2xl shadow-xl group"
            >
              <div className="absolute inset-0">
                <img
                  src={offer.bgImage}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${offer.color} opacity-90`}></div>
              </div>

              <div className="relative p-8 text-white">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full"
                />
                
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-6 h-6" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Limited Time</span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-white/90 mb-4">{offer.description}</p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span className="font-mono font-bold">{offer.code}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Valid until {offer.validUntil}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-red-600 font-bold rounded-full flex items-center gap-2 hover:shadow-xl transition-all duration-300 group"
                >
                  Claim Offer
                  <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link to="/offers">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-red-600 border-2 border-red-600 rounded-full font-semibold hover:bg-red-50 transition-colors"
            >
              View All Offers
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Offers