//NOTE: some string types, such as brand, must be an enum in the future
export interface Phone {
  imageUrl: string;
  name: string;
  description: string;
  brand: string;
  price: number;
  color: string;
  colorDescription: string;
}
