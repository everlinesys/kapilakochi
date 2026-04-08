import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { FaInstagram as Instagram, FaLinkedin as Linkedin } from 'react-icons/fa';

const Faculty = () => {
    const mentors = [
        {
            name: "Sujith Kapila",
            role: "Head of Kapila Acting School",
            expertise: "Drama Direction & Method Acting",
            image: "/sujithmaster.jpg",
        },
        {
            name: "Aneesh",
            role: "Voice & Diction Coach",
            expertise: "Classical Theatre",
            image: "/aneesh.JPG",
        },
        {
            name: "Rahul Bose",
            role: "Cinematic Movement",
            expertise: "Physical Theatre",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
        },
        {
            name: "Meera Krishnan",
            role: "Screen Presence",
            expertise: "Film Production",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
        }
    ];

    return (
        <section className="bg-white py-24 relative overflow-hidden">
            {/* Soft background decorative text */}
            <div className="absolute top-20 left-[-2%] text-[12rem] font-black text-gray-50 select-none uppercase tracking-tighter leading-none">
                Masters
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-100">
                            <Award size={16} />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Our Mentors</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                            Learn From <br /> <span className="text-yellow-500">The Masters</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-gray-400 text-sm font-medium leading-relaxed border-l-2 border-yellow-400 pl-6">
                        Our faculty consists of active industry professionals currently shaping the landscape of Indian cinema.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {mentors.map((mentor, index) => (
                        <div key={index} className="group">
                            {/* Image Card */}
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-yellow-100/50 group-hover:-translate-y-2">
                                <img
                                    src={mentor.image}
                                    alt={mentor.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />

                                {/* Social Overlay - Soft style */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute bottom-8 left-0 w-full flex justify-center gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors shadow-lg">
                                        <Instagram size={18} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors shadow-lg">
                                        <Linkedin size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Info Area */}
                            <div className="mt-8 text-center space-y-2">
                                <p className="text-[10px] text-yellow-600 font-bold uppercase tracking-[0.2em]">
                                    {mentor.role}
                                </p>
                                <h3 className="text-2xl font-black text-gray-900 tracking-tight transition-colors group-hover:text-yellow-600">
                                    {mentor.name}
                                </h3>
                                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">{mentor.expertise}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft CTA */}
                <div className="mt-24 text-center">
                    <button className="group inline-flex items-center gap-6 bg-gray-50 hover:bg-yellow-400 px-8 py-4 rounded-full transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-yellow-200">
                        <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">Meet the whole team</span>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                            <ChevronRight size={20} />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Faculty;