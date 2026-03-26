import { motion } from "motion/react";
import { ClipboardList, Activity, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "1. Initial Assessment",
    description: "We start with a comprehensive evaluation of your condition, medical history, and personal goals.",
  },
  {
    icon: Activity,
    title: "2. Custom Treatment",
    description: "Our experts design a personalized rehabilitation program using evidence-based techniques.",
  },
  {
    icon: ThumbsUp,
    title: "3. Active Recovery",
    description: "We guide you through your recovery journey, adjusting the plan as you regain strength and mobility.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Your Path to Recovery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            A simple, transparent, and effective process designed to get you back to doing what you love.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 -z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white rounded-full shadow-xl shadow-blue-100/50 flex items-center justify-center mb-8 border-4 border-slate-50 relative">
                <div className="absolute inset-0 bg-blue-50 rounded-full animate-ping opacity-20" />
                <step.icon className="w-10 h-10 text-blue-600 relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
