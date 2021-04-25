import { Phone } from "../../../domain/Phone";

export interface PhoneEntity extends Omit<Phone, "image"> {
  imageUrl: string;
}
