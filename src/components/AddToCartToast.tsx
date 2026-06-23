import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

export const AddToCartToast = () => {
  const { lastAddedItem, clearLastAddedItem, getTotalItems } = useCartStore()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (lastAddedItem) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => clearLastAddedItem(), 300) // Wait for animation to complete
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [lastAddedItem, clearLastAddedItem])

  return (
    <AnimatePresence>
      {isVisible && lastAddedItem && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-green-100 overflow-hidden">
            {/* Progress Bar */}
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-1 bg-gradient-to-r from-green-500 to-green-400"
            />

            <div className="p-4">
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold"
                  >
                    {getTotalItems()}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">Added to Cart!</h3>
                  <p className="text-sm text-gray-600">
                    {lastAddedItem.name} × {lastAddedItem.quantity}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-2">
                    <Link to="/cart" className="flex-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-3 py-1.5 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        View Cart
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setIsVisible(false)
                        setTimeout(() => clearLastAddedItem(), 300)
                      }}
                      className="px-3 py-1.5 border border-gray-200 text-gray-600 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Continue
                    </motion.button>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => {
                    setIsVisible(false)
                    setTimeout(() => clearLastAddedItem(), 300)
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Summary */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3 pt-3 border-t border-gray-100"
              >
                <Link to="/cart">
                  <div className="flex items-center justify-between text-sm group cursor-pointer">
                    <span className="text-gray-600 group-hover:text-red-600 transition-colors">
                      {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in cart
                    </span>
                    <span className="font-semibold text-red-600 group-hover:translate-x-1 transition-transform">
                      View Cart →
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}