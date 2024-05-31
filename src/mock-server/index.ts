import { ItemType } from "@/services";
import { Model, Registry, createServer } from "miragejs";
import { ModelDefinition } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import { generateItem } from "./mock-data-generator";

const AMOUNT_TO_GENERATE = 3;

const ItemModel: ModelDefinition<ItemType> = Model.extend({});

type AppRegistry = Registry<{ item: typeof ItemModel }, {}>;
type AppSchema = Schema<AppRegistry>;

export const makeServer = () => {
  const server = createServer({
    models: { item: Model },
    // factories: { item: Factory.extend({}) },

    seeds(server) {
      // CANNOT FIND A createList approach that actually works
      for (let i = 0; i < AMOUNT_TO_GENERATE; i++) {
        server.create("item", generateItem());
      }
    },

    routes() {
      this.namespace = "api";

      this.get("/items", (schema: AppSchema) => schema.all("item"), {
        timing: 2000,
      });
    },
  });

  return server;
};
