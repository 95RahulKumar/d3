import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Todo } from "./todo.model";
import { appFeatureKey } from "./reducers";

export const todoApiActions = createActionGroup({
    source: appFeatureKey,
    events: {
      // loading todos
      'Loading Todos':emptyProps(),
      'loading Todos Success':props<{todosSuccessResponse:Array<Todo>}>(),
      'loading Todos Failure':props<{todosFailureResponse:any}>(),
    },
  });