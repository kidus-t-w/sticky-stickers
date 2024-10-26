import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-500 mb-4">Get in touch</h2>
        <p className="text-center text-gray-600 mb-12">Any question or remarks? Just write us a message!</p>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-12 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
          {/* Contact Information */}
          <div className="md:w-1/2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <p className="text-white mb-6">Say something to start a live chat!</p>
            <ul className="text-white space-y-4">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a1 1 0 001.11 0L21 8m-9 5.74V21"></path>
                </svg>
                +251 915579335
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2a6 6 0 016 6v6a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6h8z"></path>
                </svg>
                kidustilahunet@gmail.com
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z"></path>
                </svg>
                Lebu, Addis Ababa, Ethiopia
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="#" target="_blank" className="text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 00-4 2H9a5 5 0 00-5 5v4a5 5 0 005 5h1a5 5 0 004 2h3a5 5 0 005-5V7a5 5 0 00-5-5zM12 16a4 4 0 110-8 4 4 0 010 8zm6-8h-2v2h2V8zm-4-4a4 4 0 110-8 4 4 0 010 8z"></path>
                </svg>
              </a>
              <a href="#" target="_blank" className="text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 2.999A10.978 10.978 0 0019.744.816c-.834.495-1.75.877-2.725 1.075C15.772.69 14.58.1 13.319.1c-2.507 0-4.545 2.047-4.545 4.576 0 .358.04.706.12 1.043-3.768-.19-7.108-1.993-9.339-4.74C.512 1.55.1 2.504.1 3.545c0 1.58.805 2.973 2.03 3.792-.747-.024-1.451-.228-2.066-.57v.056c0 2.21 1.568 4.052 3.646 4.469-.378.104-.777.16-1.185.16-.292 0-.574-.028-.851-.08.575 1.801 2.247 3.108 4.227 3.142-1.546 1.217-3.49 1.942-5.606 1.942-.364 0-.724-.021-1.078-.064C2.374 20.2 5.19 21 8.24 21c7.69 0 11.897-6.384 11.897-11.917 0-.18-.004-.36-.012-.538A8.495 8.495 0 0023 3z"></path>
                </svg>
              </a>
              <a href="#" target="_blank" className="text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9 2H13.1C18.63 2 22 5.373 22 10.9V13.1C22 18.627 18.63 22 13.1 22H10.9C5.373 22 2 18.627 2 13.1V10.9C2 5.373 5.373 2 10.9 2zM9 16.5H6V7h3v9.5zM7.5 6.25a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM17 16.5h-3v-4c0-1.02-.8-2.01-2-2.01S10 11.48 10 12.5v4H7v-9.5h3v1.21c.87-.95 2.14-1.71 3.47-1.71 2.55 0 4.53 2.02 4.53 4.5v5.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
              />
              <textarea
                placeholder="Write your message.."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
