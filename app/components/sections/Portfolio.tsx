import SectionLabel from "../ui/SectionLabel";
import FadeIn from "../ui/FadeIn";
import PortfolioCard from "../cards/PortfolioCard";
import { PROJECTS } from "../../lib/data";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-24 md:py-32 bg-[var(--color-card)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <FadeIn delay={0.05} direction="none">
              <SectionLabel>Selected work</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h2
                id="portfolio-heading"
                className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight"
              >
                Work we&apos;re proud of.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.18} direction="left">
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base max-w-xs leading-relaxed">
              A cross-section spanning digital products, brand identities, and everything between.
            </p>
          </FadeIn>
        </div>

        {/* Cohesive 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.05}>
              <PortfolioCard project={project} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

