import { motion } from "motion/react";
import { 
  Activity, Heart, Shield, Zap, Target, Users, 
  Baby, Accessibility, Flower2, Brain, Wind, Video 
} from "lucide-react";

const services = [
  {
    title: "Manual Therapy",
    description: "Hands-on techniques to mobilize joints and soft tissues, reducing pain and improving movement.",
    icon: Activity,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Sports Injury",
    description: "Specialized rehabilitation for athletes to get back to their peak performance safely and quickly.",
    icon: Zap,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Post-Surgery Rehab",
    description: "Structured recovery programs following orthopedic surgeries to restore strength and function.",
    icon: Shield,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Chronic Pain",
    description: "Evidence-based management strategies for long-term conditions like back pain and arthritis.",
    icon: Heart,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Performance Coaching",
    description: "Biomechanical analysis and strength training to prevent injuries and optimize athletic output.",
    icon: Target,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Corporate Wellness",
    description: "Ergonomic assessments and injury prevention programs for modern workplace environments.",
    icon: Users,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Pediatric Physio",
    description: "Specialized care for children to improve motor skills, strength, and overall development.",
    icon: Baby,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Geriatric Care",
    description: "Programs designed to improve mobility, balance, and independence for the elderly population.",
    icon: Accessibility,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Women's Health",
    description: "Expert care for pelvic floor dysfunction, pre/post-natal conditions, and other health needs.",
    icon: Flower2,
    color: "bg-rose-100 text-rose-600",
  },
  {
    title: "Neurological Rehab",
    description: "Rehabilitation for conditions like Stroke, MS, or Parkinson's to maximize functional recovery.",
    icon: Brain,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Vestibular Therapy",
    description: "Specialized treatment for dizziness, vertigo, and balance disorders related to the inner ear.",
    icon: Wind,
    color: "bg-teal-100 text-teal-600",
  },
  {
    title: "Tele-Physiotherapy",
    description: "Convenient online consultations and guided exercise programs from the comfort of your home.",
    icon: Video,
    color: "bg-sky-100 text-sky-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Our Specialized Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            We offer a comprehensive range of physiotherapy treatments designed to address your specific health goals and physical challenges.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group"
            >
              <motion.div 
                whileHover={{ 
                  y: -8,
                  rotate: [0, -5, 5, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${service.color}`}
              >
                <service.icon className="w-7 h-7" />
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                href="#contact"
                className="text-blue-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More
                <Activity className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
