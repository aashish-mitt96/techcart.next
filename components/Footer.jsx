const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        
        {/* Brand Logo & Tagline */}
        <div>
          <h2 className="text-xl font-bold">SuitUp</h2>
          <p className="text-sm mt-2">Your go-to store for the latest fashion trends.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/shop" className="hover:text-blue-600">Shop</a></li>
            <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-blue-600">FAQs</a></li>
            <li><a href="/returns" className="hover:text-blue-600">Return Policy</a></li>
            <li><a href="/shipping" className="hover:text-blue-600">Shipping Info</a></li>
            <li><a href="/privacy" className="hover:text-blue-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media & Payment Methods */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-xl hover:text-blue-600">🔵</a>
            <a href="#" className="text-xl hover:text-pink-500">📷</a>
            <a href="#" className="text-xl hover:text-blue-400">🐦</a>
          </div>
          <h3 className="text-lg font-semibold mt-5 mb-3">We Accept</h3>
          <div className="flex space-x-3">
            <img src="/visa.png" alt="Visa" className="h-6"/>
            <img src="/paypal.png" alt="PayPal" className="h-6"/>
            <img src="/mastercard.png" alt="Mastercard" className="h-6"/>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © 2025 SuitUp. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
