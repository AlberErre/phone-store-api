interface ImageUrl {
  alt: string;
  url: string;
}

export interface Phone {
  image: ImageUrl;
  title: string;
  description: string;
  price: number;
  color: string; //NOTE: color should be an enum in the future
}
