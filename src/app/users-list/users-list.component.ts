import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Customer } from '../types/customer.interface';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  customers: Customer[];

  constructor(private http: HttpClient, private router: Router) {
    this.customers = [];
  }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.http
      .get<Customer[]>('/assets/customer-list.json')
      .subscribe((response: Customer[]) => {
        this.customers = response;
      });
  }
}
