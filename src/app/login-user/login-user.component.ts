import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userSigninData } from '../model/userSiginData';
import { AuthenticationService } from '../service/authentication/authentication.service';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  isFormInValid = false;
  areCrentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(signInForm:NgForm){
    if(!signInForm.valid){
      this.isFormInValid = true;
      this.areCrentialsInvalid = false;
      return;
    }
    this.checkCrendtials(signInForm);
  }
  private checkCrendtials(signInForm: NgForm){
    const UserSignInData = new userSigninData(signInForm.value.uemail, signInForm.value.upass);
    if(!this.authenticationService.authenticate(UserSignInData)){
      this.isFormInValid = false;
      this.areCrentialsInvalid = true;
    }
    
    
  }
}
