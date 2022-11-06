import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("loggedIn") == "true") { 
      this.router.navigate(["/dashboard"])
    }
  }

  isRegisterVisible:boolean=false

  isLoginVisible:boolean=true

  isRegisterMessageVisible:boolean=false

  isLoginMessageVisible:boolean=false

  showRegister(){
    this.isRegisterVisible=true
    this.isLoginVisible=false
  }

  onSubmitRegister(form:NgForm){
    const user:any = {
      email: form.value.email,
      password: form.value.password,
      username: form.value.username
    }
    console.log(user)
    this.auth.register(user).subscribe(
      (data)=>{
        console.log(data)
        this.isRegisterMessageVisible=true
        this.isRegisterVisible=false
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  back(){
    this.isRegisterVisible=false
    this.isLoginVisible=true
    this.isRegisterMessageVisible=false
  }

  onSubmitLogin(form:NgForm){
    const user:any={
      email: form.value.email,
      password: form.value.password
    }
    console.log(user)
    this.auth.login(user).subscribe(
      (data)=>{
        console.log(data)
        localStorage.setItem("loggedIn", "true")
        localStorage.setItem("user_id", `${data.user.id}`)
        localStorage.setItem("accessToken", `${data.accessToken}`)
        this.router.navigate(["/dashboard"])
      },
      (err)=>{
        console.log(err)
        this.isLoginMessageVisible=true
      }
    )

    form.reset()

  }
}
