import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) { }
  ngOnInit() {

  }

  signupForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2), Validators.maxLength(100), Validators.pattern('[a-zA-Z]*')]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(200)]
    })
  });
  getFieldControl(field: string): FormControl {
    return this.signupForm.get(field) as FormControl;
  }
  onSubmit() {
    if (this.signupForm.invalid) {
      return
    }
    this.api.signup(this.signupForm.value).subscribe({
      next: (data) => {
        this.router.navigate(['login'])


      },
      error: (err) => {
        console.log(err.error);

      }
    })
  }

};