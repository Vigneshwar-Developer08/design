"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { contactSchema, type ContactSchema } from "../../lib/schemas";
import SectionLabel from "../ui/SectionLabel";
import FadeIn from "../ui/FadeIn";
import { cn } from "../../lib/utils";

const META = [
  { icon: Mail, label: "Email us", value: "hello@formastudio.co" },
  { icon: MapPin, label: "Based in", value: "Tamilnadu, IN" },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactSchema) => {
    // Simulate API call
    await new Promise((res) => setTimeout(res, 900));
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 bg-[var(--color-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn delay={0.05} direction="none">
            <SectionLabel>Get in touch</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2
              id="contact-heading"
              className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight"
            >
              Let&apos;s build something together.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Tell us about your project. We read every message and respond within one business day.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — meta info */}
          <FadeIn delay={0.15} direction="right" className="lg:col-span-2">
            <div className="flex flex-col gap-8">
              {META.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="mt-0.5 w-9 h-9 rounded-lg bg-[var(--color-accent)]/8 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)] mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">{value}</p>
                  </div>
                </div>
              ))}

              {/* Subtle divider card */}
              <div className="mt-4 p-5 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  We take on a limited number of new projects each quarter to ensure every client
                  gets our full attention.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.22} direction="left" className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col items-center justify-center text-center gap-4 py-16 px-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2
                  size={40}
                  className="text-[var(--color-accent)]"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  Message received
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] max-w-xs">
                  We&apos;ll review your project details and get back to you within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-medium text-[var(--color-accent)] hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-5 p-6 md:p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]"
                aria-label="Contact form"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                    className={cn(
                      "w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[var(--color-bg)] text-[var(--color-text-primary)] placeholder:text-slate-400 outline-none transition-colors duration-200",
                      "focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15",
                      errors.name
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/15"
                        : "border-[var(--color-border)]"
                    )}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-xs text-red-500 mt-0.5">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                    className={cn(
                      "w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[var(--color-bg)] text-[var(--color-text-primary)] placeholder:text-slate-400 outline-none transition-colors duration-200",
                      "focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15",
                      errors.email
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/15"
                        : "border-[var(--color-border)]"
                    )}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-xs text-red-500 mt-0.5">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project, timeline, and goals..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    {...register("message")}
                    className={cn(
                      "w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[var(--color-bg)] text-[var(--color-text-primary)] placeholder:text-slate-400 outline-none transition-colors duration-200 resize-none",
                      "focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/15",
                      errors.message
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400/15"
                        : "border-[var(--color-border)]"
                    )}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-xs text-red-500 mt-0.5">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "mt-1 inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3 rounded-lg transition-all duration-200",
                    "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]",
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={15} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
