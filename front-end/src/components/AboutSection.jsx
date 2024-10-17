import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <section className="bg-[#f4a77a]/[.15] py-16 px-4">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Images */}
      <div className="relative w-full lg:w-1/2 aspect-[4/3] order-2 lg:order-1">
        <img 
          src="/asserts/img/2148342044.jpg" 
          alt="Image principale"
          className="w-full h-full object-cover rounded-3xl"
        />
        <img 
          src="/asserts/img/2149966761.jpg" 
          alt="Image secondaire"
          className="absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square object-cover rounded-3xl border-2 border-[#e95b41]"
        />
      </div>

      {/* Contenu */}
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center order-1 lg:order-2">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#2f4858] mb-4">
          A-Propos
        </h1>
        <h2 className="text-xl md:text-2xl text-[#2f4858] mb-4">
          Excepteur efficient emerging, minim veniam anim aute carefully
        </h2>
        <p className="text-[#2f4858] mb-8">
          Body text for your whole article or post. Body text for your whole article or post.
          Body text for your whole article or post. We'll put in some lorem. Body text for 
          your whole article or post.
        </p>
        <Link 
          to="/a-propos"
          className="inline-block px-6 py-3 bg-[#ff9a61] text-[#2f4858] font-medium text-lg rounded hover:bg-[#e88b55] transition-colors"
        >
          Button Text
        </Link>
      </div>
    </div>
  </section>
);

export default About;