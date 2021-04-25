import { MongoPhones } from "../../infrastructure/MongoPhones";
import { getPhonesUseCase } from "./getPhones.usecase";

// // NOTE: dependency injection of Mongo phones
const phoneRepository = new MongoPhones();

export default getPhonesUseCase(phoneRepository);
