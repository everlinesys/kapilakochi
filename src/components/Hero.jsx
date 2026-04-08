import React from 'react';
import { Play, ArrowRight, Star } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-40 bg-white overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        {/* Soft yellow glow in the corner */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl" />
        {/* Subtle pattern or mesh gradient could go here */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-[11px] font-bold tracking-widest uppercase">Premier Acting Studio in Kochi</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight mal">
              കല <br /> 
              <span className="text-yellow-500">പരിശീലനം</span> <br />
              ഒത്തുചേരൽ
            </h1>

            <p className="max-w-md text-gray-500 text-lg md:text-xl font-normal leading-relaxed">
              Master the craft of performance at Kerala's leading institute for method acting and cinematic arts. From script to screen, we bridge the gap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gray-900 hover:bg-yellow-500 text-white hover:text-black font-bold px-10 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 uppercase tracking-widest text-sm shadow-xl shadow-gray-200">
                Apply Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white border border-gray-200 hover:border-yellow-500 text-gray-900 px-10 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 uppercase tracking-widest text-sm shadow-sm">
                <Play size={18} className="text-yellow-500 fill-yellow-500 group-hover:scale-110 transition-transform" />
                Watch Showreel
              </button>
            </div>

            <div className="flex items-center gap-10 pt-10 border-t border-gray-100">
              <div className="space-y-1">
                <p className="text-3xl font-black text-gray-900">500+</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Alumni Placed</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black text-gray-900">12+</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Expert Mentors</p>
              </div>
            </div>
          </div>

          {/* Right Column: Soft Visuals */}
          <div className="relative hidden lg:block">
            {/* The Main Image Container */}
            <div className="relative z-20 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border-[12px] border-white">
               <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1000" 
                    alt="Actor on stage"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  />
                  {/* Glassmorphism Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-white/70 rounded-2xl border border-white/20">
                    <p className="text-xs font-bold text-gray-900 uppercase">Current Workshop</p>
                    <p className="text-[10px] text-gray-600">Enrolling now for Summer 2026</p>
                  </div>
               </div>
            </div>

            {/* Decorative Soft Shapes */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl -z-10" />
            <div className="absolute top-10 right-10 w-24 h-24 bg-gray-900 rounded-3xl rotate-12 -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;