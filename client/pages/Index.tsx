import { useState } from "react";
import Layout from "../components/Layout";
import {
  Smartphone,
  Battery,
  Camera,
  Volume2,
  Bug,
  Database,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
} from "lucide-react";

const serviceIcons = [
  { Icon: Smartphone, label: "Display" },
  { Icon: Battery, label: "Akku" },
  { Icon: Camera, label: "Kamera" },
  { Icon: Volume2, label: "Lautsprecher" },
  { Icon: Bug, label: "Software" },
  { Icon: Database, label: "Daten" },
];

const services = [
  {
    title: "Displayreparaturen",
    description:
      "Wir ersetzen beschädigte Displays mit hochwertigen Originalersatzteilen oder Premium-Alternativen.",
    badge: "Schnellreparatur",
    badgeIcon: Smartphone,
    icon: 0,
  },
  {
    title: "Akkutausch",
    description:
      "Ihr Akku hält nicht mehr lange? Wir tauschen ihn gegen einen neuen, leistungsstarken Akku aus und verlängern so die Lebensdauer Ihres Geräts.",
    badge: "60 Min.",
    icon: 1,
  },
  {
    title: "Kamera-Reparaturen",
    description:
      "Unscharfe Fotos oder eine defekte Kamera? Wir reparieren oder tauschen die Kamera Ihres Smartphones aus, damit Sie wieder perfekte Aufnahmen machen können.",
    badge: "Ab 15€",
    icon: 2,
  },
  {
    title: "Lautsprecher-Reparaturen",
    description:
      "Probleme mit dem Lautsprecher oder Mikrofon? Wir diagnostizieren das Problem und führen die notwendigen Reparaturen durch.",
    badge: "Sofort verfügbar",
    icon: 3,
  },
  {
    title: "Software-Probleme",
    description:
      "Ihr Gerät friert ein oder startet nicht mehr? Wir beheben Software-Probleme, führen Updates durch und stellen Daten bei Bedarf wieder her.",
    badge: "Ab 9€",
    icon: 4,
  },
  {
    title: "Datenrettung",
    description:
      "Wichtige Daten nach einem Defekt verloren? Unsere Experten helfen bei der Datenrettung von beschädigten Geräten und sichern Ihre wertvollen Daten.",
    badge: "96% Erfolgsrate",
    icon: 5,
  },
];

const faqItems = [
  {
    question: "Wie lange dauert eine typische Reparatur?",
    answer:
      "Die meisten Reparaturen wie Display- oder Akkutausch können wir innerhalb von 1-2 Stunden durchführen. Komplexere Probleme wie Wasserschäden oder Datenrettung können länger dauern. Wir informieren Sie immer über den voraussichtlichen Zeitrahmen.",
  },
  {
    question: "Kann ich mein Gerät zur Diagnose vorbeibringen?",
    answer:
      "Ja, Sie können Ihr Gerät jederzeit während unserer Öffnungszeiten zur kostenlosen Diagnose vorbeibringen. Nach der Diagnose erhalten Sie ein unverbindliches Angebot und können dann entscheiden, ob Sie die Reparatur durchführen lassen möchten.",
  },
  {
    question: "Gibt es eine Garantie auf die Reparaturen?",
    answer:
      "Ja, alle unsere Reparaturen sind mit einer 12-monatigen Garantie abgedeckt. Die Garantie umfasst Material- und Arbeitsfehler, gilt jedoch nicht für weitere Schäden durch Stürze, Flüssigkeiten oder unsachgemäße Handhabung.",
  },
  {
    question: "Kann ich einen Termin vereinbaren?",
    answer:
      "Ja, Termine können Sie telefonisch, per E-Mail oder über unser Kontaktformular vereinbaren. Bei dringenden Reparaturen bieten wir auch einen Walk-in-Service an, bei dem wir Sie so schnell wie möglich bedienen.",
  },
  {
    question: "Reparieren Sie auch Tablets und Smartwatches?",
    answer:
      "Ja, wir reparieren nicht nur Smartphones, sondern auch Tablets und Smartwatches der gängigen Hersteller. Bitte kontaktieren Sie uns vorab, damit wir Ihnen ein genaues Angebot machen können.",
  },
];

const brands = [
  "Apple (iPhone, iPad)",
  "Samsung (alle Modelle)",
  "Google Pixel",
  "Xiaomi",
  "Huawei",
  "OnePlus",
  "Sony & weitere",
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-lg"
      >
        <span>{question}</span>
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
    </div>
  );
}

