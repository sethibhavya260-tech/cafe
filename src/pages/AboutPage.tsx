import { motion } from 'framer-motion';
import { Sparkles, Heart, Mountain, Coffee, Flower2, Crown } from 'lucide-react';

export default function AboutPage() {
  const timeline = [
    { year: '2019', title: 'The Dream Begins', desc: 'Two friends, a love for fairy tales, and a crumbling hill-top cottage — the seed of The Tower Café was planted.', emoji: '🌱' },
    { year: '2020', title: 'Building the Tower', desc: 'Through lockdown, we designed our dream space — every beam, every lantern placed with intention and magic.', emoji: '🏗️' },
    { year: '2022', title: 'Doors Open', desc: 'The Tower Café welcomed its first guests on a misty morning in October. The fairy tale began.', emoji: '🚪' },
    { year: '2023', title: 'The Garden Grows', desc: 'We expanded with the Enchanted Garden terrace, Cloud Rooftop, and our famous Lantern Lane.', emoji: '🌿' },
    { year: '2025', title: 'A Beloved Destination', desc: 'Featured in Travel + Leisure, Condé Nast, and voted "Most Magical Café" by our guests three years running.', emoji: '🏆' },
    { year: '2026', title: 'The Story Continues', desc: 'New events, new dishes, new memories — and always, always more magic to share.', emoji: '✨' },
  ];

  const values = [
    { icon: <Heart className="text-lavender-500" size={28} />, title: 'Heartfelt Hospitality', desc: 'Every guest is royalty. We treat you like family returning home.' },
    { icon: <Mountain className="text-lavender-500" size={28} />, title: 'Mountain Fresh', desc: 'Locally sourced ingredients from hill farms, delivered fresh every morning.' },
    { icon: <Coffee className="text-lavender-500" size={28} />, title: 'Crafted with Love', desc: 'Every dish is a labor of love — recipes passed down and reinvented with magic.' },
    { icon: <Flower2 className="text-lavender-500" size={28} />, title: 'Sustainable Magic', desc: 'Eco-friendly practices because we believe in preserving the beauty that inspires us.' },
    { icon: <Crown className="text-lavender-500" size={28} />, title: 'Attention to Detail', desc: 'From the napkin folds to the lantern placement — every detail tells a story.' },
    { icon: <Sparkles className="text-lavender-500" size={28} />, title: 'Creating Memories', desc: 'We don\'t just serve food — we create moments you\'ll treasure forever.' },
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="storybook-heading text-4xl md:text-5xl mb-4">📖 Our Story</h1>
          <p className="elegant-text text-xl max-w-2xl mx-auto">
            Once upon a time, in a hill station touched by clouds...
          </p>
          <div className="fairy-divider max-w-sm mx-auto mt-6">
            <Sparkles size={16} className="text-gold-500" />
          </div>
        </motion.div>

        {/* Interior Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-2xl overflow-hidden fairy-frame"
        >
          <img
            src="https://image.qwenlm.ai/generated-images/edb4a35b-f391-4da2-9c6c-35933380dd3b/_result.png"
            alt="Interior of The Tower Café with warm lanterns and vintage books"
            className="w-full h-64 md:h-80 object-cover"
          />
        </motion.div>

        {/* Origin Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="parchment-card rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 text-6xl opacity-20">🏰</div>
          <h2 className="storybook-heading text-2xl md:text-3xl mb-6">The Tale of The Tower Café</h2>
          <div className="font-[family-name:var(--font-body)] text-wood-700 space-y-4 text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-[family-name:var(--font-storybook)] first-letter:text-lavender-700 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
              Once upon a time, high in the misty mountains where clouds come to rest and the air smells of pine and possibility, 
              two friends discovered an old stone tower. It was crumbling, forgotten, covered in ivy — but they saw something 
              magical. They saw golden light spilling from arched windows. They heard laughter echoing through stone halls. 
              They smelled fresh bread and lavender tea.
            </p>
            <p>
              That tower became The Tower Café — a place where fairy tales aren't just stories, but a way of life. 
              Inspired by the legend of Rapunzel, who let down her golden hair from a tower window to find freedom and love, 
              we created a space where every visitor can find their own moment of magic.
            </p>
            <p>
              Our café is more than a restaurant. It's a sanctuary for dreamers, a playground for the young at heart, 
              and a haven for anyone who believes that a good meal, a beautiful view, and a touch of enchantment 
              can make the world a little brighter.
            </p>
            <p>
              From our hand-painted walls to our signature Golden Elixir, every detail is designed to transport you 
              to a world where time slows down, worries fade, and the only thing that matters is the joy of the moment.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="storybook-heading text-2xl md:text-3xl text-center mb-10"
          >
            📜 Our Journey Through the Years
          </motion.h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lavender-300 via-gold-300 to-lavender-300" />
            
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <div className="parchment-card rounded-xl p-5 glow-hover">
                    <span className="text-2xl mb-2 block">{item.emoji}</span>
                    <span className="font-[family-name:var(--font-storybook)] text-sm text-gold-600">{item.year}</span>
                    <h3 className="font-[family-name:var(--font-elegant)] text-lg font-bold text-lavender-800 mb-1">{item.title}</h3>
                    <p className="font-[family-name:var(--font-body)] text-wood-600 text-sm">{item.desc}</p>
                  </div>
                </div>
                {/* Dot on timeline */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-lavender-500 border-4 border-parchment-50 shadow-md" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="storybook-heading text-2xl md:text-3xl text-center mb-10">
            💜 What We Believe In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="parchment-card rounded-xl p-6 text-center glow-hover"
              >
                <div className="mb-3 flex justify-center">{value.icon}</div>
                <h3 className="font-[family-name:var(--font-elegant)] text-lg font-bold text-lavender-700 mb-2">
                  {value.title}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-wood-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-12"
        >
          <div className="max-w-2xl mx-auto">
            <span className="text-4xl mb-4 block">💫</span>
            <blockquote className="font-[family-name:var(--font-elegant)] text-2xl md:text-3xl text-lavender-700 italic leading-relaxed">
              "We didn't build a café. We built a doorway to a world where everyone gets to be the hero of their own fairy tale."
            </blockquote>
            <p className="font-[family-name:var(--font-elegant)] text-lg text-wood-500 mt-4">
              — Ananya & Vikram, Founders
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
