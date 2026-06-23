import { motion } from 'framer-motion'
import { Plus, Star, Clock, Flame } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

const menuItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Beef patty, cheddar cheese, lettuce, tomato, special sauce",
    price: 8.99,
    rating: 4.5,
    time: "15-20 min",
    calories: "650",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    spicy: false
  },
  {
    id: 2,
    name: "Double Bacon Burger",
    description: "Double beef patty, crispy bacon, smoked cheese, caramelized onions",
    price: 12.99,
    rating: 5,
    time: "20-25 min",
    calories: "950",
    image: "https://media.istockphoto.com/id/1216665897/photo/burger-with-sesame-bun-with-onion-rings-and-juicy-fried-meat-on-a-white-brick-wall-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Ck3Y7Ih-aYZoZYFIOFzA7Pn8PtXaXU8-Y8-PNIGeFU=  ",
    badge: "Chef's Special",
    spicy: false
  },
  {
    id: 3,
    name: "Spicy Chicken Burger",
    description: "Crispy chicken breast, pepper jack cheese, jalapeños, spicy mayo",
    price: 9.99,
    rating: 4,
    time: "15-20 min",
    calories: "550",
    image: "https://plus.unsplash.com/premium_photo-1683121323997-37c33730ede8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Spicy",
    spicy: true
  },
  {
    id: 4,
    name: "Mushroom Swiss Burger",
    description: "Beef patty, sautéed mushrooms, Swiss cheese, truffle aioli",
    price: 11.99,
    rating: 4.5,
    time: "18-22 min",
    calories: "720",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "New",
    spicy: false
  },
  {
    id: 5,
    name: "BBQ Pulled Pork Burger",
    description: "Pulled pork, BBQ sauce, coleslaw, crispy onions",
    price: 10.99,
    rating: 4,
    time: "20-25 min",
    calories: "820",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Signature",
    spicy: false
  },
  {
    id: 6,
    name: "Veggie Delight",
    description: "Plant-based patty, avocado, roasted peppers, pesto sauce",
    price: 9.99,
    rating: 4,
    time: "12-15 min",
    calories: "480",
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Vegetarian",
    spicy: false
  }
]

const MenuSection = () => {
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
          <span className="text-red-600 font-semibold text-lg">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Delicious <span className="text-yellow-500">Burgers</span> For You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide variety of mouth-watering burgers, made fresh to order
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-yellow-400 text-red-600 font-semibold rounded-full text-sm">
                    {item.badge}
                  </span>
                </div>
                {item.spicy && (
                  <div className="absolute top-4 right-4">
                    <Flame className="w-6 h-6 text-red-500" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{item.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4" />
                    <span>{item.calories} cal</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600">${item.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addItem(item)}
                    className="px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold rounded-full flex items-center gap-2 hover:shadow-lg transition-shadow"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-yellow-400 text-red-600 font-bold rounded-full hover:shadow-xl transition-all duration-300"
          >
            View Full Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default MenuSection