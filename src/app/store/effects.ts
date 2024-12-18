import { inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { TodoService } from './todo.service';
import { todoApiActions } from './actions';

@Injectable()
export class TodoEffects {
    actions$ = inject(Actions);
    todoService = inject(TodoService);
  loadTodos$ = createEffect(() =>{
    return this.actions$.pipe(
      ofType(todoApiActions.loadingTodos),
      mergeMap(() =>
        this.todoService.fetchTodo().pipe(
          map((todos) => todoApiActions.loadingTodosSuccess({ todosSuccessResponse:todos })),
          catchError((error) => of(todoApiActions.loadingTodosFailure({ todosFailureResponse: error })))
        )
      )
    )
 } );
}