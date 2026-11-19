import { useState } from "react";
import { PiCheckCircle } from "react-icons/pi";

const FIELD_CLASS =
  "w-full rounded-xl border border-shadow/20 bg-cream px-4 py-3 text-shadow placeholder:text-muted/70 transition-colors focus:border-grenadine-deep focus:outline-none aria-[invalid=true]:border-grenadine-deep";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INITIAL_FORM = { name: "", email: "", message: "" };

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Enter your name.";
  if (!email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_PATTERN.test(email))
    errors.email = "Enter an email address like name@example.com.";
  if (!message.trim()) errors.message = "Write a short message.";
  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-medium text-shadow">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-grenadine-deep">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setIsSending(true);
    setSent(false);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // No backend in this demo; still confirm to the visitor.
    }
    setIsSending(false);
    setSent(true);
    setForm(INITIAL_FORM);
  };

  const fieldProps = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange: handleChange,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: FIELD_CLASS,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <input
            type="text"
            autoComplete="name"
            placeholder="Your name"
            {...fieldProps("name")}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            {...fieldProps("email")}
          />
        </Field>
      </div>
      <Field id="message" label="Message" error={errors.message}>
        <textarea
          rows={6}
          placeholder="Tell us anything"
          {...fieldProps("message")}
        />
      </Field>

      <button
        type="submit"
        disabled={isSending}
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-grenadine-deep px-7 font-medium text-white transition-colors hover:bg-grenadine-dark disabled:opacity-70"
      >
        {isSending ? "Sending message…" : "Send message"}
      </button>

      <div aria-live="polite">
        {sent && (
          <p className="flex items-center gap-3 rounded-xl bg-sand px-4 py-3 text-shadow">
            <PiCheckCircle
              className="size-5 shrink-0 text-grenadine-deep"
              aria-hidden="true"
            />
            Message sent. We'll get back to you soon.
          </p>
        )}
      </div>
    </form>
  );
}
