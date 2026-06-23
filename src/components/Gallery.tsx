import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    likes: 1234,
    comments: 89,
    caption: "Classic Cheeseburger ❤️"
  },
  {
    id: 2,
    image: "https://plus.unsplash.com/premium_photo-1738431707796-15850af48b26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RG91YmxlJTIwYmFjb24lMjBibGlzcyUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    likes: 2345,
    comments: 156,
    caption: "Double Bacon Bliss 🤤"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BpY3klMjBjaGlja2VuJTIwYnVyZ2VyfGVufDB8fDB8fHww",
    likes: 1876,
    comments: 98,
    caption: "Spicy Chicken 🔥"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    likes: 987,
    comments: 67,
    caption: "Mushroom Swiss 🍄"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    likes: 1543,
    comments: 112,
    caption: "BBQ Pulled Pork 🍖"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    likes: 876,
    comments: 45,
    caption: "Veggie Delight 🌱"
  }
]

const Gallery = () => {
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
          <span className="text-red-600 font-semibold text-lg">Instagram</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            <span className="text-yellow-500">Food</span> Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow us @burgerhouse for more delicious content
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              >
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 fill-white" />
                      <span className="text-sm">{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{item.comments}</span>
                    </div>
                  </div>
                  <p className="text-sm">{item.caption}</p>
                </div>
                
                <div className="absolute top-4 right-4">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery