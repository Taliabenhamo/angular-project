import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, MinLengthValidator, Validators } from '@angular/forms';
import { ApiService, Customer } from 'src/app/core/api.service';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss'],
})
export class CustomerPageComponent implements OnInit {

  getFieldControl(field: string): FormControl {
    return this.customerForm.get(field) as FormControl;
  }

  title = 'customers'
  showForm = false;
  showNotification = false;


  customers: Array<Customer> = [];

  customerForm = new FormGroup({
    firstName: new FormControl('', {
      validators: [Validators.required,
      Validators.minLength(2)]
    }),
    lastName: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2)]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email, Validators.minLength(9), Validators.maxLength(255)],
    }),
    phone: new FormControl('', {
      validators: [Validators.required, Validators.minLength(9), Validators.maxLength(12)]
    }),
    address: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), Validators.maxLength(350)]

    })
  })


  customerTotal(): number {
    return this.customers ? this.customers.length : 0;
  };
  toggleForm() {
    this.showForm = !this.showForm;
  }

  notificationClosed(state: boolean) {
    this.showNotification = state;
    this.showForm = false;
  }
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.getAllCustomers()
  }

  getAllCustomers() {
    this.api.getCustomer().subscribe({
      next: (data: Array<Customer>) => this.customers = data,
      error: (err) => console.log(err)

    })
  }

  onSubmit() {
    if (this.customerForm.invalid) {
      return
    }


    this.api.addCustomer(this.customerForm.value).subscribe({
      next: (data: Customer) => {
        this.customerForm.reset()
        this.getAllCustomers()
      },
      error: (err) => console.log(err)

    })
    this.showNotification = true;

    // this.customerForm.reset();
  }
  ;

  deletecustomer(customer: Customer): void {
    if (!customer._id) {
      return
    }
    this.api.deleteCustomer(customer._id).subscribe({
      next: (data: Customer) => this.getAllCustomers(),
      error: (err) => console.log(err)

    })


  }
}

