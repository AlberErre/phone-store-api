import { ImageUrlType, Phone } from "../../../domain/Phone";
import { PhoneEntity } from "./../entity/index";

export const serializePhones = (phones: PhoneEntity[]): Phone[] => {
  return phones.map(
    (phone) =>
      ({
        ...phone,
        //NOTE: for now we are always using .png, this could be .svg in the future
        image: { url: phone.imageUrl, type: ImageUrlType.PNG },
      } as Phone)
  );
};
