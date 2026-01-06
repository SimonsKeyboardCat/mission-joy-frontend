import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Mission } from './missons.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.scss'
})
export class MissionListComponent {
  missions: Mission[] = [
    {
      id: 1,
      title: 'Park Cleanup',
      image: 'assets/cover-photos/park-cleanup.jpg',
      description: 'Join us in cleaning up the local park to make it a better place for everyone.',
      date: '2024-07-20',
      location: 'Central Park',
      duration: '3 hours',
      volunteersNeeded: 15,
      volunteersSignedUp: 8,
      completed: false
    },
    {
      id: 2,
      title: 'Food Drive',
      image: 'assets/cover-photos/food-basket.jpg',
      description: 'Help us collect and distribute food to those in need in our community.',
      date: '2024-07-22',
      location: 'Community Center',
      duration: '4 hours',
      volunteersNeeded: 10,
      volunteersSignedUp: 5,
      completed: false
    },
    {
      id: 3,
      title: 'Tree Planting',
      image: 'assets/cover-photos/tree-planting.jpg',
      description: 'Participate in our tree planting event to help improve the environment.',
      date: '2024-07-25',
      location: 'Riverside Park',
      duration: '5 hours',
      volunteersNeeded: 20,
      volunteersSignedUp: 12,
      completed: true
    }
  ];

  constructor(private router: Router) {}

  goToChatList(mission: Mission) {
    if (!mission.completed) {
      this.router.navigate(['/chats']); 
    }
  }
}
