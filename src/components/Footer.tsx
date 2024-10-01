import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Buttons Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <Image src="/logo.png" alt="Sticky Stickers Logo" width={40} height={40} />
              <span className="text-xl font-bold ml-2">Sticky Stickers</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/shop" className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600">
                Shop Now
              </Link>
              <Link href="/contact" className="border border-gray-800 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100">
                Contact us
              </Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            <Link href="https://www.instagram.com" target="_blank">
              <Image src="/assets/social/instagram.webp" alt="Instagram" width={30} height={30} className="rounded-full" />
            </Link>
            <Link href="https://www.facebook.com" target="_blank">
              <Image src="/assets/social/facebook.png" alt="Facebook" width={30} height={30} className="rounded-full" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <Image src="/assets/social/twitter.png" alt="Twitter" width={30} height={30} className="rounded-full" />
            </Link>
            
          </div>

          {/* Footer Links */}
          <div className="flex justify-center md:justify-end space-x-8 text-sm">
            <div className="flex flex-col space-y-2 text-gray-600">
              <Link href="/how-to-order" className="hover:underline">
                How to order
              </Link>
              <Link href="/categories" className="hover:underline">
                Categories
              </Link>
              <Link href="/about-us" className="hover:underline">
                About us
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact us
              </Link>
            </div>
            <div className="flex flex-col space-y-2 text-gray-600">
              <Link href="/pricing" className="hover:underline">
                Price
              </Link>
              <Link href="/delivery" className="hover:underline">
                Delivery
              </Link>
              <Link href="/stickers" className="hover:underline">
                Stickers
              </Link>
              <Link href="/cart" className="hover:underline">
                Cart
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-600 text-sm">
          © 2024 Sticky Stickers
        </div>
      </div>
    </footer>
  );
};

export default Footer;
