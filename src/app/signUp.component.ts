
import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'signUp',
  template: `

  
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" href="/style.css">
    <title>Bootstrap 4 Login/Register Form</title>
</head>
<body>

    <div id="logreg-forms">
        <form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal" style="text-align: center"> Sign Up</h1>
            <div class="social-login">
                <button class="btn facebook-btn social-btn" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                <button class="btn google-btn social-btn" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
            </div>
            <p style="text-align:center"> OR  </p>
             
            <input type="email" id="inputEmail" class="form-control"  [(ngModel)]="registerData.email" name="email" placeholder="Email address" required="" autofocus="">
            
            <input type="password" id="inputPassword" class="form-control" [(ngModel)]="registerData.password" name="password" placeholder="Password" required="">
            
            <input type="text" id="inputfName" class="form-control"  [(ngModel)]="registerData.fname" name="fname" placeholder="First Namme" required="" autofocus="">

            <input type="text" id="inputlname" class="form-control"  [(ngModel)]="registerData.lname" name="lname" placeholder="Last Name" required="" autofocus="">

            <input type="text" id="inputflat" class="form-control"  [(ngModel)]="registerData.flat" name="flat" placeholder="Flat Number" required="" autofocus="">

            <button class="btn btn-success btn-block" (click)="Post()" (click)="alert()" routerLink="/login"  type="submit"><i class="fas fa-sign-in-alt"></i> Sign Up </button>
            </form>
            
            <form action="/reset/password/" class="form-reset">
               <input type="email" id="resetEmail" class="form-control" placeholder="Email address" required="" autofocus="">
                <button class="btn btn-primary btn-block" type="submit">Reset Password</button>
                <a href="#" id="cancel_reset"><i class="fas fa-angle-left"></i> Back</a>
            </form>
            
      
            <br>
            
    </div>
    <p style="text-align:center">
        <a href="http://bit.ly/2RjWFMfunction toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})g" target="_blank" style="color:black">By Red Hat Olympians</a>
    </p>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="/script.js"></script>    

    </body>
</html>


`,
styleUrls: ['./app.component.css']
})
export class SignUpComponent {
    registerData = {}
    constructor( public apiService: ApiService){}
    

    Post(){
     this.apiService.sendUserRegisteration(this.registerData)
    }

    alert() {
        window.alert('Hi, You have been Successfully Signed Up! Please Login');
      }

}
 