export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating?: number;
  likes?: number;
}

export interface TestimonialItem {
  id: number;
  name: string;
  image: string;
  comment: string;
}

