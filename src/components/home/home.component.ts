import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToCategoryChooser() {
    this.router.navigate(['/category-chooser']);
  }

  goToCompanyMenu() {
    this.router.navigate(['/company-menu']);
  }
}
