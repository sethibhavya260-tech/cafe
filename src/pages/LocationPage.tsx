import { motion } from 'framer-motion';
import { Sparkles, MapPin, Car, Bus, Train, Clock, Phone, Navigation } from 'lucide-react';

export default function LocationPage() {
  const directions = [
    { mode: 'By Car', icon: <Car size={20} />, details: 'Take the Shimla-Mandi highway. Turn left at the old pine forest checkpoint. Follow signs for 3km uphill. Free parking available for 30 vehicles.', time: '15 min from Shimla center' },
    { mode: 'By Bus', icon: <Bus size={20} />, details: 'HPTC buses run hourly from Shimla ISBT. Get down at "Tower Café Stop" (blue painted bus shelter). 5-minute uphill walk through the fairy trail.', time: '45 min from Shimla ISBT' },
    { mode: 'By Train', icon: <Train size={20} />, details: 'Nearest station: Shimla (Kalka-Shimla Toy Train). From the station, take a taxi (₹200) or our complimentary shuttle (call ahead for pickup).', time: '5 hrs from Delhi (Toy Train)' },
  ];

  const scenicFeatures = [
    { emoji: '🏔️', title: 'Mountain Views', desc: 'Panoramic views of the Himalayan range from our Cloud Terrace' },
    { emoji: '🌲', title: 'Pine Forest', desc: 'Surrounded by ancient deodar and blue pine trees' },
    { emoji: '🌅', title: 'Sunrise Point', desc: 'Watch the first light paint the mountains gold from our east-facing deck' },
    { emoji: '🌸', title: 'Garden Setting', desc: 'Our terraced garden blooms with rhododendrons, lavender, and wildflowers' },
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="storybook-heading text-4xl md:text-5xl mb-4">🗺️ Find Your Way to Magic</h1>
          <p className="elegant-text text-xl max-w-2xl mx-auto">
            Nestled in the clouds at 7,200 feet — the journey is part of the fairy tale
          </p>
          <div className="fairy-divider max-w-sm mx-auto mt-6">
            <Sparkles size={16} className="text-gold-500" />
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="parchment-card rounded-2xl overflow-hidden">
            <div className="aspect-video md:aspect-[21/9] bg-gradient-to-br from-lavender-100 to-green-100 relative flex items-center justify-center">
              {/* Stylized map representation */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 C60 20, 70 15, 75 25 C80 35, 70 40, 75 50 C80 60, 70 65, 65 70 C60 75, 50 80, 45 75 C40 70, 30 65, 25 55 C20 45, 30 35, 35 25 C40 15, 45 10, 50 10Z' fill='none' stroke='%239f6de8' stroke-width='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px',
              }} />
              <div className="text-center z-10 p-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gold-200 max-w-md">
                  <MapPin className="mx-auto text-lavender-600 mb-3" size={40} />
                  <h3 className="font-[family-name:var(--font-storybook)] text-xl text-lavender-800 mb-2">The Tower Café</h3>
                  <p className="font-[family-name:var(--font-body)] text-wood-700 mb-1">
                    Tower Hill Road, Near Jakhu Temple
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-wood-600 mb-1">
                    Shimla, Himachal Pradesh 171001
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-wood-500 text-sm mb-4">
                    India
                  </p>
                  <a
                    href="https://maps.google.com/?q=31.1048,77.1734"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-magical inline-flex items-center gap-2 text-sm"
                  >
                    <Navigation size={16} /> Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scenic Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {scenicFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="parchment-card rounded-xl p-4 text-center glow-hover"
            >
              <span className="text-3xl mb-2 block">{feature.emoji}</span>
              <h4 className="font-[family-name:var(--font-elegant)] text-base font-bold text-lavender-700 mb-1">
                {feature.title}
              </h4>
              <p className="font-[family-name:var(--font-body)] text-wood-600 text-xs">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Directions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="storybook-heading text-2xl md:text-3xl text-center mb-8">🧭 How to Reach Us</h2>
          <div className="space-y-4">
            {directions.map((dir, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="parchment-card rounded-xl p-5 flex flex-col md:flex-row gap-4 items-start glow-hover"
              >
                <div className="flex items-center gap-3 min-w-[200px]">
                  <div className="w-10 h-10 rounded-full bg-lavender-100 flex items-center justify-center text-lavender-600">
                    {dir.icon}
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-elegant)] text-lg font-bold text-lavender-800">{dir.mode}</h4>
                    <span className="text-xs text-wood-500 flex items-center gap-1">
                      <Clock size={12} /> {dir.time}
                    </span>
                  </div>
                </div>
                <p className="font-[family-name:var(--font-body)] text-wood-600 text-sm leading-relaxed flex-1">
                  {dir.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Parking Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="scroll-banner p-8 text-center"
        >
          <span className="text-4xl mb-4 block">🅿️</span>
          <h3 className="storybook-heading text-xl md:text-2xl mb-3">Parking Information</h3>
          <div className="font-[family-name:var(--font-body)] text-wood-700 space-y-2 text-lg">
            <p>✅ <strong>Free parking</strong> for up to 30 vehicles</p>
            <p>✅ <strong>Two-wheeler parking</strong> available (complimentary)</p>
            <p>✅ <strong>Valet service</strong> on weekends (₹100)</p>
            <p>✅ <strong>EV charging station</strong> available</p>
            <p className="text-sm text-wood-500 mt-4 italic">
              * During peak season (May-June, Dec-Jan), we recommend arriving before 11 AM for guaranteed parking
            </p>
          </div>
        </motion.div>

        {/* Contact quick info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="parchment-card rounded-xl p-5 text-center">
            <Phone className="mx-auto text-lavender-500 mb-2" size={24} />
            <h4 className="font-[family-name:var(--font-elegant)] font-bold text-lavender-700">Call for Directions</h4>
            <p className="font-[family-name:var(--font-body)] text-wood-600">+91 98765 43210</p>
          </div>
          <div className="parchment-card rounded-xl p-5 text-center">
            <Clock className="mx-auto text-lavender-500 mb-2" size={24} />
            <h4 className="font-[family-name:var(--font-elegant)] font-bold text-lavender-700">Open Daily</h4>
            <p className="font-[family-name:var(--font-body)] text-wood-600">8 AM – 10 PM</p>
          </div>
          <div className="parchment-card rounded-xl p-5 text-center">
            <MapPin className="mx-auto text-lavender-500 mb-2" size={24} />
            <h4 className="font-[family-name:var(--font-elegant)] font-bold text-lavender-700">Altitude</h4>
            <p className="font-[family-name:var(--font-body)] text-wood-600">7,200 ft above sea level</p>
          </div>
        </div>
      </div>
    </div>
  );
}
