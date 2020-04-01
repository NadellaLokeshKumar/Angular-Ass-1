import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminId = 'lokeshnadella99@gmail.com';
  password = 'lokeshkumar';
  error: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitform(form: NgForm) {
    if (form.value.email === this.adminId && form.value.password === this.password) {
      this.error = '';
      this.router.navigateByUrl('/allRecords');
    } else {
      form.reset();
      this.error = 'Invaild credentials';
    }
  }
}
