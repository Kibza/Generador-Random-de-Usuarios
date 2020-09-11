import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor(protected http: HttpClient) { }

  public getApiEndPoint() {
    return this.http.get('https://randomapi.com/api/u7h074uv?key=614Q-9SS4-5UJT-LYXR');
  }
}
