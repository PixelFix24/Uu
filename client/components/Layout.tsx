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

      {/* Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>

      {/* Navigation */}
      <nav className="bg-white text-gray-800 shadow-lg sticky top-0 z-50 text-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8962820f2d6e48e38cf68b3d0df4ccdd%2F637a59f63ebc4cec8e5d21742c2b493c?format=webp&width=800"
              alt="PixelFix24 Logo"
              className="h-48 w-auto"
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
              href="tel:+4915732312985"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              <i className="fas fa-phone mr-2"></i> 01573 2312985
            </a>
            <a
              href="https://wa.me/4915732312985"
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
                href="tel:+4915732312985"
                className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-center transition"
              >
                <i className="fas fa-phone mr-2"></i> 01573 2312985
              </a>
              <a
                href="https://wa.me/4915732312985"
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
                    className="text-gray-400 hover:text-white text-xl transition"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-xl transition"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-xl transition"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@pixelfix24_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-xl transition"
                  >
                    <i className="fab fa-tiktok"></i>
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
