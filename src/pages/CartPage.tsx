import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, CreditCard, Wallet, Landmark, Smartphone, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import { Link } from 'react-router-dom'
import { useState } from 'react'

type PaymentMethod = 'card' | 'paypal' | 'bank' | 'mobile' | null
type ToastType = 'success' | 'error' | 'info' | null

interface Toast {
  type: ToastType
  message: string
}

const CartPage = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore()
  const totalPrice = getTotalPrice()
  
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [toast, setToast] = useState<Toast | null>(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const paymentMethods = [
    {
      id: 'card' as const,
      name: 'Credit / Debit Card',
      icon: CreditCard,
      description: 'Pay with Visa, MasterCard, or American Express',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      processingTime: 'Instant'
    },
    {
      id: 'paypal' as const,
      name: 'PayPal',
      icon: Wallet,
      description: 'Fast and secure payment with PayPal',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      processingTime: 'Instant'
    },
    {
      id: 'bank' as const,
      name: 'Bank Transfer',
      icon: Landmark,
      description: 'Direct bank transfer - may take 1-2 business days',
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      processingTime: '1-2 days'
    },
    {
      id: 'mobile' as const,
      name: 'Mobile Payment',
      icon: Smartphone,
      description: 'Pay with Apple Pay, Google Pay, or Samsung Pay',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      processingTime: 'Instant'
    }
  ]

  const showToast = (type: ToastType, message: string) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 3000)
  }

  const handlePaymentSelect = (method: PaymentMethod) => {
    setSelectedPayment(method)
  }

  const handleProceedToCheckout = () => {
    setShowPaymentModal(true)
  }

  const handlePaymentConfirm = () => {
    if (!selectedPayment) {
      showToast('error', 'Please select a payment method')
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setShowPaymentModal(false)
      
      // Show success message
      const selectedMethod = paymentMethods.find(m => m.id === selectedPayment)
      showToast('success', `Payment successful with ${selectedMethod?.name}! Your order has been placed.`)
      
      // Clear cart after successful payment
      setTimeout(() => {
        clearCart()
      }, 2000)
    }, 2000)
  }

  const getToastIcon = (type: ToastType) => {
    switch(type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />
      case 'info':
        return <AlertCircle className="w-5 h-5 text-blue-500" />
      default:
        return null
    }
  }

  const getToastBgColor = (type: ToastType) => {
    switch(type) {
      case 'success':
        return 'bg-green-50 border-green-200'
      case 'error':
        return 'bg-red-50 border-red-200'
      case 'info':
        return 'bg-blue-50 border-blue-200'
      default:
        return ''
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-xl shadow-lg border ${getToastBgColor(toast.type)} flex items-center gap-3 min-w-[300px] max-w-md`}
          >
            {getToastIcon(toast.type)}
            <p className="text-gray-800 font-medium flex-1">{toast.message}</p>
            <button
              onClick={() => setToast(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <XCircle className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your <span className="text-yellow-500">Cart</span>
          </h1>
          <p className="text-gray-600 mt-2">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items yet</p>
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Browse Menu
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white rounded-2xl shadow-lg p-6 mb-4 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-xl"
                      />
                      
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">${item.price} each</p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </motion.button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </motion.button>
                            
                            <motion.span 
                              key={item.quantity}
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              className="font-semibold w-8 text-center"
                            >
                              {item.quantity}
                            </motion.span>
                            
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </motion.button>
                          </div>
                          
                          <motion.span 
                            key={item.price * item.quantity}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="text-xl font-bold text-red-600"
                          >
                            ${(item.price * item.quantity).toFixed(2)}
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <div className="flex gap-4">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={clearCart}
                  className="mt-4 px-6 py-3 text-red-600 border-2 border-red-600 rounded-xl font-semibold hover:bg-red-50 transition-colors"
                >
                  Clear Cart
                </motion.button>

                <Link to="/menu" className="mt-4 flex-1">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 text-gray-600 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Continue Shopping
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <motion.span 
                      key={totalPrice}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="font-semibold"
                    >
                      ${totalPrice.toFixed(2)}
                    </motion.span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span className="font-semibold">$2.99</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (10%)</span>
                    <span className="font-semibold">${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <motion.span 
                        key={totalPrice + 2.99 + totalPrice * 0.1}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="text-red-600"
                      >
                        ${(totalPrice + 2.99 + totalPrice * 0.1).toFixed(2)}
                      </motion.span>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleProceedToCheckout}
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <CreditCard className="w-4 h-4" />
                  <span>Secure Checkout</span>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By placing your order, you agree to our Terms of Service
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Payment Method Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Select Payment Method
                  </h2>
                  <button
                    onClick={() => setShowPaymentModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <XCircle className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                {/* Order Summary Mini */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="text-2xl font-bold text-red-600">
                      ${(totalPrice + 2.99 + totalPrice * 0.1).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Payment Methods Grid */}
                <div className="grid gap-4 mb-6">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon
                    const isSelected = selectedPayment === method.id
                    
                    return (
                      <motion.div
                        key={method.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handlePaymentSelect(method.id)}
                        className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          isSelected 
                            ? `border-red-600 bg-gradient-to-r ${method.bgColor}` 
                            : 'border-gray-200 hover:border-red-300'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} p-0.5`}>
                            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                              <Icon className={`w-6 h-6 ${isSelected ? 'text-red-600' : 'text-gray-700'}`} />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900">{method.name}</h3>
                            <p className="text-sm text-gray-600">{method.description}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              Processing: {method.processingTime}
                            </p>
                          </div>

                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle className="w-4 h-4 text-white" />
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePaymentConfirm}
                    disabled={isProcessing || !selectedPayment}
                    className={`flex-1 py-4 rounded-xl font-bold text-white transition-all duration-300 ${
                      isProcessing || !selectedPayment
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-red-600 to-yellow-500 hover:shadow-lg'
                    }`}
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Processing...
                      </div>
                    ) : (
                      'Confirm Payment'
                    )}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowPaymentModal(false)}
                    className="px-6 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </motion.button>
                </div>

                {/* Security Badge */}
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                
                  <span>Your payment information is secure and encrypted</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CartPage