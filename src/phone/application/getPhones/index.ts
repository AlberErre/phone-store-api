import { FakePhones } from "../../infrastructure/FakePhones";
import { getPhonesUseCase } from "./getPhones.usecase";

// NOTE: dependency injection of fake phones
const phoneRepository = new FakePhones();

export default getPhonesUseCase(phoneRepository);
