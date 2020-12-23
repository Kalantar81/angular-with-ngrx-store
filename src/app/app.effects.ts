import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { countActionsType, CountUpdatedAtAction } from './reducers/count/count.actions';
import {map} from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  // через Effect() проходят все в actions системе
  @Effect()
  public updatedAt$() {
    return this.actions$.pipe(
      // Gives all types of actions, that I want to see here
      ofType(countActionsType.increace, countActionsType.decreace, countActionsType.clear),
      map(() => {
        return new CountUpdatedAtAction({
          updatedAt: Date.now()
        });
      })
    );
  }
}
