import { Action } from "@ngrx/store";

export enum countActionsType {
  increace = '[COUNT] increase',
  decreace = '[COUNT] decrease',
  clear = '[COUNT] clear',
  updatedAt = '[COUNT] updated at'
}

export class CountIncreaseAction implements Action {
  readonly type = countActionsType.increace;
}

export class CountDecreaseAction implements Action {
  readonly type = countActionsType.decreace;
}

export class CountClearAction implements Action {
  readonly type = countActionsType.clear;
}

export class CountUpdatedAtAction implements Action {
  readonly type = countActionsType.updatedAt;
  // payload must be an object
  constructor(public payload: {
    updatedAt: number
  }) {}
}


export type CountActions =
  CountIncreaseAction |
  CountDecreaseAction |
  CountClearAction |
  CountUpdatedAtAction;
