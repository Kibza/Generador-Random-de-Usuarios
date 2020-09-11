import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { TodoService } from '../../services/user.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  public isDocUploaded: boolean;
  public products;
  public age;
  public gender;
  public user = <User>{};
  constructor(
    private router: Router,
    private userService: TodoService,
    private RandomService: ConfigService) { }

  ngOnInit() {

    this.RandomService.getApiEndPoint().subscribe((data: any[]) => {
      this.products = data;
      const { age, gender } = this.products.results[0];
      this.age = age;
      this.gender = gender;
    });
    this.isDocUploaded = false;
  }

  handleFileInput(i) {
    this.isDocUploaded = true;
    console.table(i)
  }
  onSubmitAddForm(form) {
    if (form.valid) {
      this.user.id = new Date().getTime();
      this.user.age = this.age;
      this.user.gender = this.gender;
      this.user.doc = this.isDocUploaded;
      this.userService.add(this.user);
      this.router.navigate(['/list']);
    } else {
      console.log('Formulario Inválido');
    }
  }

}
