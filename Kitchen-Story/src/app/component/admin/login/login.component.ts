import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public loginForm : FormGroup;
 public message:string="";
 private formSubmitAttempt: boolean | undefined;

constructor(private formBuilder : FormBuilder,private userSrv:UserService, private router:Router, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email : ['', [Validators.required , Validators.minLength(6), Validators.maxLength(20), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      rememberme:['', Validators.required]
     
    });
   
  }

  ngOnInit() {
    sessionStorage.removeItem("userRole");
  }

  public onSubmit(loginForm:any) {

 
    if(loginForm.valid){
    
      this.userSrv.getUserByEmail(this.email.value).subscribe((res:any)=>{
   
        if(res!=null && res!=undefined && res.length!=0  ) {
          let getuserrole = res[0].role ;
          console.log(getuserrole);
          
          if(res[0].password === this.password.value && getuserrole == "admin" ) { 
                       
            console.log("Set Role"+ res[0].role);
            sessionStorage.setItem("userRole",(res[0].role));

            console.log(this.loginForm.value);
            this.authService.login(this.loginForm.value);
            this.formSubmitAttempt = true;
            this.router.navigateByUrl("/home");
         
          }else {
            this.message = "Not a valid admin credentials";
            // console.log("User password does not match");          
          }   
        } else {
          this.message = "Not a valid admin credentials";
          // console.log("User password does not match");          
        }   
      });
    } else{
      // console.log("Invalid Form !");
      this.validate(loginForm);
    }
  }

  public validate(form:any){
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if(control instanceof FormControl){
        control.markAsTouched({ onlySelf: true});
      } else{
        this.validate(control);
      }
    });
  }

  hasError(fieldName:string) {
    let field = this.loginForm.get(fieldName);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.loginForm.controls;
  }

  get email() {
    return this.form['email'];
  }

  get password() {
    return this.form['password'];
  }

  get rememberme() {
    return this.form['rememberme'];
  }
}
