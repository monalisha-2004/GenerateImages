const Footer = () => {
  const handleLinkClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-black/60 text-gray-300 pt-12 px-6 relative">
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_40%)]" />
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500 mb-4">AI Chatbot</h2>
          <p className="text-gray-400 leading-relaxed w-[70%]">
            Turn your imagination into reality with our AI-powered chatbot and image
            generator. Fast, creative, and always evolving.
          </p>
        </div>

        {/* Quick Links */}
        <div className="z-20">
          <h3 className="text-base lg:text-lg font-semibold mb-3 text-white">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#gallery"
                className="hover:text-blue-500 transition"
                onClick={() => handleLinkClick("gallery")}
              >
                Gallery
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-blue-500 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-blue-500 transition">
                Features
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="z-20">
          <h3 className="text-base lg:text-lg font-semibold mb-3 text-white">
            Resources
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://pollinations.ai"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                Pollinations API
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-gray-800 mt-10 py-4 text-center text-xs text-gray-500">
        &copy; 2025 AI Chatbot. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
