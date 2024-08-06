import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/Customer.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  editFormGroup: FormGroup;
  customerId!: number;
  errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.customerId) {
      this.loadCustomer();
    }
  }

  loadCustomer(): void {
    this.customerService.getCustomers().subscribe(
      customers => {
        const customer = customers.find(c => c.id === this.customerId);
        if (customer) {
          this.editFormGroup.setValue({
            name: customer.name,
            email: customer.email
          });
        }
      },
      error => this.errorMessage = error.message
    );
  }

  updateCustomer(): void {
    if (this.editFormGroup.invalid) {
      return; // Form is invalid, do not proceed
    }

    const updatedCustomer: Customer = {
      id: this.customerId,
      ...this.editFormGroup.value
    };

    this.customerService.updateCustomer(updatedCustomer).subscribe(
      () => {
        this.router.navigate(['/customers']); // Redirect after update
      },
      error => this.errorMessage = error.message
    );
  }
}
