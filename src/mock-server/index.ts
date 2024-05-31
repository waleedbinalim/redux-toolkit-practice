import { ItemType } from "@/services";
import { createServer } from "miragejs";
import { generateItem } from "./mock-data-generator";

const ITEMS_AMOUNT_TO_GENERATE = 3;

export const makeServer = () => {
  const server = createServer({
    routes() {
      this.namespace = "api";

      this.get(
        "/items",
        (): { items: ItemType[] } => {
          //
          const items: ItemType[] = [];
          for (let i = 0; i < ITEMS_AMOUNT_TO_GENERATE; i++)
            items.push(generateItem());

          return { items };
        },
        { timing: 4000 }
      );
    },
  });

  return server;
};
