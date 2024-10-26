import Link from "next/link";
import Image from "next/image";

import FAQSection from "@/components/FAQ";
import PageTitle from "@/components/PageTitle";

const AboutPage = () => {
  return (
    <>
      <PageTitle title="About Us" />
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12 text-center space-y-12">
          {/* Why Pick Us Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why pick us
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              At Sticky Stickers, we don&apost just create; we innovate with a
              commitment to eco-friendly practices and budget-friendly prices,
              making high-quality adhesion accessible to all. Our journey has
              been nothing short of extraordinary, crossing milestones of over
              1,000 unique sticker designs and personalizing the work of more
              than 800 individuals. Looking ahead, our vision is clear: to
              spread the joy of Sticky Stickers across Ethiopia in the next five
              years, one sticker at a time. Join us as we stick to excellence
              and adorn the world with creativity!
            </p>
          </div>

          {/* About Us Section */}
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 mx-auto">
            <div className="flex justify-center items-center order-last md:order-first">
              <Image
                src="/assets/delivery.webp"
                alt="Delivery Illustration"
                width={400}
                height={300}
                className="object-contain h-auto w-auto"
              />
            </div>
            <div className="text-left my-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
              <p className="text-gray-600 mb-6">
                Welcome to Sticky Stickers, where the essence of quality meets
                creativity in Addis Ababa, Ethiopia. Born amidst the global
                pause of the COVID-19 pandemic, our humble beginnings trace back
                to a single visionary entrepreneur, selling handcrafted stickers
                to friends. Today, Sticky Stickers has blossomed, fueling the
                vibrant youth with a canvas for self-expression. From the backs
                of laptops and tablets to the everyday items like notebooks and
                mirrors, we stand by our conviction for supreme quality, a
                statement echoed by our patrons&rsquo; loyalty and the remarkable
                adherence of our work.
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
            <div className="my-auto">
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

      <section className="bg-gradient-to-r from-blue-500 to-pink-300 py-8 rounded-lg shadow-lg">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-white md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Download now
            </h2>
            <p className="text-sm md:text-lg leading-relaxed mb-4">
              See why so many people enjoy our app. See why so many people enjoy
              our app.
            </p>
            <Link
              href="/download"
              className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold inline-block"
            >
              Download
            </Link>
          </div>

          {/* Image and Rating Section */}
          <div className="md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
            <Image
              src="/assets/hero-section/hero.png"
              alt="Phone Mockup"
              width={400}
              height={300}
              className="drop-shadow-lg"
            />
            <div className="ml-6 text-center">
              <div className="text-black font-bold">★★★★★</div>
              <div className="text-sm text-gray-600">4.8 - 10k reviews</div>
            </div>
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  );
};

export default AboutPage;
