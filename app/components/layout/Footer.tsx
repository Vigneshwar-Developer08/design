import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowUpRight, Mail, MapPin } from "lucide-react";
import FadeIn from "../ui/FadeIn";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* CTA band — blue bg on light theme, black on dark theme */}
      <div className="bg-[var(--color-accent)] dark:bg-black py-10 md:py-14 border-t border-[var(--color-accent-hover)] dark:border-[var(--color-border)] relative">
        <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 text-center">
          <FadeIn delay={0.05} direction="none">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-indigo-200 dark:text-[var(--color-accent)] mb-4">
              <span className="inline-block w-4 h-px bg-indigo-200 dark:bg-[var(--color-accent)]" aria-hidden="true" />
              Ready to start?
            </span>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white dark:text-[var(--color-text-primary)] leading-tight">
              Let&apos;s build&nbsp;
              <span className="text-indigo-200 dark:text-[var(--color-accent)]">something great.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.22}>
            <p className="mt-3 text-sm text-indigo-100 dark:text-[var(--color-text-secondary)] max-w-sm mx-auto leading-relaxed">
              Tell us about your project. We reply within one business day.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 bg-white text-[var(--color-accent)] dark:bg-[var(--color-text-primary)] dark:text-[var(--color-bg)] text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-indigo-50 dark:hover:opacity-90 transition-all duration-200"
            >
              Start a conversation
              <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 py-6">

          {/* Top row: Logo — Nav links — Social icons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="font-semibold text-[var(--color-text-primary)] tracking-tight"
              aria-label="Forma Studio — home"
            >
              Forma<span className="text-[var(--color-accent)]">.</span>
            </Link>

            <nav aria-label="Footer navigation">
              <ul className="flex items-center gap-6" role="list">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150 tracking-wide"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex items-center gap-4" role="list" aria-label="Social links">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    <Icon size={17} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom row: location + email — copyright */}
          <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={12} aria-hidden="true" />
                Tamilnadu, India
              </span>
              <span aria-hidden="true">·</span>
              <a
                href="mailto:hello@formastudio.co"
                className="inline-flex items-center gap-1.5 hover:text-[var(--color-text-primary)] transition-colors duration-150"
              >
                <Mail size={12} aria-hidden="true" />
                hello@formastudio.co
              </a>
            </div>

            <p className="text-xs text-[var(--color-text-secondary)]">
              © {year} Forma Studio. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
