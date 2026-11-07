import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Camera, Heart, Share2, X } from 'lucide-react';

interface PhotoSpot {
  id: number;
  name: string;
  description: string;
  emoji: string;
  gradient: string;
  tags: string[];
}

const photoSpots: PhotoSpot[] = [
  { id: 1, name: "Rapunzel's Window", description: "The iconic arched window with cascading golden braids and mountain backdrop — our most photographed spot!", emoji: "🪟", gradient: "from-lavender-300 to-gold-200", tags: ["Most Popular", "Sunset Views"] },
  { id: 2, name: "The Enchanted Garden", description: "A whimsical outdoor space with fairy lights, flower arches, and a wishing well centerpiece.", emoji: "🌸", gradient: "from-green-200 to-lavender-200", tags: ["Outdoor", "Floral"] },
  { id: 3, name: "The Tower Library", description: "A cozy reading nook with vintage books, velvet cushions, and warm lantern light.", emoji: "📚", gradient: "from-wood-200 to-gold-100", tags: ["Cozy", "Indoor"] },
  { id: 4, name: "Lantern Lane", description: "A corridor of hanging paper lanterns creating a magical walkway of warm golden light.", emoji: "🏮", gradient: "from-gold-200 to-orange-200", tags: ["Magical", "Evening"] },
  { id: 5, name: "The Fairy Throne", description: "An ornate vintage chair surrounded by flowers and fairy lights — sit like royalty!", emoji: "👑", gradient: "from-lavender-200 to-pink-200", tags: ["Royal", "Portraits"] },
  { id: 6, name: "Cloud Terrace", description: "Our rooftop deck above the clouds with panoramic mountain views and swing seating.", emoji: "☁️", gradient: "from-blue-200 to-lavender-100", tags: ["Rooftop", "Panoramic"] },
  { id: 7, name: "The Potion Bar", description: "Our bar counter styled as an alchemist's workstation with colorful potion bottles.", emoji: "🧪", gradient: "from-purple-200 to-lavender-300", tags: ["Unique", "Bar"] },
  { id: 8, name: "Mushroom Hollow", description: "A hidden corner with oversized mushroom sculptures and fairy door — perfect for kids!", emoji: "🍄", gradient: "from-green-200 to-yellow-100", tags: ["Kids", "Whimsical"] },
];

const instagramPosts = [
  { user: '@fairytalediner', caption: 'Living my Rapunzel dream at The Tower Café! ✨🏰', likes: 2847, emoji: '🪟' },
  { user: '@mountainfoodie', caption: 'The golden waffles here are literally enchanted! 🧇✨', likes: 1923, emoji: '🧇' },
  { user: '@wanderlust_soul', caption: 'Found a real-life fairy tale in the mountains 💜', likes: 3421, emoji: '🏮' },
  { user: '@couple_goals', caption: 'Our anniversary dinner was pure magic 🥰✨', likes: 4102, emoji: '👑' },
  { user: '@foodie_adventures', caption: 'The lavender latte changed my life. Not exaggerating. 💜☕', likes: 1567, emoji: '💜' },
  { user: '@travel_diaries', caption: 'This place doesn\'t feel real! Every corner is a photo op 📸', likes: 2890, emoji: '📸' },
];

export default function GalleryPage() {
  const [selectedSpot, setSelectedSpot] = useState<PhotoSpot | null>(null);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="storybook-heading text-4xl md:text-5xl mb-4">📸 Photo Spot Gallery</h1>
          <p className="elegant-text text-xl max-w-2xl mx-auto">
            Every corner tells a story — discover our magical photo spots and share your fairy tale
          </p>
          <div className="fairy-divider max-w-sm mx-auto mt-6">
            <Sparkles size={16} className="text-gold-500" />
          </div>
        </motion.div>

        {/* Photo Spots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {photoSpots.map((spot, i) => (
            <motion.div
              key={spot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedSpot(spot)}
              className="fairy-frame cursor-pointer group"
            >
              <div className={`aspect-square rounded-lg bg-gradient-to-br ${spot.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">{spot.emoji}</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
              </div>
              <div className="p-3 text-center">
                <h3 className="font-[family-name:var(--font-elegant)] text-lg font-bold text-lavender-800">
                  {spot.name}
                </h3>
                <div className="flex gap-1 justify-center mt-1 flex-wrap">
                  {spot.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-lavender-100 text-lavender-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="storybook-heading text-2xl md:text-3xl mb-2">📱 From Our Guests</h2>
            <p className="elegant-text text-lg">Tag <span className="text-lavender-600 font-semibold">#TheTowerCafé</span> for a chance to be featured!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {instagramPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="parchment-card rounded-xl p-4 glow-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender-300 to-gold-300 flex items-center justify-center text-lg">
                    {post.emoji}
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-sans)] text-sm font-semibold text-lavender-700">{post.user}</p>
                    <p className="font-[family-name:var(--font-sans)] text-xs text-wood-400">Instagram</p>
                  </div>
                </div>
                <p className="font-[family-name:var(--font-body)] text-wood-700 text-sm mb-3 italic">
                  "{post.caption}"
                </p>
                <div className="flex items-center gap-4 text-sm text-wood-500">
                  <span className="flex items-center gap-1">
                    <Heart size={14} className="text-red-400 fill-red-400" /> {post.likes.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Share2 size={14} /> Share
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Photo Contest Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="scroll-banner p-8 text-center"
        >
          <span className="text-4xl mb-4 block">🏆</span>
          <h3 className="storybook-heading text-xl md:text-2xl mb-2">Monthly Photo Contest</h3>
          <p className="elegant-text text-lg mb-4">
            Share your best fairy-tale photo with #TheTowerCafé and win a free dinner for two!
          </p>
          <p className="font-[family-name:var(--font-body)] text-wood-600 text-sm">
            Winner announced on the last Sunday of every month. Judges pick based on creativity and magic! ✨
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSpot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedSpot(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="parchment-card rounded-2xl p-6 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSpot(null)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-lavender-100 transition-colors"
              >
                <X size={20} className="text-wood-600" />
              </button>
              <div className={`aspect-video rounded-xl bg-gradient-to-br ${selectedSpot.gradient} flex items-center justify-center mb-4`}>
                <span className="text-8xl">{selectedSpot.emoji}</span>
              </div>
              <h3 className="storybook-heading text-xl mb-2">{selectedSpot.name}</h3>
              <p className="font-[family-name:var(--font-body)] text-wood-700 leading-relaxed mb-4">
                {selectedSpot.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {selectedSpot.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-lavender-100 text-lavender-700 text-sm font-[family-name:var(--font-sans)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
