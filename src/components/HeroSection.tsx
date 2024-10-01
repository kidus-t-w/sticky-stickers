import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-orange-400 to-red-500 py-12 md:py-24">
      <div className=" container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-12 md:mb-0 ">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Express, Impress, and <span className="text-white">Stick.</span>
          </h1>
          <p className="text-white text-lg mb-6">
            Transform your ideas into vibrant, custom stickers with Sticky
            Stickers
          </p>
          <div className="mt-16 mb-12">
            <Link
              href="/shop"
              className="bg-teal-500 text-white  px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-700"
            >
              Browse Our Collection
            </Link>
          </div>
          <div className="mt-8 flex space-x-8">
            <div>
              <span className="block text-2xl font-bold text-white">1000+</span>
              <span className="block text-white">Stickers</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">25+</span>
              <span className="block text-white">Partners</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">500+</span>
              <span className="block text-white">Customers</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className=" flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hidden sm:flex">
          {/* Main Image */}
          <div className="flex">
            <Image
              src="/assets/hero-section/hero-1.jpg"
              alt="Stickers on laptop"
              width={500}
              height={700}
              className="rounded-full object-cover w-[250px] h-[400px]"
            />
          </div>
          {/* Stacked Images */}
          <div className="flex flex-col space-y-4">
            <div>
              <Image
                src="/assets/hero-section/hero-2.jpg"
                alt="Homer sticker"
                width={500}
                height={700}
                className="rounded-full object-cover w-[200px] h-[100px]"
              />
            </div>
            <div>
              <Image
                src="/assets/hero-section/hero-3.jpg"
                alt="Sticker collection"
                width={500}
                height={700}
                className="rounded-full object-cover w-[200px] h-[300px]"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <Image
                src="/assets/hero-section/hero-4.webp"
                alt="Sticker collection"
                width={500}
                height={700}
                className="rounded-full object-cover w-[200px] h-[250px]"
              />
            </div>
            <div>
              <Image
                src="/assets/hero-section/hero-5.jpg"
                alt="Homer sticker"
                width={500}
                height={700}
                className="rounded-full object-cover w-[200px] h-[150px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
