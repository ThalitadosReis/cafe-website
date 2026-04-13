import { BsArrowUpRight } from "react-icons/bs";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTiktokLine,
  RiMailLine,
  RiPhoneLine,
  RiMapPinLine,
} from "react-icons/ri";
import Logo from "../assets/t-logo-white.png";

const HOURS = [
  ["Monday – Friday", "7:00 – 18:00"],
  ["Saturday", "8:00 – 18:00"],
  ["Sunday", "9:00 – 17:00"],
];

const SOCIALS = [
  { icon: RiInstagramLine, label: "Instagram" },
  { icon: RiFacebookLine, label: "Facebook" },
  { icon: RiTiktokLine, label: "TikTok" },
];

const HEADING_CLASS =
  "text-white font-body text-xs tracking-[0.2em] uppercase mb-5";

export default function Footer() {
  return (
    <footer className="bg-shadow text-white">
      <div className="px-8 md:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-between gap-10 md:gap-14">
          {/* brand + socials */}
          <div>
            <img src={Logo} alt="Brewtopia" className="h-5 mb-5 opacity-90" />
            <p className="text-xs font-body text-white/45 leading-relaxed mb-7">
              A cozy spot in the heart of the city — serving specialty coffee,
              brunch, and good company since 2023.
            </p>
            <div className="flex items-center gap-4">
              {SOCIALS.map(({ icon, label }) => {
                const Icon = icon;
                return (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="text-white/35 hover:text-grenadine transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* opening hours */}
          <div>
            <h3 className={HEADING_CLASS}>Opening Hours</h3>
            <div className="space-y-3 font-body text-xs">
              {HOURS.map(([day, time]) => (
                <div
                  key={day}
                  className="flex items-baseline justify-between relative"
                >
                  <span className="z-10 bg-shadow pr-2 text-white/70">
                    {day}
                  </span>
                  <div className="absolute left-0 right-0 h-px bg-white/12 bottom-0.5 z-0" />
                  <span className="z-10 bg-shadow pl-2 text-white/45">
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* contact */}
          <div>
            <h3 className={HEADING_CLASS}>Contact Us</h3>
            <div className="space-y-3 text-xs text-white/70 font-body">
              <a
                href="mailto:brewtopia@example.com"
                className="flex items-center gap-3 text-grenadine/75 hover:text-grenadine transition-colors"
              >
                <RiMailLine className="w-4 h-4 shrink-0" />
                brewtopia@example.com
              </a>
              <div className="flex items-center gap-3">
                <RiPhoneLine className="w-4 h-4 shrink-0 text-white/50" />
                +41 12 345 6789
              </div>
              <div className="flex items-start gap-3">
                <RiMapPinLine className="w-4 h-4 shrink-0 text-white/50 mt-0.5" />
                Bahnhofstrasse 1, 8001 Zürich, CH
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map */}
      <div
        className="h-36 overflow-hidden"
        style={{
          filter: "sepia(0.5) saturate(0.2) brightness(0.75) contrast(1.4)",
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

      {/* bottom bar */}
      <div className="px-8 md:px-12 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/50 font-body tracking-wide">
          <p>© Brewtopia · 2025 All Rights Reserved</p>
          <a
            href="https://thalitadosreis.ch/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white/75 transition-colors inline-flex items-center gap-1"
          >
            Made by Thalita dos Reis
            <BsArrowUpRight size={10} />
          </a>
        </div>
      </div>
    </footer>
  );
}
