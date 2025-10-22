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
                    <svg className="h-6 w-6 fill-gray-400 hover:fill-white transition" viewBox="0 0 24 24">
                      <path d="M16.6915026,0.00246628219 C15.4788346,-0.0151211216 14.4157539,0.845224149 14.0913405,2.10329117 L13.0729197,6.02531856 C12.9454051,6.56288976 12.4659184,6.93774594 11.8930127,6.93774594 L7.36590397,6.93774594 C6.40251572,6.93774594 5.62607337,7.71965761 5.62607337,8.6827827 L5.62607337,8.68331177 C5.62607337,9.64660974 6.40251572,10.4282954 7.36590397,10.4282954 L10.0151491,10.4282954 L9.00669748,14.3568505 C8.8791828,14.8944766 8.39953848,15.2693328 7.82662988,15.2693328 L4.80117577,15.2693328 C3.83778752,15.2693328 3.06134517,16.0510144 3.06134517,17.0141395 L3.06134517,17.0146656 C3.06134517,17.9779507 3.83778752,18.7596323 4.80117577,18.7596323 L13.3181558,18.7596323 C14.1772699,18.7596323 14.9016594,18.2491374 15.0914699,17.425126 L17.001315,8.68331177 C17.0282599,8.57198885 17.1468127,8.49612962 17.2577725,8.49612962 L20.5126526,8.49612962 C21.4760409,8.49612962 22.2524832,7.71422278 22.2524832,6.75095502 L22.2524832,6.75040625 C22.2524832,5.78713849 21.4760409,5.00523165 20.5126526,5.00523165 L17.3837792,5.00523165 L18.4020228,1.08397043 C18.5295374,0.546405155 19.0090241,0.171549094 19.5819298,0.171549094 L23.1073632,0.171549094 C24.0707515,0.171549094 24.8471938,0.953456921 24.8471938,1.91672468 L24.8471938,1.91727345 C24.8471938,2.88054121 24.0707515,3.66242909 23.1073632,3.66242909 L16.6915026,3.66190001 Z"/>
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
