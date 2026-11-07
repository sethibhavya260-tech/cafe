import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Calendar, Clock, Users, Sparkles, ChevronDown } from 'lucide-react';

function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/1e91d9c7-9f46-4586-b7fe-92cf3a75d5d9/_result.png"
          alt="A whimsical fairy-tale tower café in misty mountains"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Background overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-lavender-900/70 via-lavender-800/40 to-parchment-50/90">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd54f' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating lanterns in hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-lantern-float"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${10 + Math.sin(i) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
          >
            <div className="w-6 h-8 rounded-full bg-gradient-to-b from-gold-300 to-gold-500 opacity-60 animate-lantern-glow"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </div>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="mb-6">
            <span className="text-6xl md:text-8xl">🏰</span>
          </div>
          <h1 className="font-[family-name:var(--font-storybook)] text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Escape to the<br />
            <span className="text-gold-300">Tower Café</span>
          </h1>
          <p className="font-[family-name:var(--font-elegant)] text-xl md:text-2xl text-lavender-100 mb-4 italic">
            Where every meal is a fairy tale & every view, a storybook page
          </p>
          <p className="font-[family-name:var(--font-body)] text-parchment-200 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Nestled among misty mountains and ancient pines, our enchanted café invites you 
            to dine like royalty in a setting straight from your favorite fairy tale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-gold inline-flex items-center justify-center gap-2">
              <Sparkles size={18} /> Explore the Menu
            </Link>
            <Link to="/contact" className="btn-magical inline-flex items-center justify-center gap-2">
              <Calendar size={18} /> Reserve Your Table
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-white/60 animate-bounce" size={32} />
        </motion.div>
      </div>
    </section>
  );
}

