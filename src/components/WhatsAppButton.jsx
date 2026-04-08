import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 md:left-auto md:right-8 z-[100] flex justify-center md:justify-end px-4">
      <a 
        href="https://wa.me/919876543210" // Replace with actual number
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-yellow-400 hover:bg-gray-900 text-black hover:text-white px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(250,204,21,0.3)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out active:scale-95"
      >
        <div className="relative">
          {/* Pulsing effect for attention */}
          <span className="absolute inset-0 rounded-full bg-black/10 animate-ping group-hover:bg-white/20" />
          <MessageCircle size={22} className="relative fill-current" />
        </div>
        
        <div className="flex flex-col leading-none pr-1">
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100">
            Quick Enquiry
          </span>
          <span className="text-sm font-black uppercase tracking-tighter">
            Join Workshop
          </span>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;