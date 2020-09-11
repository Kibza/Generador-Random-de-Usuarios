import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public todoSub: Observable<User>;
  constructor(private router: Router, private userService: TodoService) {

  }

  ngOnInit() {

    this.todoSub = this.userService.list();

  }
  deleteRecord(id) {
    this.userService.remove(id);
  }

  public trackByToDo(index, item) {
    return item.id;
  }
}
