import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Star, Clock, Flame, X, ChevronDown, Grid3x3, List, SlidersHorizontal } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

// Full menu data with categories
const menuData = {
  burgers: [
    {
      id: 1,
      name: "Classic Cheeseburger",
      description: "Beef patty, cheddar cheese, lettuce, tomato, pickles, onions, special sauce",
      price: 8.99,
      rating: 4.5,
      reviews: 1250,
      time: "15-20 min",
      calories: "650",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Bestseller",
      spicy: false,
      vegetarian: false,
      popular: true
    },
    {
      id: 2,
      name: "Double Bacon Burger",
      description: "Double beef patty, crispy bacon, smoked cheese, caramelized onions, BBQ sauce",
      price: 12.99,
      rating: 5,
      reviews: 2100,
      time: "20-25 min",
      calories: "950",
      image: "https://media.istockphoto.com/id/1216665897/photo/burger-with-sesame-bun-with-onion-rings-and-juicy-fried-meat-on-a-white-brick-wall-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Ck3Y7Ih-aYZoZYFIOFzA7Pn8PtXaXU8-Y8-PNIGeFU=",
      badge: "Chef's Special",
      spicy: false,
      vegetarian: false,
      popular: true
    },
    {
      id: 3,
      name: "Spicy Chicken Burger",
      description: "Crispy chicken breast, pepper jack cheese, jalapeños, spicy mayo, lettuce",
      price: 9.99,
      rating: 4,
      reviews: 980,
      time: "15-20 min",
      calories: "550",
      image: "https://plus.unsplash.com/premium_photo-1683121323997-37c33730ede8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Spicy",
      spicy: true,
      vegetarian: false,
      popular: false
    },
    {
      id: 4,
      name: "Mushroom Swiss Burger",
      description: "Beef patty, sautéed mushrooms, Swiss cheese, truffle aioli, arugula",
      price: 11.99,
      rating: 4.5,
      reviews: 750,
      time: "18-22 min",
      calories: "720",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "New",
      spicy: false,
      vegetarian: false,
      popular: true
    },
    {
      id: 5,
      name: "BBQ Pulled Pork Burger",
      description: "Pulled pork, BBQ sauce, coleslaw, crispy onions, brioche bun",
      price: 10.99,
      rating: 4,
      reviews: 890,
      time: "20-25 min",
      calories: "820",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Signature",
      spicy: false,
      vegetarian: false,
      popular: false
    },
    {
      id: 6,
      name: "Veggie Delight",
      description: "Plant-based patty, avocado, roasted peppers, pesto sauce, spinach",
      price: 9.99,
      rating: 4,
      reviews: 620,
      time: "12-15 min",
      calories: "480",
      image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Vegetarian",
      spicy: false,
      vegetarian: true,
      popular: false
    },
    {
      id: 7,
      name: "Mega Beast Burger",
      description: "Triple beef patty, triple cheese, bacon, fried egg, special sauce",
      price: 15.99,
      rating: 5,
      reviews: 1500,
      time: "25-30 min",
      calories: "1250",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "King Size",
      spicy: false,
      vegetarian: false,
      popular: true
    },
    {
      id: 8,
      name: "Jalapeño Kick Burger",
      description: "Beef patty, pepper jack cheese, jalapeños, spicy salsa, nacho chips",
      price: 10.99,
      rating: 4.5,
      reviews: 780,
      time: "18-22 min",
      calories: "680",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Extra Spicy",
      spicy: true,
      vegetarian: false,
      popular: false
    }
  ],
  chicken: [
    {
      id: 9,
      name: "Crispy Chicken Sandwich",
      description: "Buttermilk fried chicken, pickles, honey butter, brioche bun",
      price: 8.99,
      rating: 4.5,
      reviews: 890,
      time: "15-18 min",
      calories: "580",
      image: "https://images.unsplash.com/photo-1728774283140-7b28a5045502?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q3Jpc3B5JTIwY2hpY2tlbiUyMHNhbmR3aXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      badge: "Popular",
      spicy: false
    },
    {
      id: 10,
      name: "Buffalo Wings",
      description: "8 pieces, served with ranch or blue cheese dressing",
      price: 11.99,
      rating: 4.5,
      reviews: 1200,
      time: "20-25 min",
      calories: "720",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Spicy",
      spicy: true
    },
    {
      id: 11,
      name: "Chicken Tenders",
      description: "4 pieces, served with honey mustard or BBQ sauce",
      price: 9.99,
      rating: 4,
      reviews: 650,
      time: "12-15 min",
      calories: "520",
      image: "https://images.unsplash.com/photo-1562967915-92ae0c320a01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Kids Favorite",
      spicy: false
    }
  ],
  fries: [
    {
      id: 12,
      name: "Classic Fries",
      description: "Crispy golden fries with sea salt",
      price: 3.99,
      rating: 4,
      reviews: 1500,
      time: "8-10 min",
      calories: "380",
      image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Classic"
    },
    {
      id: 13,
      name: "Cheese Fries",
      description: "Loaded with cheddar cheese sauce and bacon bits",
      price: 5.99,
      rating: 4.5,
      reviews: 980,
      time: "10-12 min",
      calories: "520",
      image: "https://images.unsplash.com/photo-1609530127564-bee93ebe1c9e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      badge: "Cheesy"
    },
    {
      id: 14,
      name: "Sweet Potato Fries",
      description: "Served with chipotle mayo dipping sauce",
      price: 4.99,
      rating: 4,
      reviews: 550,
      time: "10-12 min",
      calories: "420",
      image: "https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3dlZXQlMjBwb3RhdG8lMjBmcmllc3xlbnwwfHwwfHx8MA%3D%3D",
      badge: "Healthy"
    }
  ],
  drinks: [
    {
      id: 15,
      name: "Soft Drinks",
      description: "Coca-Cola, Sprite, Fanta, Diet Coke",
      price: 1.99,
      rating: 4,
      reviews: 2000,
      time: "2-3 min",
      calories: "150",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Refillable"
    },
    {
      id: 16,
      name: "Milkshakes",
      description: "Vanilla, Chocolate, Strawberry, Caramel",
      price: 4.99,
      rating: 5,
      reviews: 850,
      time: "5-7 min",
      calories: "420",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Premium"
    }
  ],
  desserts: [
    {
      id: 17,
      name: "Chocolate Brownie",
      description: "Warm brownie with vanilla ice cream",
      price: 5.99,
      rating: 4.5,
      reviews: 720,
      time: "8-10 min",
      calories: "450",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      badge: "Sweet"
    },
    {
      id: 18,
      name: "Apple Pie",
      description: "Classic apple pie with cinnamon",
      price: 3.99,
      rating: 4,
      reviews: 430,
      time: "8-10 min",
      calories: "320",
      image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXBwbGUlMjBwaWV8ZW58MHx8MHx8fDA%3D",
      badge: "Homemade"
    }
  ]
}

