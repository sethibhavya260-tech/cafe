import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  const contactInfo = [
    { icon: <Phone size={22} />, label: 'Phone', value: '+91 98765 43210', link: 'tel:+919876543210' },
    { icon: <Mail size={22} />, label: 'Email', value: 'hello@thetowercafe.com', link: 'mailto:hello@thetowercafe.com' },
    { icon: <MapPin size={22} />, label: 'Address', value: 'Tower Hill Road, Shimla, HP 171001', link: '#' },
    { icon: <Clock size={22} />, label: 'Hours', value: 'Mon-Fri: 9AM-9PM | Sat-Sun: 8AM-10PM', link: '#' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram size={22} />, handle: '@thetowercafe', url: '#', color: 'hover:bg-pink-100 hover:text-pink-600' },
    { name: 'Facebook', icon: <Facebook size={22} />, handle: 'The Tower Café', url: '#', color: 'hover:bg-blue-100 hover:text-blue-600' },
    { name: 'WhatsApp', icon: <MessageCircle size={22} />, handle: '+91 98765 43210', url: 'https://wa.me/919876543210', color: 'hover:bg-green-100 hover:text-green-600' },
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
          <h1 className="storybook-heading text-4xl md:text-5xl mb-4">💌 Get in Touch</h1>
          <p className="elegant-text text-xl max-w-2xl mx-auto">
            We'd love to hear from you — whether it's a reservation, a question, or just to say hello!
          </p>
          <div className="fairy-divider max-w-sm mx-auto mt-6">
            <Sparkles size={16} className="text-gold-500" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.link}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="parchment-card rounded-xl p-4 flex items-center gap-4 glow-hover block"
              >
                <div className="w-12 h-12 rounded-full bg-lavender-100 flex items-center justify-center text-lavender-600 shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-sans)] text-xs text-wood-400 uppercase tracking-wider">{info.label}</p>
                  <p className="font-[family-name:var(--font-elegant)] text-lg font-semibold text-lavender-800">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="parchment-card rounded-xl p-5">
              <h3 className="font-[family-name:var(--font-elegant)] text-lg font-bold text-lavender-700 mb-4">
                Follow Our Fairy Tale
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${social.color} border border-transparent hover:border-current/20`}
                  >
                    <div className="text-lavender-500">{social.icon}</div>
                    <div>
                      <p className="font-[family-name:var(--font-sans)] text-sm font-semibold text-wood-700">{social.name}</p>
                      <p className="font-[family-name:var(--font-sans)] text-xs text-wood-500">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick hours */}
            <div className="parchment-card rounded-xl p-5">
              <h3 className="font-[family-name:var(--font-elegant)] text-lg font-bold text-lavender-700 mb-3">
                🕐 Opening Hours
              </h3>
              <div className="font-[family-name:var(--font-body)] text-wood-600 space-y-2">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-lavender-700">9:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday – Sunday</span>
                  <span className="font-semibold text-lavender-700">8:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Public Holidays</span>
                  <span className="font-semibold text-lavender-700">8:00 AM – 10:00 PM</span>
                </div>
              </div>
              <p className="text-xs text-wood-400 mt-3 italic">
                * Kitchen closes 30 minutes before closing time
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="parchment-card rounded-2xl p-6 md:p-8">
              <h2 className="storybook-heading text-2xl mb-6">✨ Send Us a Message</h2>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <span className="text-6xl mb-4 block">💌</span>
                  <h3 className="font-[family-name:var(--font-elegant)] text-2xl text-lavender-700 mb-2">
                    Message Sent!
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-wood-600">
                    Thank you for reaching out! We'll respond within 24 hours. ✨
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-[family-name:var(--font-sans)] text-sm text-wood-600 mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-parchment-300 bg-parchment-50 font-[family-name:var(--font-body)] text-wood-700 focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-lavender-400 transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block font-[family-name:var(--font-sans)] text-sm text-wood-600 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-parchment-300 bg-parchment-50 font-[family-name:var(--font-body)] text-wood-700 focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-lavender-400 transition"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-[family-name:var(--font-sans)] text-sm text-wood-600 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-parchment-300 bg-parchment-50 font-[family-name:var(--font-body)] text-wood-700 focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-lavender-400 transition"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block font-[family-name:var(--font-sans)] text-sm text-wood-600 mb-1">Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-parchment-300 bg-parchment-50 font-[family-name:var(--font-body)] text-wood-700 focus:outline-none focus:ring-2 focus:ring-lavender-300 appearance-none"
                      >
                        <option value="">Select a topic</option>
                        <option value="reservation">Table Reservation</option>
                        <option value="event">Event Booking</option>
                        <option value="feedback">Feedback</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-sans)] text-sm text-wood-600 mb-1">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-parchment-300 bg-parchment-50 font-[family-name:var(--font-body)] text-wood-700 focus:outline-none focus:ring-2 focus:ring-lavender-300 focus:border-lavender-400 transition resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <button type="submit" className="btn-magical w-full flex items-center justify-center gap-2">
                    <Send size={18} /> Send Your Message ✨
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="storybook-heading text-2xl md:text-3xl text-center mb-8">❓ Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { q: 'Do I need to make a reservation?', a: 'We recommend booking for weekends and holidays. Walk-ins are welcome on weekdays!' },
              { q: 'Is the café wheelchair accessible?', a: 'Yes! Our ground floor, garden terrace, and restrooms are fully wheelchair accessible.' },
              { q: 'Do you have vegetarian/vegan options?', a: 'Absolutely! Over 40% of our menu is vegetarian, and we can customize most dishes to be vegan.' },
              { q: 'Can we host private events?', a: 'Yes! Our Tower Room (up to 20 guests) and Garden Terrace (up to 50) are available for private events.' },
              { q: 'Is there a dress code?', a: 'Come as you are! But if you want to dress up as a fairy-tale character, we absolutely love it! 👑' },
              { q: 'Do you offer takeaway?', a: 'Yes, most of our menu items are available for takeaway. Call ahead for faster service!' },
            ].map((faq, i) => (
              <div key={i} className="parchment-card rounded-xl p-5">
                <h4 className="font-[family-name:var(--font-elegant)] text-base font-bold text-lavender-700 mb-2">{faq.q}</h4>
                <p className="font-[family-name:var(--font-body)] text-wood-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
