import { PiEnvelopeSimple, PiPhone } from "react-icons/pi";
import { CAFE } from "../data/cafe";
import ContactForm from "../components/contact/ContactForm";
import ImageBanner from "../components/ui/ImageBanner";
import PhotoBand from "../components/ui/PhotoBand";
import SectionHeading from "../components/ui/SectionHeading";

const CONTACT_LINKS = [
  { to: CAFE.phone.href, label: CAFE.phone.display, icon: PiPhone },
  { to: `mailto:${CAFE.email}`, label: "Email us", icon: PiEnvelopeSimple },
];

export default function Contact() {
  return (
    <>
      <ImageBanner
        image="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2000&auto=format&fit=crop"
        alt="French press and cups on a table by a large window"
        kicker="Contact"
        title="Say hello"
      >
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
          Questions about our coffee, a table for a group, or just something you
          want to share? Send us a note and we'll reply as soon as we can.
        </p>
      </ImageBanner>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-10">
          <div className="md:col-span-4">
            <SectionHeading kicker="Write to us" title="Send us a note">
              <p>
                For group bookings, events or feedback. We'll get back to you as
                soon as we can.
              </p>
            </SectionHeading>
          </div>
          <div className="rounded-card border border-shadow/10 bg-white p-6 md:col-span-8 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <PhotoBand
        image="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000&auto=format&fit=crop"
        title="Call, email or drop by"
        links={CONTACT_LINKS}
      />
    </>
  );
}
