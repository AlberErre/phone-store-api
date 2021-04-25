import mongoose, { Schema, Document } from "mongoose";
import { PhoneEntity } from "../entity";

export type PhoneDocument = Document<PhoneEntity>;

//TODO: find a way to map phoneSchema with PhoneDocument
//WARNING: phoneSchema may get out of sync (regarding PhoneDocument) and typescript would not notice
export const phoneSchema = new Schema({
  imageUrl: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  colorDescription: { type: String, required: true },
});

export const PhoneModel = mongoose.model<PhoneDocument>("Phone", phoneSchema);
