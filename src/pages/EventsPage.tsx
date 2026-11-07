import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Clock, Tag, Gift, Music, Camera, Star } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  emoji: string;
  category: 'themed-night' | 'discount' | 'contest' | 'special';
  gradient: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Enchanted Friday Nights',
    description: 'Live acoustic music under the lanterns every Friday. Special fairy-tale cocktail menu and roaming magicians!',
    date: 'Every Friday',
    time: '7:00 PM – 11:00 PM',
    emoji: '🎵',
    category: 'themed-night',
    gradient: 'from-lavender-200 to-purple-200',
  },
  {
    id: 2,
    title: 'Sunrise Breakfast Special',
    description: 'Early birds get 30% off our Enchanted Breakfast menu! Watch the sunrise from Cloud Terrace with a complimentary Golden Elixir.',
    date: 'Weekends',
    time: '6:00 AM – 8:00 AM',
    emoji: '🌅',
    category: 'discount',
    gradient: 'from-gold-100 to-orange-100',
  },
  {
    id: 3,
    title: 'Fairy-Tale Photo Contest',
    description: 'Share your most magical photo from The Tower Café on Instagram with #TheTowerCafé. Monthly winner gets a free dinner for two!',
    date: 'Ongoing',
    time: 'All day',
    emoji: '📸',
    category: 'contest',
    gradient: 'from-pink-100 to-lavender-100',
  },
  {
    id: 4,
    title: 'Rapunzel\'s Birthday Bash',
    description: 'Join us for a magical celebration with themed decorations, special menu, face painting, and a tower cake cutting ceremony!',
    date: 'March 15',
    time: '12:00 PM – 9:00 PM',
    emoji: '🎂',
    category: 'special',
    gradient: 'from-gold-200 to-yellow-100',
  },
  {
    id: 5,
    title: 'Couples\' Tower Dinner',
    description: 'An exclusive candlelit dinner for two in our private tower room. Five-course meal with wine pairing and rose petal decorations.',
    date: 'Every Saturday',
    time: '8:00 PM – 11:00 PM',
    emoji: '💑',
    category: 'themed-night',
    gradient: 'from-red-100 to-pink-100',
  },
  {
    id: 6,
    title: 'Kids\' Fairy Tale Hour',
    description: 'Storytelling sessions, face painting, and a special kids\' menu every Sunday morning. Little princes and princesses eat free!',
    date: 'Every Sunday',
    time: '9:00 AM – 12:00 PM',
    emoji: '👑',
    category: 'special',
    gradient: 'from-blue-100 to-lavender-100',
  },
  {
    id: 7,
    title: 'Happy Hour Elixirs',
    description: 'All magical drinks at 1+1 offer! Our signature potions, lattes, and smoothies at half the price during twilight hours.',
    date: 'Mon – Thu',
    time: '4:00 PM – 6:00 PM',
    emoji: '🧪',
    category: 'discount',
    gradient: 'from-purple-100 to-lavender-100',
  },
  {
    id: 8,
    title: 'Full Moon Dinner',
    description: 'A special menu curated for full moon nights. Dine on our rooftop under the stars with live sitar music and moon-themed desserts.',
    date: 'Monthly (Full Moon)',
    time: '8:00 PM – 12:00 AM',
    emoji: '🌕',
    category: 'themed-night',
    gradient: 'from-indigo-100 to-lavender-200',
  },
];

const categoryFilters = [
  { key: 'all', label: 'All Events', emoji: '✨' },
  { key: 'themed-night', label: 'Themed Nights', emoji: '🌙' },
  { key: 'discount', label: 'Offers', emoji: '🏷️' },
  { key: 'contest', label: 'Contests', emoji: '🏆' },
  { key: 'special', label: 'Special Events', emoji: '🎉' },
];

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter(e => e.category === activeFilter);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'themed-night': return <Music size={14} />;
      case 'discount': return <Tag size={14} />;
      case 'contest': return <Camera size={14} />;
      case 'special': return <Gift size={14} />;
      default: return <Star size={14} />;
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'themed-night': return 'Themed Night';
      case 'discount': return 'Special Offer';
      case 'contest': return 'Contest';
      case 'special': return 'Special Event';
      default: return 'Event';
    }
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="storybook-heading text-4xl md:text-5xl mb-4">🎉 Events & Offers</h1>
          <p className="elegant-text text-xl max-w-2xl mx-auto">
            Enchanting experiences, magical deals, and unforgettable moments await
          </p>
          <div className="fairy-divider max-w-sm mx-auto mt-6">
            <Sparkles size={16} className="text-gold-500" />
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categoryFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full font-[family-name:var(--font-elegant)] text-sm md:text-base transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-lavender-500 text-white shadow-lg shadow-lavender-300/50'
                  : 'bg-parchment-100 text-wood-600 hover:bg-lavender-100 border border-parchment-300'
              }`}
            >
              <span className="mr-1">{filter.emoji}</span> {filter.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="parchment-card rounded-xl overflow-hidden glow-hover group"
            >
              {/* Top gradient banner */}
              <div className={`h-24 bg-gradient-to-r ${event.gradient} flex items-center justify-center relative`}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-500">{event.emoji}</span>
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-xs font-semibold text-lavender-700">
                  {getCategoryIcon(event.category)}
                  {getCategoryLabel(event.category)}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-elegant)] text-xl font-bold text-lavender-800 mb-2">
                  {event.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-wood-600 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-1 text-lavender-600">
                    <Calendar size={14} /> {event.date}
                  </span>
                  <span className="flex items-center gap-1 text-wood-500">
                    <Clock size={14} /> {event.time}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="scroll-banner p-8 text-center mt-12"
        >
          <span className="text-4xl mb-4 block">📬</span>
          <h3 className="storybook-heading text-xl md:text-2xl mb-2">Never Miss the Magic</h3>
          <p className="elegant-text text-lg mb-6">
            Subscribe to our newsletter for exclusive offers, event updates, and fairy-tale recipes!
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full border border-parchment-300 bg-parchment-50 font-[family-name:var(--font-body)] text-wood-700 focus:outline-none focus:ring-2 focus:ring-lavender-300"
            />
            <button type="submit" className="btn-magical whitespace-nowrap">
              ✨ Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
