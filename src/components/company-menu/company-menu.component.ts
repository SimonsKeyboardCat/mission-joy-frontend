import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MissionListComponent } from "../mission-list/mission-list.component";

@Component({
  selector: 'app-company-menu',
  standalone: true,
  imports: [MissionListComponent],
  templateUrl: './company-menu.component.html',
  styleUrl: './company-menu.component.scss'
})
export class CompanyMenuComponent {
  company = {
    id: 1,
    name: 'Green Earth',
    motto: 'Together for a Greener Tomorrow',
    logo: 'assets/logos/green-earth-logo.jpg'
  };

  constructor(private router: Router) {}

  goToCreateMission() {
    this.router.navigate(['/mission-editor'], { queryParams: { companyId: this.company.id } });
  }
}
