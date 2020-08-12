import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServletService } from '../servlet.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent
{
  email : String ='';
  password : String ='';
  loginform: FormGroup;
  signUpFormElements : FormGroup;
  router: any;
  forgetForm = false;
  constructor(private serObj: ServletService){}
  
  
ngOnInit() {
  this.loginform = new FormGroup ({
    username : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(30)]),
  });

  this.signUpFormElements = new FormGroup ({
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    phoneNumber : new FormControl('',Validators.required),
    userName : new FormControl('', Validators.required),
    newPassword : new FormControl('', Validators.required),
  });

  this.serObj.isValid.next(false);
}

signUp() {
  if(this.signUpFormElements.valid == true) {
    alert('This is it');
  }
}
onLoginSubmit() {
  if(this.loginform.valid ==true) {
      alert(this.loginform.value.username+' '+this.loginform.value.password);
      this.serObj.login(this.loginform.value).subscribe();
      console.log("Angularrrrrrrr");
      this.serObj.isValid.next(true);
    }
  }
  

  // submit()
  // {
  //   if (this.form.valid)
  //   {
  //     console.log("In Submit Method !! "+this.form.value.username);
  //     this.submitEM.emit(this.form.value);
  //     this.serObj.isValid.next(true);
  //   }
    // if(!this.form.value.username.valid || !this.form.value.password.valid)
    // {
    //   alert("Enter Credentials !");
    //   console.log("In Submit Method !! "+this.form.value.username);
    // }
    // else
    // {
    //   this.submitEM.emit(this.form.value);
    //   this.serObj.isValid.next(true);
    //   console.log("In Submit Method !! "+this.form.value.username);
    // }
    
  }