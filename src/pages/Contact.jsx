import { useState } from "react";
import { HiOutlineCheck } from "react-icons/hi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please fill out this field.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please fill out this field.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please fill out this field.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }

    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(""), 5000);
  };

  return (
    <>
      <div className="relative h-96 md:h-[350px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Coffee Shop Atmosphere"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white p-8 md:p-12">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-oswald uppercase mb-4">
              Contact Us
            </h2>
            <div className="w-20 h-0.5 bg-grenadine mb-6 mx-auto" />
            <p className="text-sm mb-8">
              We'd love to hear from you! Whether you have questions about our
              coffee, want to book a table, or just want to share your
              experience, drop us a message. We'll get back to you as soon as
              possible.
            </p>
          </div>

          {/* form */}
          <div className="space-y-3 tracking-wider">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full py-4 font-merriweather text-sm border-b border-shadow/20 placeholder-shadow/40 focus:outline-none focus:placeholder-grenadine"
                  required
                />
                {errors.name && (
                  <p className="text-grenadine text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full py-4 font-merriweather text-sm border-b border-shadow/20 placeholder-shadow/40 focus:outline-none focus:placeholder-grenadine"
                  required
                />
                {errors.email && (
                  <p className="text-grenadine text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="6"
                className="w-full py-4 font-merriweather text-sm border-b border-shadow/20 placeholder-shadow/40 focus:outline-none focus:placeholder-grenadine"
                required
              />
              {errors.message && (
                <p className="text-grenadine text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* submit button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center justify-center bg-grenadine hover:bg-grenadine/90 text-white font-oswald uppercase px-8 py-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>Submit</>
                )}
              </button>
            </div>

            {/* success message */}
            {submitStatus === "success" && (
              <div className="p-4 flex items-center gap-3 bg-grenadine/10 text-shadow/80 text-xs">
                <HiOutlineCheck className="w-5 h-5" />
                <span>
                  Your message has been sent successfully.
                  We'll get back to you soon!
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