function BookingWidget() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-banner p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="storybook-heading text-2xl md:text-3xl mb-2">✨ Reserve Your Enchanted Table</h2>
            <p className="elegant-text text-lg">Book your fairy-tale dining experience</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <span className="text-5xl mb-4 block">🎉</span>
              <p className="font-[family-name:var(--font-elegant)] text-xl text-lavender-700">
                Your reservation has been enchanted! We'll confirm shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-3 text-lavender-400" size={18} />
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-parchment-300 bg-parchment-50 font-[family-name:var(--font-body)] text-wood-700 focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-lavender-400 transition"
                  placeholder="Select date"
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-3 text-lavender-400" size={18} />
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-parchment-300 bg-parchment-50 font-[family-name:var(--font-body)] text-wood-700 focus:outline-none focus:ring-2 focus:ring-lavender-300 appearance-none"
                >
                  <option value="">Select time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="20:00">8:00 PM</option>
                </select>
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-3 text-lavender-400" size={18} />
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-parchment-300 bg-parchment-50 font-[family-name:var(--font-body)] text-wood-700 focus:outline-none focus:ring-2 focus:ring-lavender-300 appearance-none"
                >
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-parchment-300 bg-parchment-50 font-[family-name:var(--font-body)] text-wood-700 focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-lavender-400 transition"
              />
              <input
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-parchment-300 bg-parchment-50 font-[family-name:var(--font-body)] text-wood-700 focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-lavender-400 transition md:col-span-2"
              />
              <button type="submit" className="btn-magical md:col-span-2 flex items-center justify-center gap-2">
                <Sparkles size={18} /> Enchant My Reservation
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    { name: 'Priya M.', rating: 5, text: 'Absolutely magical! The tower seating with fairy lights felt like dining inside a storybook. The lavender latte was divine!', date: '2 weeks ago' },
    { name: 'Arjun K.', rating: 5, text: 'Perfect for our anniversary. The Rapunzel window view at sunset was breathtaking. Food was equally enchanting.', date: '1 month ago' },
    { name: 'Sarah L.', rating: 4, text: 'A unique experience! The fairy-tale theme is so well done. Kids loved the tower play area. Will definitely return!', date: '3 weeks ago' },
    { name: 'Rahul D.', rating: 5, text: 'The enchanted forest brunch was unreal. Every corner is Instagram-worthy. The staff dressed as fairy-tale characters added to the magic!', date: '1 week ago' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="storybook-heading text-3xl md:text-4xl mb-4">✨ Enchanted Testimonials</h2>
          <p className="elegant-text text-xl">Words from our fairy-tale guests</p>
          <div className="fairy-divider max-w-xs mx-auto mt-4">
            <Sparkles size={16} className="text-gold-500" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="parchment-card rounded-xl p-6 glow-hover"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={18} className={j < review.rating ? 'star-filled fill-gold-500' : 'star-empty'} />
                ))}
              </div>
              <p className="font-[family-name:var(--font-body)] text-wood-700 italic mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-elegant)] text-lg font-semibold text-lavender-700">
                  — {review.name}
                </span>
                <span className="text-sm text-wood-400">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: '🏰', title: 'Tower Dining', desc: 'Dine in our signature tower room with panoramic mountain views and cascading fairy lights.' },
    { icon: '📸', title: 'Photo Spots', desc: 'Every corner is a fairy-tale frame — from Rapunzel\'s Window to the Enchanted Garden.' },
    { icon: '🍰', title: 'Enchanted Menu', desc: 'Fairy-tale inspired dishes crafted with local, organic ingredients from the hill station.' },
    { icon: '🎵', title: 'Live Music', desc: 'Acoustic sessions every weekend featuring local artists in our lantern-lit courtyard.' },
    { icon: '🌿', title: 'Garden Terrace', desc: 'Al fresco dining surrounded by lavender bushes and twinkling fairy lights.' },
    { icon: '🎉', title: 'Events & Parties', desc: 'Host your enchanted celebration in our fairy-tale banquet hall.' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="storybook-heading text-3xl md:text-4xl mb-4">✨ Why Visit Us</h2>
          <p className="elegant-text text-xl">Every detail crafted for your fairy-tale escape</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="parchment-card rounded-xl p-6 text-center glow-hover cursor-pointer"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="font-[family-name:var(--font-elegant)] text-xl font-bold text-lavender-700 mb-2">
                {feature.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-wood-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MerchSection() {
  const items = [
    { name: 'Tower Café Mug', price: '₹450', emoji: '☕', desc: 'Hand-painted ceramic mug with our tower logo' },
    { name: 'Mini Lantern', price: '₹650', emoji: '🏮', desc: 'Take home a piece of the magic — battery-operated LED lantern' },
    { name: 'Braid Keychain', price: '₹250', emoji: '🔑', desc: 'Golden braided keychain inspired by Rapunzel' },
    { name: 'Fairy Tale Journal', price: '₹350', emoji: '📖', desc: 'Parchment-style journal with embossed tower cover' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="storybook-heading text-3xl md:text-4xl mb-4">🛍️ Take the Magic Home</h2>
          <p className="elegant-text text-xl">Souvenirs to remember your fairy-tale visit</p>
          <div className="fairy-divider max-w-xs mx-auto mt-4">
            <Sparkles size={16} className="text-gold-500" />
          </div>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="parchment-card rounded-xl p-5 text-center glow-hover cursor-pointer group"
            >
              <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
              <h4 className="font-[family-name:var(--font-elegant)] text-base font-bold text-lavender-800 mb-1">{item.name}</h4>
              <p className="font-[family-name:var(--font-body)] text-wood-500 text-xs mb-2">{item.desc}</p>
              <p className="font-[family-name:var(--font-elegant)] text-lg font-bold text-gold-700">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const posts = [
    { title: 'The Secret Behind Our Golden Elixir', date: 'Jan 15, 2026', emoji: '✨', excerpt: 'Discover the ancient turmeric recipe that became our signature drink...' },
    { title: 'A Winter Wonderland at The Tower', date: 'Jan 8, 2026', emoji: '❄️', excerpt: 'How we transformed the café for the snow season with fairy lights and warmth...' },
    { title: '5 Photo Spots You Must Not Miss', date: 'Dec 28, 2025', emoji: '📸', excerpt: 'Our guide to capturing the most magical moments during your visit...' },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="storybook-heading text-3xl md:text-4xl mb-4">📝 From Our Storybook</h2>
          <p className="elegant-text text-xl">Tales, recipes, and updates from the tower</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="parchment-card rounded-xl p-5 glow-hover cursor-pointer"
            >
              <span className="text-3xl mb-3 block">{post.emoji}</span>
              <span className="font-[family-name:var(--font-sans)] text-xs text-wood-400">{post.date}</span>
              <h4 className="font-[family-name:var(--font-elegant)] text-lg font-bold text-lavender-800 mb-2 mt-1">{post.title}</h4>
              <p className="font-[family-name:var(--font-body)] text-wood-600 text-sm">{post.excerpt}</p>
              <span className="inline-block mt-3 text-sm text-lavender-600 font-[family-name:var(--font-elegant)] font-semibold">
                Read more →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <FeaturesSection />
      <BookingWidget />
      <ReviewsSection />
      <MerchSection />
      <BlogPreview />
    </div>
  );
}
