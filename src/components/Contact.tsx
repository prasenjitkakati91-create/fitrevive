import { motion } from "motion/react";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", service: "Manual Therapy", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = { name: "", email: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", service: "Manual Therapy", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 transform -translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-400 font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Get In Touch</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ready to Start Your <br />
              <span className="text-blue-400 text-gradient bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Recovery Journey?</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
              Contact us today to schedule your initial assessment. Our team is here to answer any questions you may have about our treatments and insurance coverage.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Call Us", desc: "+1 (555) 123-4567", sub: "Mon-Fri, 8am-8pm" },
                { icon: Mail, title: "Email Us", desc: "hello@fitrevive.com", sub: "We'll reply within 24h" },
                { icon: MapPin, title: "Visit Us", desc: "123 Health Ave, Suite 456", sub: "Medical District, NY 10001" },
              ].map((item) => (
                <div key={item.title} className="flex gap-6 group">
                  <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-slate-200 font-medium mb-1">{item.desc}</p>
                    <p className="text-slate-500 text-sm">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl text-slate-900"
          >
            <h3 className="text-2xl font-bold mb-8">Book Your Assessment</h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Request Sent Successfully!</h4>
                <p className="text-slate-600">Thank you for reaching out. Our team will contact you shortly to confirm your appointment.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'} focus:ring-2 outline-none transition-all`}
                    />
                    {errors.name && <p className="text-red-500 text-xs font-medium mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'} focus:ring-2 outline-none transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-xs font-medium mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600">Service Needed</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                  >
                    <option>Manual Therapy</option>
                    <option>Sports Injury</option>
                    <option>Post-Surgery Rehab</option>
                    <option>Chronic Pain</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-600">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your condition..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                  Send Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
