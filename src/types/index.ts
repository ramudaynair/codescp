export interface Service {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
}
