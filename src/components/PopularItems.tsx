import { motion } from 'framer-motion'
import { Star, Flame, Heart } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

const popularItems = [
  {
    id: 7,
    name: "Mega Beast Burger",
    description: "Triple beef patty, triple cheese, bacon, special sauce",
    price: 15.99,
    rating: 5,
    orders: 1250,
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVnYSUyMEJlYXN0JTIwYnVyZ2VyfGVufDB8fDB8fHww",
    badge: "Most Popular"
  },
  {
    id: 8,
    name: "Crispy Chicken Tower",
    description: "Double chicken patty, lettuce, mayo, cheese",
    price: 13.99,
    rating: 4.5,
    orders: 980,
    image: "https://media.istockphoto.com/id/2256268620/photo/a-towering-stack-of-crispy-fried-chicken-bao-buns-with-sauce-and-lettuce-held-by-two-hands-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=aH8IoVPNF_uW--LjFBSls4VjvW9QANHRCdXixYHjOqE=",
    badge: "Fan Favorite"
  },
  {
    id: 9,
    name: "Veggie Supreme",
    description: "Plant-based patty, avocado, grilled veggies",
    price: 11.99,
    rating: 4.5,
    orders: 750,
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Top Rated"
  },
  {
    id: 10,
    name: "BBQ Bacon Blast",
    description: "Beef patty, bacon, BBQ sauce, onion rings",
    price: 14.99,
    rating: 5,
    orders: 1100,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Chef's Choice"
  }
]

const PopularItems = () => {
  const addItem = useCartStore(state => state.addItem)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-red-600 font-semibold text-lg">Trending Now</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Most <span className="text-yellow-500">Popular</span> Items
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy customers who love our signature burgers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {popularItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-4 flex gap-4 group"
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                className="relative w-32 h-32 flex-shrink-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-xl"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center"
                >
                  <Flame className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold ml-1">{item.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({item.orders} orders)</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-yellow-400 text-red-600 text-xs font-bold rounded-full">
                    {item.badge}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-xl font-bold text-red-600">${item.price}</span>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Heart className="w-4 h-4 text-gray-400 hover:text-red-600 transition-colors" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addItem(item)}
                      className="px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularItems