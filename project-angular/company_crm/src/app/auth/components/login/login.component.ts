import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  constructor(private api: ApiService, private router: Router) { }


  ngOnInit() {


  }

  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), Validators.maxLength(256)]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), Validators.maxLength(1024)]
    })
  })
  onSubmit() {
    if (this.loginForm.invalid) {
      return

    }
    this.api.login(this.loginForm.value).subscribe({
      next: (data) => {
        if (data.token) this.api.setToken(data.token)
        this.router.navigate(['customers'])


      },
      error: (err) => {
        console.log(err.error);

      }
    })
  }

  getFieldControl(field: string): FormControl {
    return this.loginForm.get(field) as FormControl;
  }

}
