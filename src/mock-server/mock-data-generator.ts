import { ItemType } from "@/services";
import { incrementalNumber, randBoolean, randText } from "@ngneat/falso";

export const generateItem = (): ItemType => ({
  id: incrementalNumber().toString(),
  name: randText({ charCount: 20 }),
  packed: randBoolean(),
});
