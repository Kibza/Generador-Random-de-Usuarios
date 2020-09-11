import {  Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from '../models/user.model';


export const ADD_USER       = '[TODO] Add';
export const REMOVE_USER    = '[TODO] Remove';
export const UPDATE_USER       = '[TODO] Update';


export class AddTodo implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) {

  }
}


export class UpdateTodo implements Action {
  readonly type = UPDATE_USER;

  constructor(public id: number,  public changes) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_USER;

  constructor(public id: number) {}
}


export type Actions = AddTodo | UpdateTodo | RemoveTodo;
