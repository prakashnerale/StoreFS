import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private loggedIn = false;

  constructor(private LoginService:LoginService,private router: Router) { }

  logout() {
  	this.LoginService.logout().subscribe(
  		res => {
        //location.reload();
        this.router.navigate(['/home']);
  		},
  		err => {
  			console.log(err);
  		}
  	);
  }


  ngOnInit() {
    this.LoginService.checkSession().subscribe(
      res=>{
        this.loggedIn = true; 

      },
      error=>{
         this.loggedIn = false;
      }
      
      );
  }

}
