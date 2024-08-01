import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any = {
    username: '',
    password: '',
    expiresInMins: 30
  };

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http.post('https://dummyjson.com/auth/login', this.loginObj, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe((res: any) => {
      if (res.token) {
        alert('Login Success!');
        localStorage.setItem('loginToken', res.token);
        this.router.navigateByUrl('/navegacion');
      } else {
        alert('Login failed');
      }
    }, error => {
      console.error('Error:', error);
      alert('Login failed. Please try again.');
    });
  }
}