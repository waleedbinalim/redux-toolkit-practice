import { ItemType } from "@/services";
import { createServer } from "miragejs";

export const makeServer = () => {
  const server = createServer({
    routes() {
      this.namespace = "api";

      this.get(
        "/items",
        (): { items: ItemType[] } => {
          return {
            items: [
              { id: "1", name: "Inception", packed: false },
              { id: "2", name: "Interstellar", packed: false },
              { id: "3", name: "Dunkirk", packed: false },
            ],
          };
        },
        { timing: 4000 }
      );
    },
  });

  return server;
};
