import { PhoneRepository } from "./../application/repositories/PhoneRepository";
import { mockPhones } from "./mocks/mockPhones";

export class FakePhones implements PhoneRepository {
  public async getPhones() {
    return mockPhones;
  }
}
