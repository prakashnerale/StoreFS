import { Component, OnInit } from '@angular/core';
import { AppConst } from 'src/app/constants/app-const';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private loginError: boolean = false;
  private loggedIn = false;
  private credential = { 'username': '', 'password': '' };

  private emailSent: boolean = false;
  private usernameExist: boolean;
  private emailExist: boolean;
  private emailNotExist: boolean = false;
  private forgetPasswordEmailSent: boolean;
  private username: string;
  private email: string;


  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router) { }

  onLogin() {
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(

      res => {
        console.log(res);
        localStorage.setItem("xAuthToken", res.json().token);
        this.loggedIn = true;
        location.reload();
        this.router.navigate(['/home']);

      },
      error => {
        this.loggedIn = false;
        this.loginError = true;
      }

    );
  }

  onNewAccount() {
    this.usernameExist = false;
    this.emailExist = false;
    this.emailSent = false;

    this.userService.newUser(this.username, this.email).subscribe(
      res => {
        console.log(res);
        this.emailSent = true;
      },
      error => {
        console.log(error.text());
        let errorMessage = error.text();
        if (errorMessage == "usernameExist")
          this.usernameExist = true;
        if (errorMessage == "emailExists")
          this.emailExist = true;
      }
    );
  }




  ngOnInit() {
  }

}
