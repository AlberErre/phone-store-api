import { mongoConnection } from "../../../mongo";
import { PhoneRepository } from "../../application/repositories/PhoneRepository";
import { PhoneModel } from "./schema";
import { Phone } from "../../domain/Phone";

//NOTE: local url from mongodb instance
const LOCAL_MONGO_URL = "mongodb://localhost:27017";
const DATABASE_NAME = "phones";

export class MongoPhones implements PhoneRepository {
  constructor() {
    this.mongoConnect();
  }

  public async getPhones() {
    const phones = await PhoneModel.find((err, phones) => {
      //TODO: we should handle errors differently
      if (err) return [];
      return phones;
    });

    return (phones as unknown) as Phone[];
  }

  private async mongoConnect() {
    const baseUrl = process.env.MONGO_URL || LOCAL_MONGO_URL;
    await mongoConnection(`${baseUrl}/${DATABASE_NAME}`);
  }
}
