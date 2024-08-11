import React from 'react';

const Contact = () => (
  <section id="contact" className="bg-white py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-4">Contact</h2>
      <p className="text-lg text-gray-700 mb-6">
        Feel free to reach out to me for any inquiries or collaborations.
      </p>
      <div className="flex justify-center space-x-6 mb-6">
        {/* Facebook */}
        <a href="https://www.facebook.com/abdulkader9092" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xl font-medium">
          Facebook
        </a>
        {/* WhatsApp */}
        <a href="https://wa.me/qr/7LUQDBHQPDGYK1" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 text-xl font-medium">
          WhatsApp
        </a>
        {/* GitHub */}
        <a href="https://github.com/abdulkader-dev" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 text-xl font-medium">
          GitHub
        </a>
        {/* Email */}
        <a href="mailto:abdulkader.bd.2015@gmail.com
" className="text-red-600 hover:text-red-800 text-xl font-medium">
          Email
        </a>
      </div>
      <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 text-xl font-medium">
        UP
      </a>
    </div>
  </section>
);

export default Contact;
