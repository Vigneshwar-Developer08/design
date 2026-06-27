import type { ServiceItem, ProjectItem, NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "ux-design",
    icon: "Layers",
    title: "UI/UX Design",
    description:
      "Interfaces that earn attention and hold it. We design systems where every decision — spacing, motion, hierarchy — carries meaning.",
  },
  {
    id: "web-dev",
    icon: "Code2",
    title: "Web Development",
    description:
      "Production-grade Next.js applications. Fast, accessible, and built to scale without accumulating debt.",
  },
  {
    id: "branding",
    icon: "Fingerprint",
    title: "Brand Identity",
    description:
      "Identity systems that work across every medium. Marks, type, color, and voice that hold together under pressure.",
  },
  {
    id: "strategy",
    icon: "TrendingUp",
    title: "Digital Strategy",
    description:
      "Clarity before execution. We help you understand your audience, define what success looks like, and chart the shortest path there.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "atlas",
    title: "Atlas Finance",
    category: "Brand + Web",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    accent: "#4f46e5",
  },
  {
    id: "kova",
    title: "Kova Studio",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
    accent: "#0ea5e9",
  },
  {
    id: "lumen",
    title: "Lumen Health",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    accent: "#10b981",
  },
  {
    id: "grove",
    title: "Grove Commerce",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    accent: "#f59e0b",
  },
  {
    id: "drift",
    title: "Drift Social",
    category: "Digital Strategy",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    accent: "#ec4899",
  },
  {
    id: "meridian",
    title: "Meridian SaaS",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    accent: "#8b5cf6",
  },
];
