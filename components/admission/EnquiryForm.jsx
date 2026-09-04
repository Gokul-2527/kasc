"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { departments } from "../../data/departments";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  programme: "",
  qualification: "",
  message: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4 rounded-3xl border border-hairline bg-white p-12 text-center shadow-xl shadow-navy/10"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckCircle2 size={34} />
        </span>
        <h3 className="font-display text-2xl font-semibold text-[var(--color-text)]">
          Enquiry Submitted!
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thank you, {form.name.split(" ")[0] || "there"}. Our admission team will reach out to you
          shortly at {form.phone || "the number you provided"}.
        </p>
        <button
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-2 rounded-full border border-navy px-6 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
        >
          Submit Another Enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-hairline bg-white p-6 shadow-xl shadow-navy/10 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="rounded-xl border border-hairline px-4 py-3 text-sm outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="rounded-xl border border-hairline px-4 py-3 text-sm outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="rounded-xl border border-hairline px-4 py-3 text-sm outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="programme" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Programme
          </label>
          <select
            id="programme"
            name="programme"
            required
            value={form.programme}
            onChange={handleChange}
            className="rounded-xl border border-hairline px-4 py-3 text-sm outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
          >
            <option value="">Select a programme</option>
            {departments.flatMap((d) => d.programmes).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="qualification" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Qualification
          </label>
          <input
            id="qualification"
            name="qualification"
            required
            value={form.qualification}
            onChange={handleChange}
            placeholder="e.g. HSC / 12th Standard"
            className="rounded-xl border border-hairline px-4 py-3 text-sm outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
          />
        </div>
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us anything that would help us guide you better"
            className="resize-none rounded-xl border border-hairline px-4 py-3 text-sm outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/10"
          />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy-dark transition hover:bg-gold-light sm:w-fit"
      >
        Submit Enquiry
        <Send size={15} className="transition group-hover:translate-x-1" />
      </button>
    </form>
  );
}
