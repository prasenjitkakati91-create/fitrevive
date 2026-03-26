import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Professional Athlete",
    content: "The sports injury rehabilitation at FitRevive is second to none. They got me back on the field faster than I ever thought possible. The personalized care is truly exceptional.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content: "After years of chronic back pain from sitting at a desk, the manual therapy and ergonomic advice I received here have been life-changing. I can finally work without discomfort.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
  {
    name: "Emma Williams",
    role: "Retired Teacher",
    content: "The post-surgery rehab program was perfectly paced. The therapists are so patient and encouraging. I've regained my mobility and my independence. Highly recommend!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=emma",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            What Our Patients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Real stories from people who have regained their strength and mobility with our expert care.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-100 opacity-50 group-hover:text-blue-200 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
