import { BsArrowUp, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-shadow/80 text-white">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bg-grenadine hover:bg-grenadine/90 text-white p-3 transition-colors shadow-lg z-50 lg:bottom-12 lg:right-8"
        aria-label="Back to top"
      >
        <BsArrowUp size={20} />
      </button>

      <div className="px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4 tracking-wider uppercase font-openSans">
              Opening Hours
            </h3>
            <div className="space-y-4 font-openSans tracking-wider text-sm">
              {[
                ["Monday - Friday", "7:00 - 18:00"],
                ["Saturday", "8:00 - 18:00"],
                ["Sunday", "9:00 - 17:00"],
              ].map(([day, time], i) => (
                <div
                  key={i}
                  className="flex items-center justify-between relative"
                >
                  <span className="z-10 bg-shadow px-2">{day}</span>
                  <div className="absolute left-0 right-0 h-px bg-white/20 bottom-1 z-0" />
                  <span className="z-10 bg-shadow px-2">{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4 tracking-wider uppercase font-openSans">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <p className="text-grenadine">info@brewtopia.com</p>
              <p>+41 12 345 6789</p>
              <p>
                Bahnhofstrasse 1, 8001
                <br />
                Zürich, Switzerland
              </p>
            </div>
          </div>

          <div className="md:col-span-2 mb-10">
            <h3 className="text-white font-bold text-lg mb-4 tracking-wider uppercase font-openSans">
              Where to Find Us
            </h3>
            <div className="space-y-8">
              <div
                className="h-48 overflow-hidden"
                style={{
                  filter:
                    "sepia(0.6) saturate(0.2) brightness(0.85) contrast(1.5)",
                }}
              >
                <iframe
                  title="Brewtopia Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.213040088947!2d8.539478415584398!3d47.37263467916406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900c6f3d9d992d%3A0x123456789abcdef!2sBahnhofstrasse%201%2C%208001%20Z%C3%BCrich%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1686900000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-shadow">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© Brewtopia</p>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <BsInstagram size={20} />
            </a>
          </div>

          <p className="text-sm">2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
