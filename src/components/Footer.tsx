import { Activity, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">FitRevive</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
              Professional physiotherapy and rehabilitation services for a healthier, more active life. We are dedicated to your recovery and well-being.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors border border-slate-800"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {[
                { name: "Home", href: "#home" },
                { name: "Services", href: "#services" },
                { name: "About Us", href: "#about" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {["Manual Therapy", "Sports Injury", "Post-Surgery Rehab", "Chronic Pain", "Performance"].map((service) => (
                <li key={service}>
                  <a href="#services" className="hover:text-blue-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map((legal) => (
                <li key={legal}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {legal}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} FitRevive Physiotherapy Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
