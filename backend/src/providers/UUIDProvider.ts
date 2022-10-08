import { uuid as uuidlib, isUuid as isUuidlib } from "uuidv4";

class UUIDProvider {

  uuid() {
    return uuidlib();
  }

  isUuid(string: string) {
    return isUuidlib(string);
  }

}

const uuidProvider = new UUIDProvider();

export { uuidProvider };