import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userName: string = '';
  password: string = '';
  isLoginMode: boolean = true;
  userDetails: any;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.loginForm.reset();
  }

  submit() {
    if (this.isLoginMode) {
      this.login();
    } else {
      this.signup();
    }
  }

  login(): void {
    this.authService.login(this.loginForm.get('userName').value, this.loginForm.get('password').value).subscribe(
      response => {
        if(response) this.router.navigate(['/users']);
      },
      error => {
        // Handle login error
        console.error('Login failed', error);
        alert( 'Wrong username or password' );
      }
    )
  }

  signup(): void {
    this.userDetails = {
      userName: this.loginForm.get('userName').value,
      password: this.loginForm.get('password').value,
      email: this.loginForm.get('email').value,
      firstName: this.loginForm.get('firstName').value,
      lastName: this.loginForm.get('lastName').value
    }
    this.authService.signup(this.userDetails)
      .subscribe(response => {
          console.log(response);
          this.isLoginMode =  true;
          alert("User created successfully!");
      }, error => {
        console.error('Login failed', error);
      });
  }

  logout(): void {
    this.authService.logout().subscribe(
      response => {
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Logout failed', error);
      }
    );
  }
}
