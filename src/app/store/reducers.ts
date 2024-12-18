import { createReducer, on } from "@ngrx/store";
import { Todo } from "./todo.model";
import { todoApiActions } from "./actions";

 export const appFeatureKey = 'Todo'
  export interface apiTodo{
    todos:Array<Todo>,
    todosSuccessResponse:Array<Todo>,
    todosFailureResponse:unknown|null
  }


 export const initialState:apiTodo={
    todos:[],
    todosSuccessResponse:[],
    todosFailureResponse:null
 }
export const todoReducer = createReducer(
    initialState,
    on(todoApiActions.loadingTodos,(state) => {
        return {
            ...state
        }
    }),
            
    on(todoApiActions.loadingTodosSuccess,(state,{todosSuccessResponse}) => {
        return {
            ...state,   
            todosSuccessResponse
        }
    }),
    on(todoApiActions.loadingTodosFailure,(state,{todosFailureResponse}) => {
        return {
            ...state,   
            todosFailureResponse
        }
    })
  );