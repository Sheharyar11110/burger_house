import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Food Critic",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    content: "Best burgers in town! The meat is always fresh and juicy. Their signature sauce is absolutely incredible.",
    rating: 5,
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    content: "Fast delivery and the food always arrives hot. Their customer service is amazing! Highly recommended.",
    rating: 5,
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    content: "The variety of burgers is impressive. Love their vegetarian options too! Definitely my go-to spot.",
    rating: 4,
    date: "3 days ago"
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Food Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108777-466fd6c2439c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    content: "Great value for money. The combo deals are awesome and the quality is consistently good.",
    rating: 5,
    date: "5 days ago"
  }
]

const Testimonials = () => {
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
          <span className="text-red-600 font-semibold text-lg">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            What Our <span className="text-yellow-500">Customers</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center"
                  >
                    <Quote className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                    <span className="text-xs text-gray-500">{testimonial.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials