import { createFeature } from "@ngrx/store"
import { appFeatureKey, todoReducer } from "./reducers";

export const productsFeature = createFeature({
    name: appFeatureKey,
    reducer:todoReducer
  });

console.log(productsFeature);




