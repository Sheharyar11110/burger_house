import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { Users, Store, Award, Coffee } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Happy Customers',
    color: 'from-red-600 to-red-500'
  },
  {
    icon: Store,
    value: '25+',
    label: 'Locations',
    color: 'from-yellow-500 to-yellow-400'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Awards Won',
    color: 'from-red-600 to-yellow-500'
  },
  {
    icon: Coffee,
    value: '100K+',
    label: 'Burgers Sold',
    color: 'from-yellow-500 to-red-600'
  }
]

const Stats = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-yellow-500 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-white/5 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: [null, Math.random() * 100 - 50, 0],
              y: [null, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: index * 0.2,
                      duration: 0.5
                    }
                  }
                }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} p-0.5`}
                >
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-red-600" />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="text-white/90 font-medium"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats