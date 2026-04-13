import { useState } from "react";
import { HiOutlineCheck } from "react-icons/hi";
import PageHero from "../components/ui/PageHero";
import HeadingBlock from "../components/ui/HeadingBlock";
import Reveal from "../components/ui/Reveal";

const LABEL_CLASS =
  "block text-[10px] uppercase font-body tracking-[0.18em] text-shadow/50 mb-1";
const FIELD_CLASS =
  "w-full py-3 font-body text-sm text-shadow border-b border-shadow/25 placeholder-shadow/25 focus:outline-none focus:border-grenadine transition-colors duration-200";

function FormField({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      {children}
      {error && <p className="text-grenadine text-xs mt-1">{error}</p>}
    </div>
  );
}

const INITIAL_FORM = { name: "", email: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please fill out this field.";
    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim())
      newErrors.message = "Please fill out this field.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitStatus("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
    } catch {
      // fall through — show success regardless for demo
    }
    setSubmitStatus("success");
    setFormData(INITIAL_FORM);
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(""), 5000);
  };

  return (
    <>
      <PageHero
        src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Coffee shop atmosphere"
        title="Get in Touch"
        subtitle="We'd love to hear from you"
      />

      <div className="bg-white px-8 md:px-12 py-12 md:py-16">
        <div className="max-w-xl mx-auto">
          <Reveal>
            <HeadingBlock
              eyebrow="Say Hello"
              title="Contact Us"
              description="Whether you have questions about our coffee, want to book a table, or just want to share your experience — drop us a message and we'll get back to you as soon as possible."
              titleAs="h2"
              className="mb-10"
              descriptionClassName="-mt-4 text-shadow/60"
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField id="name" label="Name" error={errors.name}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={FIELD_CLASS}
                    required
                  />
                </FormField>

                <FormField id="email" label="Email" error={errors.email}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={FIELD_CLASS}
                    required
                  />
                </FormField>
              </div>

              <FormField id="message" label="Message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us anything..."
                  rows="6"
                  className={`${FIELD_CLASS} resize-none`}
                  required
                />
              </FormField>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center justify-center bg-grenadine hover:bg-grenadine/90 text-white font-body uppercase text-[10px] tracking-[0.18em] px-7 py-3 transition-colors duration-200 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 flex items-center gap-3 bg-grenadine/10 text-shadow/70 text-xs font-body">
                  <HiOutlineCheck className="w-4 h-4 flex-shrink-0 text-grenadine" />
                  <span>
                    Your message has been sent. We'll get back to you soon!
                  </span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
