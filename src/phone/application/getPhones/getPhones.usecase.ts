import { PhoneRepository } from "../repositories/PhoneRepository";

export const getPhonesUseCase = (
  phoneRepository: PhoneRepository
) => async () => {
  const phones = await phoneRepository.getPhones();
  return phones;
};
