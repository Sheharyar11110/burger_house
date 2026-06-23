import { motion } from 'framer-motion'
import { Truck, Clock, Award, Heart, Shield, CreditCard } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free delivery on orders above $20",
    color: "from-red-500 to-yellow-500"
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Always open for your cravings",
    color: "from-yellow-500 to-red-500"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "100% fresh ingredients daily",
    color: "from-red-500 to-yellow-500"
  },
  {
    icon: Heart,
    title: "Healthy Options",
    description: "Low-calorie alternatives available",
    color: "from-yellow-500 to-red-500"
  },
  {
    icon: Shield,
    title: "Food Safety",
    description: "Strict hygiene standards",
    color: "from-red-500 to-yellow-500"
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Multiple payment options",
    color: "from-yellow-500 to-red-500"
  }
]

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-red-600 font-semibold text-lg">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            We Deliver <span className="text-yellow-500">Excellence</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the best fast food service with our premium features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.color} p-0.5`}
                >
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-red-600 group-hover:text-yellow-500 transition-colors" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features