import { motion } from 'framer-motion'
import { Search, ShoppingBag, CreditCard, Bike } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: "Choose Your Meal",
    description: "Browse our menu and select your favorite burger",
    color: "from-red-600 to-red-500"
  },
  {
    icon: ShoppingBag,
    title: "Add to Cart",
    description: "Customize your order and add items to cart",
    color: "from-yellow-500 to-yellow-400"
  },
  {
    icon: CreditCard,
    title: "Payment",
    description: "Secure checkout with multiple payment options",
    color: "from-red-600 to-yellow-500"
  },
  {
    icon: Bike,
    title: "Fast Delivery",
    description: "Get your food delivered hot and fresh",
    color: "from-yellow-500 to-red-600"
  }
]

const HowItWorks = () => {
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
          <span className="text-red-600 font-semibold text-lg">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            How It <span className="text-yellow-500">Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get your favorite food in just 4 easy steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} p-0.5 relative z-10`}
                  >
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <Icon className="w-12 h-12 text-red-600" />
                    </div>
                  </motion.div>

                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 mx-auto mb-2 bg-red-600 text-white rounded-full flex items-center justify-center font-bold"
                    >
                      {index + 1}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks