export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  type?: 'image' | 'video'; // Optional to maintain compatibility
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
