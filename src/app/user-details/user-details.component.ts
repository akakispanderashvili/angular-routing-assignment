import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../types/customer.interface';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  customer: Customer | undefined;
  customerId: number | undefined;

  private _subs = new Subscription();

  constructor(
    private _http: HttpClient,
    private _activatedRoute: ActivatedRoute
  ) {
    this.customer = {} as Customer;
  }

  ngOnInit(): void {
    this._subs.add(
      this._activatedRoute.params.subscribe((params) => {
        this.customerId = params['id'];
        if (this.customerId) this.fetchCustomerDetails(this.customerId);
      })
    );
  }
  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  fetchCustomerDetails(id: number) {
    this._http
      .get<Customer[]>('/assets/customer-details.json')
      .subscribe((response: Customer[]) => {
        this.customer = response.find((customer) => customer.id == id);
      });
  }
}
