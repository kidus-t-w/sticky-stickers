import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Express, Impress, and <span className="text-orange-500">Stick.</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Transform your ideas into vibrant, custom stickers with Sticky Stickers
          </p>
          <Link href="/collection" className="bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600">
            Browse Our Collection
          </Link>
          <div className="mt-8 flex space-x-8">
            <div>
              <span className="block text-2xl font-bold text-gray-800">1000+</span>
              <span className="block text-gray-600">Stickers</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-gray-800">25+</span>
              <span className="block text-gray-600">Partners</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-gray-800">500+</span>
              <span className="block text-gray-600">Customers</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Main Image */}
          <div className="flex">
            <Image src="/assets/hero-section/hero.png" alt="Stickers on laptop" width={500} height={700} className="rounded-full object-cover w-[250px] h-[400px]" />
          </div>
          {/* Stacked Images */}
          <div className="flex flex-col space-y-4">
            <div>
              <Image src="/assets/hero-section/hero.png" alt="Homer sticker" width={500} height={700} className="rounded-full object-cover w-[200px] h-[100px]" />
            </div>
            <div>
              <Image src="/assets/hero-section/hero.png" alt="Sticker collection" width={500} height={700} className="rounded-full object-cover w-[200px] h-[300px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <Image src="/assets/hero-section/hero.png" alt="Sticker collection" width={500} height={700} className="rounded-full object-cover w-[200px] h-[250px]" />
            </div>
            <div>
              <Image src="/assets/hero-section/hero.png" alt="Homer sticker" width={500} height={700} className="rounded-full object-cover w-[200px] h-[150px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
