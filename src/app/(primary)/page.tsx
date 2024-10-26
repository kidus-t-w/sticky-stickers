
import Image from "next/image";
import Link from "next/link";

import HeroSection from "@/components/HeroSection";
import ShopNow from "@/components/ShopNow";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 mx-auto">
        {/* Pick-Up or Delivery Section */}
        <div className="flex justify-center items-center order-last md:order-first">
          <Image
            src="/assets/delivery.webp"
            alt="Delivery Illustration"
            width={400}
            height={300}
            className="object-contain h-auto w-auto"
          />
        </div>
        <div className=" my-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 mb-6">
            Welcome to Sticky Stickers, where the essence of quality meets
            creativity in Addis Ababa, Ethiopia. Born amidst the global pause of
            the COVID-19 pandemic, our humble beginnings trace back to a single
            visionary entrepreneur, selling handcrafted stickers to friends.
            Today, Sticky Stickers has blossomed, fueling the vibrant youth with
            a canvas for self-expression. From the backs of laptops and tablets
            to the everyday items like notebooks and mirrors, we stand by our
            conviction for supreme quality, a statement echoed by our patrons’ 
            loyalty and the remarkable adherence of our work.
          </p>
          <Link
            href="/shop"
            className="inline-block border border-gray-800 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
          >
            Order Now
          </Link>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Categories
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/catagory/ethiopia.jpg"
                alt="Ethiopia Category"
                width={300}
                height={200}
                className="rounded-lg object-cover w-[500px] h-[350px] hover:scale-105"
              />
              <span className="mt-4 text-lg font-semibold text-gray-800">
                Ethiopia
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/catagory/sports.jpeg"
                alt="Sports Category"
                width={300}
                height={200}
                className="rounded-lg object-cover w-[500px] h-[350px] hover:scale-105"
              />
              <span className="mt-4 text-lg font-semibold text-gray-800">
                Sports
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/catagory/anime.webp"
                alt="Anime Category"
                width={300}
                height={200}
                className="rounded-lg object-cover w-[500px] h-[350px] hover:scale-105"
              />
              <span className="mt-4 text-lg font-semibold text-gray-800">
                Anime
              </span>
            </div>
          </div>

          {/* Show More Button */}
          <div className="mt-8">
            <Link
              href="/shop"
              className="hover:bg-orange-500 text-black px-6 py-3 rounded-lg text-lg font-semibold border border-orange-500"
            >
              Show more
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-white to-orange-200 bg-cover bg-center bg-fixed">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Shop <span className="text-orange-500">now</span>
          </h2>
          <ShopNow category="Animation" title="Animation" />
          <ShopNow category="Anime" title="Anime" />
          <ShopNow category="Music" title="Music" />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* How to Order Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How to order
              </h2>
              <ol className="list-decimal list-inside text-gray-600 mb-6">
                <li>Visit the website&apos;s shop at www.stickystickers.com</li>
                <li>Click on the + icon under your favorite sticker</li>
                <li>Select the size you want, and the amount!</li>
                <li>
                  After you&apos;re done selecting all your stickers, click on the
                  icon on top to finish shopping.
                </li>
                <li>
                  Fill in your personal details, and select your delivery
                  method.
                </li>
                <li>
                  You&apos;re done! We&apos;ll contact you when your stickers are ready.
                </li>
              </ol>
              <p className="text-gray-600 mb-6">
                We look forward to providing you with top-notch customized
                stickers that will make you stand out from the crowd!
              </p>
              <Link
                href="/shop"
                className="inline-block border border-gray-800 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
              >
                Order Now
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/assets/how-to-order.webp"
                alt="Order Illustration"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Pick-Up or Delivery Section */}
            <div className="flex justify-center items-center order-last md:order-first">
              <Image
                src="/assets/delivery.webp"
                alt="Delivery Illustration"
                width={400}
                height={300}
                className="object-contain h-auto w-auto"
              />
            </div>
            <div className=" my-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                PICK-UP? DELIVERY? WHY NOT BOTH!
              </h2>
              <p className="text-gray-600 mb-6">
                Once your stickers are good to go, you&apos;ve got two awesome
                choices. Swing by our Megenagna shop to grab them in person, or
                level up the convenience with delivery anywhere in Addis for
                just 190 Birr extra. It&apos;s your call – pick up or delivered,
                we&apos;ve got you covered! But here&apos;s the exciting part: order
                plenty of stickers, and we&apos;ll deliver them to you for free!
              </p>
              <Link
                href="/shop"
                className="inline-block border border-gray-800 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
