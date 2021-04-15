import { mockPhones } from "./mockPhones";

export const getPhonesUseCase = () => {
  //TODO: this should come from db, db logic should be on phone/infrastructure
  const phones = mockPhones;

  return phones;
};
