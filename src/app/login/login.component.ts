import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {timeout} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      user: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  Enter() {
    const user = this.form.value.user;
    const password = this.form.value.password;
    console.log(user);
    console.log(password);

    if(user == 'Trojas' && password=='patient0'){
      this.fakeLoading();
    }
    else{
      this.error();
      this.form.reset();
    }

  }
  error(){
    this._snackBar.open('User or Password entered are invalid','',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading=true;
    setTimeout(()=>{
      this.router.navigate(['patients']);
    },1500);
  }

}
