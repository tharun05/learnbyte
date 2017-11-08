import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from './password-validator.component';

declare interface User {
   text?: string; // required, must be 5-8 characters
   email?: string; // required, must be valid email format
   password?: string; // required, value must be equal to confirm password.
   confirmPassword?: string; // required, value must be equal to password.
   number?: number; // required, value must be equal to password.
   url?: string;
   idSource?: string;
   idDestination?: string;
}

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public user: User;
  public typeValidation: User;
  constructor(private elRef:ElementRef) {
     
  }
  ngOnInit(){
      let body = document.getElementsByTagName('body')[0];
      var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
      if (isWindows){
         // if we are on windows OS we activate the perfectScrollbar function
          body.classList.add("perfect-scrollbar-on");
      } else {
          body.classList.add("perfect-scrollbar-off");
      }
      $.material.init();
      this.user = {
        email: '',
        password: '',
        confirmPassword: ''
      }
      this.typeValidation = {
          text: '',
          email: '',
          idSource: '',
          idDestination: '',
          url: ''
      }
     
  }
  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
    onSubmit(value: any):void{
        console.log(value);
    }
}
