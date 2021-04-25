import { Phone } from "../../domain/Phone";
import { mongoConnection } from "../../../mongo";
import { PhoneRepository } from "../../application/repositories/PhoneRepository";

//NOTE: local url from mongodb instance
const LOCAL_MONGO_URL = "mongodb://localhost:27017";
const DATABASE_NAME = "phones";

export class MongoPhones implements PhoneRepository {
  constructor() {
    this.mongoConnect();
  }

  public async getPhones() {
    //TODO: implement mongo method here
    return [] as Phone[];
  }

  private async mongoConnect() {
    const baseUrl = process.env.MONGO_URL || LOCAL_MONGO_URL;
    await mongoConnection(`${baseUrl}/${DATABASE_NAME}`);
  }
}
