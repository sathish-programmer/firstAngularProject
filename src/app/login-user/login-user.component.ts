import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(signInForm:NgForm){
    console.log(signInForm.value);
  }
}
