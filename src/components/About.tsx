import { motion } from "motion/react";
import { CheckCircle2, Award, Clock, MapPin } from "lucide-react";

export default function About() {
  const features = [
    { icon: Award, title: "Certified Specialists", desc: "Our team consists of highly qualified and registered physiotherapists." },
    { icon: Clock, title: "Flexible Scheduling", desc: "We offer early morning and evening appointments to fit your busy life." },
    { icon: MapPin, title: "Central Location", desc: "Easily accessible clinic with dedicated parking and modern facilities." },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=2070"
                alt="Physical Therapy Clinic"
                className="w-full h-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl z-20 hidden sm:block">
              <div className="text-4xl font-bold mb-1">12+</div>
              <div className="text-sm font-medium opacity-90 uppercase tracking-wider">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">About FitRevive</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Your Partner in <br />
              <span className="text-blue-600">Physical Health.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At FitRevive, we believe that movement is medicine. Our clinic was founded on the principle of providing evidence-based, patient-centered care that goes beyond just treating symptoms.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Insurance Accepted
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                No Referral Needed
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
