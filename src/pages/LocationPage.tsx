import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Clock, Phone, Navigation, Star, Search, X, Wifi, Coffee, Car } from 'lucide-react'

interface Location {
  id: number
  name: string
  address: string
  city: string
  phone: string
  hours: string
  rating: number
  reviews: number
  image: string
  coordinates: { lat: number; lng: number }
  features: string[]
  popular: boolean
}

const locations: Location[] = [
  {
    id: 1,
    name: "Downtown BurgerHouse",
    address: "123 Main Street, Downtown, City 12345",
    city: "Downtown",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Sun: 10AM - 11PM",
    rating: 4.8,
    reviews: 2345,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    coordinates: { lat: 40.7128, lng: -74.0060 },
    features: ["Drive-thru", "Free WiFi", "Parking", "Outdoor Seating"],
    popular: true
  },
  {
    id: 2,
    name: "Westside BurgerHouse",
    address: "456 West Avenue, Westside, City 12346",
    city: "Westside",
    phone: "+1 (555) 123-4568",
    hours: "Mon-Sun: 10AM - 12AM",
    rating: 4.6,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    coordinates: { lat: 40.7282, lng: -74.0776 },
    features: ["24/7 Drive-thru", "Free WiFi", "Parking", "Play Area"],
    popular: true
  },
  {
    id: 3,
    name: "Eastside BurgerHouse",
    address: "789 East Boulevard, Eastside, City 12347",
    city: "Eastside",
    phone: "+1 (555) 123-4569",
    hours: "Mon-Sun: 11AM - 10PM",
    rating: 4.5,
    reviews: 1543,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    coordinates: { lat: 40.7549, lng: -73.9840 },
    features: ["Free WiFi", "Parking", "Pet Friendly"],
    popular: false
  },
  {
    id: 4,
    name: "Northside BurgerHouse",
    address: "321 North Road, Northside, City 12348",
    city: "Northside",
    phone: "+1 (555) 123-4570",
    hours: "Mon-Sun: 10AM - 11PM",
    rating: 4.7,
    reviews: 1987,
    image: "https://media.istockphoto.com/id/2194014048/photo/burger-and-fries-in-modern-restaurant.webp?a=1&b=1&s=612x612&w=0&k=20&c=OfOonwswYOFlZ8vXF7k2XuamB6We4oc-rPvkdfYiCbM=",
    coordinates: { lat: 40.7831, lng: -73.9712 },
    features: ["Drive-thru", "Free WiFi", "Parking", "Event Space"],
    popular: true
  },
  {
    id: 5,
    name: "Southside BurgerHouse",
    address: "654 South Lane, Southside, City 12349",
    city: "Southside",
    phone: "+1 (555) 123-4571",
    hours: "Mon-Sun: 10AM - 10PM",
    rating: 4.4,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    coordinates: { lat: 40.6782, lng: -73.9442 },
    features: ["Free WiFi", "Parking", "Outdoor Seating"],
    popular: false
  },
  {
    id: 6,
    name: "Airport BurgerHouse",
    address: "987 Airport Terminal, International Airport, City 12350",
    city: "Airport",
    phone: "+1 (555) 123-4572",
    hours: "24/7",
    rating: 4.3,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1703424575944-3f8dd76c8ca9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWlycG9ydCUyMHJlc3R1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    coordinates: { lat: 40.6413, lng: -73.7781 },
    features: ["24/7 Service", "Free WiFi", "Grab & Go", "Pre-order"],
    popular: false
  }
]

const LocationsPage = () => {
  const [selectedCity, setSelectedCity] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

  const cities = ['all', ...new Set(locations.map(l => l.city))]

  const filteredLocations = locations.filter(location => {
    const matchesCity = selectedCity === 'all' || location.city === selectedCity
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.address.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCity && matchesSearch
  })

  const getDirections = (address: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`)
  }

  const getFeatureIcon = (feature: string) => {
    if (feature.includes('WiFi')) return Wifi
    if (feature.includes('Parking')) return Car
    return Coffee
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 py-16 mb-8">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            Our <span className="text-yellow-400">Locations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-center mt-4 max-w-2xl mx-auto"
          >
            Find a BurgerHouse near you. We're always close by!
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by location name or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600"
              />
            </div>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600/20"
            >
              {cities.map(city => (
                <option key={city} value={city}>
                  {city === 'all' ? 'All Cities' : city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Map Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
        >
          <div className="relative h-96 bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur rounded-2xl p-6 text-center">
                <MapPin className="w-12 h-12 text-red-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-900">Interactive Map</h3>
                <p className="text-gray-600 mb-4">Find the nearest location to you</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold rounded-full"
                >
                  Use My Location
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing <span className="font-bold text-red-600">{filteredLocations.length}</span> locations
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {location.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-400 text-red-600 font-semibold rounded-full text-xs">
                      Popular
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{location.rating}</span>
                    <span className="text-xs text-gray-500">({location.reviews})</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-600">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-gray-600">{location.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-gray-600">{location.phone}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {location.features.map((feature, i) => {
                    const Icon = getFeatureIcon(feature)
                    return (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs flex items-center gap-1"
                      >
                        <Icon className="w-3 h-3" />
                        {feature}
                      </span>
                    )
                  })}
                </div>

                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => getDirections(location.address)}
                    className="flex-1 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                  >
                    <Navigation className="w-4 h-4" />
                    Directions
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedLocation(location)}
                    className="px-4 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredLocations.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
              <MapPin className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No locations found</h3>
            <p className="text-gray-600">Try adjusting your search or filter</p>
          </motion.div>
        )}

        {/* Location Details Modal */}
        <AnimatePresence>
          {selectedLocation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedLocation(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64">
                  <img
                    src={selectedLocation.image}
                    alt={selectedLocation.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedLocation.name}</h2>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold ml-1">{selectedLocation.rating}</span>
                    </div>
                    <span className="text-gray-500">({selectedLocation.reviews} reviews)</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">{selectedLocation.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-gray-600">{selectedLocation.hours}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-red-600" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">{selectedLocation.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.features.map((feature: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => getDirections(selectedLocation.address)}
                      className="flex-1 py-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Navigation className="w-5 h-5" />
                      Get Directions
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.location.href = `tel:${selectedLocation.phone}`}
                      className="px-6 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      Call
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default LocationsPage