import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userSigninData } from 'src/app/model/userSiginData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new userSigninData('sathish@gmail.com', 'Test@123');
  isAuthenticated = false;

  constructor(public router: Router) { }
  
  authenticate(UserSignInData: userSigninData): boolean{
    if(this.checkCredentials(UserSignInData)){
      this.isAuthenticated = true;
      this.router.navigate(['web'])
      return true;
    }
    
    this.isAuthenticated = false;
      return false;
  }
  private checkCredentials(UserSignInData : userSigninData): boolean{
    return this.checkEmail(UserSignInData.getEmail()) && this.checkPassword(UserSignInData.getPassword());
  }

  private checkEmail(email: string): boolean{
    return email === this.mockedUser.getEmail();
  }
  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword();
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['login'])
  }

  loggedIn(){
   
  }
  

  //json format check user crendtials
  /*authUser(user : any){
    let userArray = [];
    if(localStorage.getItem('users')){
      userArray = JSON.parse(localStorage.getItem('users'));
    }
    return userArray.find(p => p.uemail === user.uemail && p.upass === user.upass);
  }*/

}