function ServiceCard({
  title,
  description,
  badge,
  icon,
}: {
  title: string;
  description: string;
  badge: string;
  icon: number;
}) {
  const { Icon } = serviceIcons[icon];

  return (
    <div className="service-card p-8 shadow-lg hover:shadow-xl fade-in">
      <div className="text-5xl mb-6 gradient-text">
        <Icon size={48} />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mt-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
          {badge}
        </span>
      </div>
    </div>
  );
}

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    device: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Neue Reparaturanfrage von ${formData.name}`;
    const body = `
Name: ${formData.name}
E-Mail: ${formData.email}
Telefon: ${formData.phone || "Nicht angegeben"}
Gerät: ${formData.device}
Service: ${formData.service}
Nachricht: ${formData.message}
    `;
    window.location.href = `mailto:PixelFix24@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setFormData({ name: "", email: "", phone: "", device: "", service: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white py-24 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Willkommen bei PixelFix24
            </h1>
            <p className="text-xl mb-8">
              Ihr zuverlässiger Partner für Handy- und Tablet-Reparaturen aller
              Marken. Schnell, transparent und professionell.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-center transition duration-300 transform hover:scale-105"
              >
                Jetzt Reparatur buchen
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-lg text-center transition duration-300 transform hover:scale-105"
              >
                Kostenlose Fehlerdiagnose
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center fade-in">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8962820f2d6e48e38cf68b3d0df4ccdd%2Fe8213c0cb58b4eb3a7c43c2126771918?format=webp&width=800"
              alt="Elektronik-Reparatur Werkstatt mit Werkzeugen und Komponenten"
              className="rounded-lg shadow-2xl max-w-full h-auto max-h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Unsere Leistungen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  badge={service.badge}
                  icon={service.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-3xl font-bold mb-6">
              Unsere Preise – Transparent & Günstig
            </h2>
            <p className="text-lg mb-8">
              Bei <span className="font-bold text-blue-600">PixelFix24</span>{" "}
              bekommst du hochwertige Reparaturen zu besonders fairen Preisen.
              Die genauen Kosten hängen vom Gerät und dem Schaden ab – da sich
              die Ersatzteilpreise regelmäßig ändern, verzichten wir auf eine
              feste Preisliste.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-xl mb-10 text-left border border-gray-100 transform hover:scale-[1.01] transition duration-300">
              <h3 className="text-xl font-bold mb-4 text-center">
                Was du erwarten kannst:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span>
                    Displayreparaturen <span className="font-bold">ab 29€</span>
                  </span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span>
                    Akkutausch <span className="font-bold">ab 29€</span>
                  </span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span>
                    Kamera- oder Lautsprecherreparatur{" "}
                    <span className="font-bold">ab 15€</span>
                  </span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span>
                    Fehlerdiagnose <span className="font-bold">kostenlos</span>{" "}
                    bei Reparatur
                  </span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                  <span>
                    Softwarelösungen <span className="font-bold">ab 9€</span>
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  ✅ Unterdurchschnittliche Preise – Top Qualität
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">
                Wir reparieren u.a. folgende Marken:
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {brands.map((brand, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-4 py-2 rounded-full font-medium"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-lg mb-6">
              💬{" "}
              <span className="font-semibold">
                Frag einfach nach deinem Modell!
              </span>{" "}
              Wir nennen dir den aktuellen Preis sofort – telefonisch, per
              WhatsApp oder E-Mail. Oder komm einfach vorbei, wir beraten dich
              kostenlos und unverbindlich.
            </p>

            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Jetzt Preis anfragen
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 fade-in">
              <h2 className="text-3xl font-bold mb-6">Über uns</h2>
              <p className="text-lg mb-4">
                Unser Handy Reparatur Laden bietet Ihnen einen Rundum-Service
                für alle Arten von Mobilgeräten. Egal, ob es sich um ein
                zerbrochenes Display, eine schwache Batterie, Wasserschäden,
                Softwareprobleme oder Hardwaredefekte handelt – wir finden die
                richtige Lösung.
              </p>
              <p className="text-lg mb-4">
                Unser Team besteht aus zertifizierten Technikern mit
                jahrelanger Erfahrung in der Reparatur von Smartphones und
                Tablets aller gängigen Marken.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                  <span>Hochwertige Ersatzteile</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                  <span>Transparente Preise ohne versteckte Kosten</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                  <span>
                    Schnelle Reparaturzeiten (oft noch am selben Tag)
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                  <span>12 Monate Garantie auf alle Reparaturen</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 fade-in mt-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F8962820f2d6e48e38cf68b3d0df4ccdd%2F73782283d38b45bba8843861a165fd02?format=webp&width=800"
                alt="Elektronik-Reparatur Werkstatt mit Reparaturwerkzeugen"
                className="rounded-lg shadow-xl w-full h-auto max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Kundenbewertungen
          </h2>

          <div className="mb-16">
            <div className="text-center mb-8">
              <a
                href="https://g.page/r/CQbP-tgVl791EBk/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition"
              >
                <img
                  src="https://www.google.com/images/branding/product/1x/google_my_business_48dp.png"
                  alt="Google Logo"
                  className="h-6 mr-2"
                />
                <span className="font-medium text-gray-800">
                  Unsere Google Bewertungen
                </span>
                <span className="ml-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  5.0 ★ (4 Bewertungen)
                </span>
              </a>
            </div>

            <div className="text-center mt-10">
              <a
                href="https://g.page/r/CQbP-tgVl791EBk/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
              >
                <i className="fab fa-google mr-2"></i> Jetzt bewerten auf Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Kontakt & Standort
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 fade-in">
              <h3 className="text-2xl font-bold mb-4">Kontaktieren Sie uns</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">
                    E-Mail*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 flex items-center">
                    <span>Telefonnummer</span>
                    <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      optional, aber empfohlen
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Für schnelleren Kontakt"
                  />
                  <p className="text-xs text-gray-200 mt-1">
                    Wir rufen Sie gerne zurück, wenn Sie eine Nummer angeben.
                  </p>
                </div>
                <div>
                  <label htmlFor="device" className="block mb-1">
                    Gerätetyp/Marke*
                  </label>
                  <input
                    type="text"
                    id="device"
                    required
                    value={formData.device}
                    onChange={(e) =>
                      setFormData({ ...formData, device: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block mb-1">
                    Gewünschte Leistung*
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="display">Displayreparatur</option>
                    <option value="battery">Akkutausch</option>
                    <option value="camera">Kamera-Reparatur</option>
                    <option value="speaker">Lautsprecher-Reparatur</option>
                    <option value="software">Software-Problem</option>
                    <option value="data">Datenrettung</option>
                    <option value="other">Anderes Problem</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">
                    Beschreibung des Problems*
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Reparatur anfragen
                </button>
              </form>
            </div>

            <div className="lg:w-1/2 fade-in">
              <h3 className="text-2xl font-bold mb-4">Unsere Kontaktdaten</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin size={24} className="mt-1 mr-3 text-blue-200" />
                  <div>
                    <h4 className="font-bold">Adresse</h4>
                    <p>
                      Brühlstraße 18
                      <br />
                      76689 Karlsdorf-Neuthard
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={24} className="mt-1 mr-3 text-blue-200" />
                  <div>
                    <h4 className="font-bold">Telefon</h4>
                    <p>+49 157 32312985</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={24} className="mt-1 mr-3 text-blue-200" />
                  <div>
                    <h4 className="font-bold">E-Mail</h4>
                    <p>PixelFix24@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={24} className="mt-1 mr-3 text-blue-200" />
                  <div>
                    <h4 className="font-bold">Öffnungszeiten</h4>
                    <p>
                      Montag - Freitag: 9:00 - 18:00 Uhr
                      <br />
                      Samstag: 10:00 - 15:00 Uhr
                      <br />
                      Sonntag: Geschlossen
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Finden Sie uns</h3>
              <div className="bg-white p-1 rounded-lg shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.370859381533!2d8.530486315686273!3d49.13487697932285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479706f4c9e8f8c5%3A0x6b5d8c8b8b8b8b8b!2sBr%C3%BChlstra%C3%9Fe%2018%2C%2076689%20Karlsdorf-Neuthard!5e0!3m2!1sen!2sde!4v1753481486984!5m2!1sen!2sde"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Häufige Fragen
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Bleiben Sie informiert</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Abonnieren Sie unseren Newsletter und erhalten Sie exklusive Angebote
            und Tipps zur Pflege Ihrer Geräte.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-grow px-4 py-3 rounded-l sm:rounded-l focus:outline-none text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 px-6 py-3 rounded-r sm:rounded-r font-bold transition"
            >
              Abonnieren
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
