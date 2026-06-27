import SectionLabel from "../ui/SectionLabel";
import FadeIn from "../ui/FadeIn";
import ServiceCard from "../cards/ServiceCard";
import { SERVICES } from "../../lib/data";

export default function Services() {
  const [s0, s1, s2, s3] = SERVICES;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 md:py-32 bg-[var(--color-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-lg">
            <FadeIn delay={0.05} direction="none">
              <SectionLabel>What we do</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h2
                id="services-heading"
                className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] leading-tight"
              >
                Craft that moves the needle.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.18} direction="left">
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base max-w-xs leading-relaxed">
              Focused scope. Genuine depth. We do a small number of things exceptionally well.
            </p>
          </FadeIn>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large featured card — spans 2 cols on lg */}
          <div className="lg:col-span-2">
            <ServiceCard service={s0} index={0} featured />
          </div>
          {/* Standard */}
          <ServiceCard service={s1} index={1} />
          <ServiceCard service={s2} index={2} />
          {/* Wide card */}
          <div className="md:col-span-2 lg:col-span-1">
            <ServiceCard service={s3} index={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
