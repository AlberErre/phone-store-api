import { Phone } from "../../domain/Phone";

export interface PhoneRepository {
  getPhones: () => Promise<Phone[]>;
}
