export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  category: 'lagos' | 'kids';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'lagos' | 'kids';
  categoryLabel: string;
  image: string;
  description: string;
  tags: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
  project: string;
}

export interface DifferentialItem {
  title: string;
  description: string;
}
