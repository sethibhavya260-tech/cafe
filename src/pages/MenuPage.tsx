import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Leaf, Flame, Star } from 'lucide-react';

type Category = 'all' | 'enchanted-breakfast' | 'tower-lunch' | 'royal-dinner' | 'fairy-desserts' | 'magical-drinks';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: Category;
  emoji: string;
  tags: string[];
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  // Enchanted Breakfast
  { name: 'Rapunzel\'s Golden Waffles', description: 'Crispy waffles topped with honey-glazed berries, edible gold dust, and a tower of whipped cream', price: '₹450', category: 'enchanted-breakfast', emoji: '🧇', tags: ['Sweet', 'Signature'], popular: true },
  { name: 'Enchanted Forest Omelette', description: 'Fluffy three-egg omelette with wild mushrooms, truffle oil, and herb garnish from our garden', price: '₹380', category: 'enchanted-breakfast', emoji: '🍳', tags: ['Savory', 'Organic'] },
  { name: 'Tower Pancake Stack', description: 'Seven-layer buttermilk pancakes with maple syrup, fresh berries, and lavender butter', price: '₹420', category: 'enchanted-breakfast', emoji: '🥞', tags: ['Sweet', 'Tower Special'], popular: true },
  { name: 'Fairy Dust Granola Bowl', description: 'House-made granola with yogurt, chia seeds, dragon fruit, and edible flowers', price: '₹350', category: 'enchanted-breakfast', emoji: '🫐', tags: ['Healthy', 'Vegan Option'] },
  { name: 'Prince\'s Royal Breakfast', description: 'Full English breakfast with sausages, eggs, toast, beans, and grilled tomatoes', price: '₹520', category: 'enchanted-breakfast', emoji: '🍽️', tags: ['Hearty', 'Classic'] },

  // Tower Lunch
  { name: 'Golden Braid Pasta', description: 'Hand-rolled saffron pasta with roasted pumpkin, sage brown butter, and parmesan crisps', price: '₹480', category: 'tower-lunch', emoji: '🍝', tags: ['Vegetarian', 'Signature'], popular: true },
  { name: 'Enchanted Garden Salad', description: 'Mixed greens from our terrace garden with candied walnuts, goat cheese, and lavender vinaigrette', price: '₹320', category: 'tower-lunch', emoji: '🥗', tags: ['Healthy', 'Fresh'] },
  { name: 'Tower Burger', description: 'Angus beef patty with caramelized onions, aged cheddar, truffle aioli, and brioche bun', price: '₹520', category: 'tower-lunch', emoji: '🍔', tags: ['Hearty', 'Popular'], popular: true },
  { name: 'Mystic Mushroom Risotto', description: 'Creamy arborio rice with wild porcini, shiitake, and truffle oil finished with aged parmesan', price: '₹460', category: 'tower-lunch', emoji: '🍄', tags: ['Vegetarian', 'Rich'] },
  { name: 'Fairy\'s Fish & Chips', description: 'Crispy battered cod with hand-cut chips, mushy peas, and our secret tartar sauce', price: '₹490', category: 'tower-lunch', emoji: '🐟', tags: ['Classic', 'Crispy'] },

  // Royal Dinner
  { name: 'Royal Lamb Shank', description: 'Slow-braised lamb shank with rosemary jus, creamy polenta, and roasted root vegetables', price: '₹850', category: 'royal-dinner', emoji: '🍖', tags: ['Premium', 'Signature'], popular: true },
  { name: 'Enchanted Salmon', description: 'Pan-seared salmon with lemon dill sauce, asparagus, and saffron rice', price: '₹720', category: 'royal-dinner', emoji: '🐠', tags: ['Seafood', 'Elegant'] },
  { name: 'Tower Steak', description: '250g grilled ribeye with peppercorn sauce, truffle mash, and grilled broccolini', price: '₹950', category: 'royal-dinner', emoji: '🥩', tags: ['Premium', 'Classic'], popular: true },
  { name: 'Witch\'s Wild Mushroom Soup', description: 'Velvety blend of forest mushrooms with truffle cream and sourdough croutons', price: '₹380', category: 'royal-dinner', emoji: '🍲', tags: ['Vegetarian', 'Warming'] },
  { name: 'Princess\'s Paneer Royale', description: 'Paneer tikka in rich makhani gravy with saffron naan and raita', price: '₹520', category: 'royal-dinner', emoji: '🧀', tags: ['Vegetarian', 'Indian'] },

  // Fairy Desserts
  { name: 'Rapunzel\'s Tower Cake', description: 'Six-tier chocolate and vanilla sponge with raspberry filling and gold leaf decoration', price: '₹380', category: 'fairy-desserts', emoji: '🎂', tags: ['Signature', 'Sweet'], popular: true },
  { name: 'Lavender Crème Brûlée', description: 'Classic French custard infused with Provençal lavender and caramelized sugar crust', price: '₹320', category: 'fairy-desserts', emoji: '🍮', tags: ['Classic', 'Elegant'] },
  { name: 'Enchanted Chocolate Fondant', description: 'Warm chocolate cake with molten center, vanilla bean ice cream, and gold dust', price: '₹360', category: 'fairy-desserts', emoji: '🍫', tags: ['Indulgent', 'Hot'], popular: true },
  { name: 'Fairy Berry Tart', description: 'Buttery pastry shell with vanilla custard, fresh berries, and edible flower petals', price: '₹340', category: 'fairy-desserts', emoji: '🥧', tags: ['Fruity', 'Beautiful'] },
  { name: 'Cloud Nine Cheesecake', description: 'Light and airy Japanese-style cheesecake with matcha dust and white chocolate shards', price: '₹350', category: 'fairy-desserts', emoji: '☁️', tags: ['Light', 'Japanese'] },

  // Magical Drinks
  { name: 'Rapunzel\'s Golden Elixir', description: 'Turmeric latte with honey, cinnamon, and edible gold flakes — our signature drink', price: '₹280', category: 'magical-drinks', emoji: '✨', tags: ['Signature', 'Warming'], popular: true },
  { name: 'Lavender Dream Latte', description: 'Espresso with lavender syrup, steamed milk, and dried lavender buds', price: '₹260', category: 'magical-drinks', emoji: '💜', tags: ['Coffee', 'Floral'] },
  { name: 'Enchanted Forest Tea', description: 'House blend of wild berries, hibiscus, and mountain herbs served in a crystal teapot', price: '₹220', category: 'magical-drinks', emoji: '🍵', tags: ['Tea', 'Herbal'] },
  { name: 'Fairy Dust Smoothie', description: 'Mango, passion fruit, coconut milk, and butterfly pea flower — changes color as you stir!', price: '₹300', category: 'magical-drinks', emoji: '🧋', tags: ['Refreshing', 'Magical'], popular: true },
  { name: 'Tower Hot Chocolate', description: 'Rich Belgian chocolate with marshmallows, cream, and a sprinkle of cinnamon', price: '₹280', category: 'magical-drinks', emoji: '☕', tags: ['Hot', 'Indulgent'] },
  { name: 'Midnight Berry Punch', description: 'Mixed berries, sparkling water, mint, and a touch of elderflower — served with dry ice mist', price: '₹320', category: 'magical-drinks', emoji: '🫐', tags: ['Non-Alcoholic', 'Dramatic'] },
];

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: 'all', label: 'All Items', emoji: '📜' },
  { key: 'enchanted-breakfast', label: 'Enchanted Breakfast', emoji: '🌅' },
  { key: 'tower-lunch', label: 'Tower Lunch', emoji: '☀️' },
  { key: 'royal-dinner', label: 'Royal Dinner', emoji: '🌙' },
  { key: 'fairy-desserts', label: 'Fairy Desserts', emoji: '🍰' },
  { key: 'magical-drinks', label: 'Magical Drinks', emoji: '🧪' },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="storybook-heading text-4xl md:text-5xl mb-4">🍽️ The Enchanted Menu</h1>
          <p className="elegant-text text-xl max-w-2xl mx-auto">
            Each dish is a chapter in our fairy tale — crafted with love, served with magic
          </p>
          <div className="fairy-divider max-w-sm mx-auto mt-6">
            <Sparkles size={16} className="text-gold-500" />
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full font-[family-name:var(--font-elegant)] text-sm md:text-base transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-lavender-500 text-white shadow-lg shadow-lavender-300/50'
                  : 'bg-parchment-100 text-wood-600 hover:bg-lavender-100 border border-parchment-300'
              }`}
            >
              <span className="mr-1">{cat.emoji}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className="menu-card parchment-card rounded-xl p-5 relative overflow-hidden cursor-pointer"
              >
                {/* Popular badge */}
                {item.popular && (
                  <div className="absolute top-3 right-3 bg-gold-400 text-wood-800 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Star size={10} className="fill-wood-800" /> Popular
                  </div>
                )}

                <div className="flex items-start gap-4">
                  {/* Emoji illustration */}
                  <div className={`text-4xl transition-transform duration-500 ${hoveredItem === item.name ? 'scale-125 rotate-6' : ''}`}>
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-elegant)] text-lg font-bold text-lavender-800 mb-1">
                      {item.name}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-wood-600 text-sm leading-relaxed mb-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1 flex-wrap">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-lavender-100 text-lavender-700 font-[family-name:var(--font-sans)]">
                            {tag === 'Vegetarian' && <Leaf size={8} className="inline mr-0.5" />}
                            {tag === 'Signature' && <Sparkles size={8} className="inline mr-0.5" />}
                            {tag === 'Premium' && <Flame size={8} className="inline mr-0.5" />}
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="font-[family-name:var(--font-elegant)] text-xl font-bold text-gold-700">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                {hoveredItem === item.name && (
                  <div className="absolute inset-0 bg-gradient-to-r from-lavender-100/30 to-gold-100/30 rounded-xl pointer-events-none" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fairy light divider at bottom */}
        <div className="fairy-divider mt-12">
          <Sparkles size={16} className="text-gold-500" />
        </div>

        {/* Note */}
        <p className="text-center font-[family-name:var(--font-body)] text-wood-500 text-sm mt-4 italic">
          🌿 All dishes prepared with locally sourced, organic ingredients. 
          Please inform us of any allergies. Prices inclusive of all taxes.
        </p>
      </div>
    </div>
  );
}
