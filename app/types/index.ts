export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  accent: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
