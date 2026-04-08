import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight, 
  MessageCircle, 
  PlayCircle 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="bg-yellow-400 p-2 rounded-xl shadow-sm">
               <img src="/favicon.ico" alt="Kapila Logo" className="h-10 w-auto object-contain" /> 
              </div>
              <span className="font-black text-2xl tracking-tight ">Kapila Kochi</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of actors in Kerala through rigorous training and cinematic excellence since inception.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold uppercase tracking-widest text-[10px] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Acting Programs', 'Masterclasses', 'Production House', 'Success Stories', 'Admissions'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-yellow-600 text-sm flex items-center group transition-colors">
                    {link}
                    <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all text-yellow-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-gray-900 font-bold uppercase tracking-widest text-[10px] mb-8">Visit Studio</h4>
            <ul className="space-y-5">
              <li className="flex gap-4 text-gray-500 text-sm">
                <div className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-yellow-600" />
                </div>
                <span>Kochi, Kerala, India <br /> <span className="text-xs opacity-70">Near Metro Pillar 450</span></span>
              </li>
              <li className="flex gap-4 text-gray-500 text-sm">
                <div className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-yellow-600" />
                </div>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-4 text-gray-500 text-sm">
                <div className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-yellow-600" />
                </div>
                <span>hello@kapilaschool.com</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA Card */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-4">
              <MessageCircle size={28} className="text-green-600 fill-green-600/10" />
            </div>
            <h4 className="text-gray-900 font-bold uppercase tracking-widest text-[10px] mb-2">Stay Updated</h4>
            <p className="text-gray-400 text-[11px] mb-6 leading-relaxed">
              Get instant audition alerts & workshop news directly on your phone.
            </p>
            <a 
              href="https://wa.me/your-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-full text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-100"
            >
              Join WhatsApp Group
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-medium">
            © {currentYear} Kapila Acting School. Crafted for Kerala.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-gray-900 text-[10px] uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-gray-900 text-[10px] uppercase tracking-widest transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;