type CategoryType = 'all' | 'burgers' | 'chicken' | 'fries' | 'drinks' | 'desserts'

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20])
  const [selectedFilters, setSelectedFilters] = useState({
    spicy: false,
    vegetarian: false,
    popular: false
  })
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)
  
  const addItem = useCartStore(state => state.addItem)

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍔' },
    { id: 'burgers', name: 'Burgers', icon: '🍔' },
    { id: 'chicken', name: 'Chicken', icon: '🍗' },
    { id: 'fries', name: 'Fries & Sides', icon: '🍟' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ]

  const getAllItems = () => {
    let items: any[] = []
    Object.values(menuData).forEach(category => {
      items = [...items, ...category]
    })
    return items
  }

  const getFilteredItems = () => {
    let items = activeCategory === 'all' ? getAllItems() : menuData[activeCategory as keyof typeof menuData] || []
    
    // Search filter
    if (searchQuery) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    // Price filter
    items = items.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1])
    
    // Additional filters
    if (selectedFilters.spicy) {
      items = items.filter(item => item.spicy)
    }
    if (selectedFilters.vegetarian) {
      items = items.filter(item => item.vegetarian)
    }
    if (selectedFilters.popular) {
      items = items.filter(item => item.popular)
    }
    
    // Sorting
    switch(sortBy) {
      case 'popular':
        items.sort((a, b) => (b.reviews || 0) - (a.reviews || 0))
        break
      case 'rating':
        items.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      case 'price-low':
        items.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        items.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        items.sort((a, b) => (b.id || 0) - (a.id || 0))
        break
    }
    
    return items
  }

  const filteredItems = getFilteredItems()

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 py-12 mb-8">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            Our <span className="text-yellow-400">Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-center mt-4 max-w-2xl mx-auto"
          >
            Discover our delicious range of burgers, chicken, fries and more
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600"
              />
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl border ${
                  viewMode === 'grid' 
                    ? 'bg-red-600 text-white border-red-600' 
                    : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl border ${
                  viewMode === 'list' 
                    ? 'bg-red-600 text-white border-red-600' 
                    : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden px-4 py-3 border border-gray-200 rounded-xl flex items-center gap-2 hover:bg-gray-50"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {(showFilters || window.innerWidth >= 1024) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-gray-200"
              >
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">Price Range:</span>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      step="0.5"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
                      className="w-32"
                    />
                    <span className="text-sm text-gray-600">${priceRange[1]}</span>
                  </div>

                  <button
                    onClick={() => setSelectedFilters({ ...selectedFilters, spicy: !selectedFilters.spicy })}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedFilters.spicy
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    🌶️ Spicy
                  </button>

                  <button
                    onClick={() => setSelectedFilters({ ...selectedFilters, vegetarian: !selectedFilters.vegetarian })}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedFilters.vegetarian
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    🌱 Vegetarian
                  </button>

                  <button
                    onClick={() => setSelectedFilters({ ...selectedFilters, popular: !selectedFilters.popular })}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedFilters.popular
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    🔥 Popular
                  </button>

                  {(searchQuery || priceRange[1] < 20 || selectedFilters.spicy || selectedFilters.vegetarian || selectedFilters.popular) && (
                    <button
                      onClick={() => {
                        setSearchQuery('')
                        setPriceRange([0, 20])
                        setSelectedFilters({ spicy: false, vegetarian: false, popular: false })
                      }}
                      className="px-4 py-2 text-red-600 hover:text-red-700 font-medium text-sm"
                    >
                      Clear All
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id as CategoryType)}
              className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing <span className="font-bold text-red-600">{filteredItems.length}</span> items
          </p>
        </div>

        {/* Menu Items Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-400 text-red-600 font-semibold rounded-full text-xs">
                        {item.badge}
                      </span>
                    </div>
                  )}
                  {item.spicy && (
                    <div className="absolute top-4 right-4">
                      <Flame className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      <span>{item.calories} cal</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-red-600">${item.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        addItem(item)
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg p-4 flex gap-6 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold ml-1">{item.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({item.reviews} reviews)</span>
                        {item.badge && (
                          <span className="px-2 py-1 bg-yellow-400 text-red-600 text-xs font-bold rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-red-600">${item.price}</span>
                  </div>

                  <p className="text-gray-600 mt-2">{item.description}</p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        <span>{item.calories} cal</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        addItem(item)
                      }}
                      className="px-6 py-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </motion.div>
        )}
      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
                {selectedItem.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-yellow-400 text-red-600 font-bold rounded-full">
                      {selectedItem.badge}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedItem.name}</h2>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-lg font-semibold ml-1">{selectedItem.rating}</span>
                        <span className="text-gray-500 ml-1">({selectedItem.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Clock className="w-5 h-5" />
                        <span>{selectedItem.time}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Flame className="w-5 h-5" />
                        <span>{selectedItem.calories} cal</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-red-600">${selectedItem.price}</div>
                </div>

                <p className="text-gray-700 text-lg mb-6">{selectedItem.description}</p>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold mb-4">Customize Your Order</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block font-medium mb-2">Extra Cheese (+$0.99)</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 text-red-600" />
                          <span>Add extra cheese</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium mb-2">Extra Patty (+$2.99)</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 text-red-600" />
                          <span>Add extra patty</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium mb-2">Spice Level</label>
                      <div className="flex gap-4">
                        {['Mild', 'Medium', 'Hot', 'Extra Hot'].map((level) => (
                          <label key={level} className="flex items-center gap-2">
                            <input type="radio" name="spice" className="w-4 h-4 text-red-600" />
                            <span>{level}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        addItem(selectedItem)
                        setSelectedItem(null)
                      }}
                      className="flex-1 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Add to Cart
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedItem(null)}
                      className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MenuPage