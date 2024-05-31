import { ItemType } from "@/services";
import { incrementalNumber, randBoolean, randText } from "@ngneat/falso";

const factory = incrementalNumber();

export const generateItem = (): ItemType => ({
  id: factory().toString(),
  name: randText({ charCount: 20 }),
  packed: randBoolean(),
});
