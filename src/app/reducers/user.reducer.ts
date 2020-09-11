import { Action } from '@ngrx/store'
import { User } from '../models/user.model'

import * as UserActions from '../actions/user.actions'

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';


export interface TodoState extends EntityState<User> {

}

export const adapter : EntityAdapter<User> =
  createEntityAdapter<User>({
  });

const initialState: User = <User>{}


export const initialTodoState: TodoState = adapter.getInitialState();


export function userReducers(state = initialTodoState, action: UserActions.Actions ) {

  switch(action.type) {
    case UserActions.ADD_USER:
      return adapter.addOne(action.payload, state);

    case UserActions.UPDATE_USER:

      if (state.entities[action.id] === undefined) {
        return state;
      }

      console.log(action.id);
      console.log(action.changes);

      return  adapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state)

    case UserActions.REMOVE_USER:
      return  adapter.removeOne(action.id, state)
    default:
      return state;
  }
}

export const getTodoState = createFeatureSelector<TodoState>('users');


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors(getTodoState);
