import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setBackToTopVisible(true);
    } else {
      setBackToTopVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Important Notice Banner */}
      <div className="bg-yellow-400 text-black text-center py-3 px-4 font-bold text-lg">
        WICHTIG: Reparaturen nur mit Termin! Termine telefonisch oder online
        buchbar unter "Reparatur buchen"
      </div>


      {/* Navigation */}
      <nav className="bg-white text-gray-800 shadow-lg sticky top-0 z-50 text-lg">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8962820f2d6e48e38cf68b3d0df4ccdd%2F637a59f63ebc4cec8e5d21742c2b493c?format=webp&width=800"
              alt="PixelFix24 Logo"
              className="h-32 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ml-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-black hover:text-blue-600 transition py-1 font-medium"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-black hover:text-blue-600 transition py-1 font-medium"
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-black hover:text-blue-600 transition py-1 font-medium"
            >
              Bewertungen
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black hover:text-blue-600 transition py-1 font-medium"
            >
              Kontakt
            </button>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+017679817190"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              <i className="fas fa-phone mr-2"></i> 017679817190
            </a>
            <a
              href="https://wa.me/017679817190"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              <i className="fab fa-whatsapp mr-2"></i> WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white px-6 py-3 text-lg border-t border-gray-200">
            <button
              onClick={() => scrollToSection("services")}
              className="block py-2 hover:text-blue-600 transition text-black font-medium w-full text-left"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block py-2 hover:text-blue-600 transition text-black font-medium w-full text-left"
            >
              Über uns
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block py-2 hover:text-blue-600 transition text-black font-medium w-full text-left"
            >
              Bewertungen
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block py-2 hover:text-blue-600 transition text-black font-medium w-full text-left"
            >
              Kontakt
            </button>
            <div className="mt-4 space-y-2">
              <a
                href="tel:+017679817190"
                className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center transition"
              >
                <i className="fas fa-phone mr-2"></i> 017679817190
              </a>
              <a
                href="https://wa.me/017679817190"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-center transition"
              >
                <i className="fab fa-whatsapp mr-2"></i> WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F8962820f2d6e48e38cf68b3d0df4ccdd%2F637a59f63ebc4cec8e5d21742c2b493c?format=webp&width=800"
                alt="PixelFix24 Logo"
                className="h-16 w-auto"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Links</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="text-gray-400 hover:text-white transition font-medium"
                    >
                      Leistungen
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="text-gray-400 hover:text-white transition font-medium"
                    >
                      Über uns
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("reviews")}
                      className="text-gray-400 hover:text-white transition font-medium"
                    >
                      Bewertungen
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-gray-400 hover:text-white transition font-medium"
                    >
                      Kontakt
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#privacy"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Datenschutz
                    </a>
                  </li>
                  <li>
                    <a
                      href="#agb"
                      className="text-gray-400 hover:text-white transition"
                    >
                      AGB
                    </a>
                  </li>
                  <li>
                    <a
                      href="#impressum"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Impressum
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Folgen Sie uns</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="transition"
                    title="Facebook"
                  >
                    <svg className="h-6 w-6 fill-gray-400 hover:fill-white transition" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="transition"
                    title="Instagram"
                  >
                    <svg className="h-6 w-6 fill-gray-400 hover:fill-white transition" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="transition"
                    title="Twitter"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png" alt="Twitter" className="h-6 w-6 filter brightness-0 invert opacity-60 hover:opacity-100" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@pixelfix24_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition"
                    title="TikTok"
                  >
                    <svg className="h-6 w-6 fill-gray-400 hover:fill-white transition" viewBox="0 0 48 48">
                      <path d="M34.4 3H13.6C7.5 3 3 7.5 3 13.6v20.8C3 40.5 7.5 45 13.6 45h20.8c6.1 0 10.6-4.5 10.6-10.6V13.6C45 7.5 40.5 3 34.4 3zm-2.5 27.6c-2 1.5-4.5 2.4-7.3 2.4-6.9 0-12.5-5.6-12.5-12.5S17.7 8.1 24.6 8.1c2.8 0 5.4.9 7.4 2.5v4.8c-1.2-1-3-1.7-4.8-1.7-4.1 0-7.4 3.3-7.4 7.4s3.3 7.4 7.4 7.4c1.8 0 3.6-.6 4.8-1.7v4.8h-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PixelFix24. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {backToTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition z-40"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
