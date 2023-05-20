import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService, Employee } from 'src/app/core/api.service';
@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss']
})
export class EmployeesPageComponent {
  title = 'contact';
  searchField = '';

  searchInEmployees(e: any) {
    const value = e.target.value

    if (value === "") {
      this.employees


    }
    this.employees = this.employees.filter(employee =>
      employee.name?.toLowerCase().includes(value.trim().toLowerCase())



    )

  }




  employees: Array<Employee> = [
    {
      name: "Mikey hadson",
      phone: "0549966526",
      email: "mikehad_77@gmail.com",
      birthday: "07.11.2000"


    },
    {
      name: "hen elik",
      phone: [
        "054-556556552",
        "035825555"],
      email: "mikehad_77@gmail.com",
      birthday: "07.11.2000"
    },
    {
      name: "Nicole ben ari",
      phone: "052-7744632",
      email: "nikiben_a@gmail.com",
      birthday: "04.07.1981"
    },
    {
      name: "Liron roey",
      phone: "050-6987369",
      email: "lirony@walla.com",
      birthday: "01.06.1984"

    },
    {
      name: "Liza saadon",
      phone: "054-8726548",
      email: "lizi@yahoo.co.il",
      birthday: "28.05.1990"
    },
  ];



  employeeForm = new FormGroup({
    name: new FormControl('', {
      validators: Validators.required
    }),
    phone: new FormControl('', {
      validators: Validators.required
    }),
    email: new FormControl('', {
      validators: Validators.required
    }),
    birthday: new FormControl('', {
      validators: Validators.required
    })
  });
  api: any;


  // onSubmit() {
  //   if (this.employeeForm.invalid) {
  //     return
  //   }

  //   this.api.getEmployees(this.employeeForm.value).subscribe({
  //     next: (data: Employee) => {
  //       this.employeeForm.reset()

  //     },
  //     error: (err: any) => console.log(err)
  //   })
  // }

}