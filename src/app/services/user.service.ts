import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as UserActions from '../actions/user.actions'
import * as fromUserReducer from '../reducers/user.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { User } from '../models/user.model';


@Injectable()
export class TodoService {

  private allUsers;
  private todoById;
  constructor(private store: Store<AppState>) {

    this.allUsers = createSelector(
      fromUserReducer.selectAll,
      (entities) => {
        return entities;
      }
    )

    this.todoById = createSelector(fromUserReducer.selectEntities,
      (entities: Dictionary<User>, props: { id: number }) => {
        return entities[props.id];
      }
    )

  }
  public add(data: User) {
    this.store.dispatch(new UserActions.AddTodo(data))
  }


  public list() {
    return this.store.pipe(select(this.allUsers));
  }

  public remove(id: number) {
    this.store.dispatch(new UserActions.RemoveTodo(id))
  }

  public getDetail(id: number) {
    return this.store.pipe(select(this.todoById, { id: id }));
  }
}
