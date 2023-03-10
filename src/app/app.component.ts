import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  constructor(private router: Router) {}

  showUserList() {
    this.router.navigate(['/users-list']);
  }

  // showUserDetails() {
  //   this.router.navigate(['/user-details']);
  // }
}
