import { Component } from '@angular/core';
import { Achievement, RecentActivity } from './profile.models';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  recentActivities: RecentActivity[] = [
    {
      id: 1,
      title: 'Beach Cleanup',
      organization: 'Ocean Guardians',
      time: '2h',
      date: new Date('2024-06-15')
    },
    {
      id: 2,
      title: 'Tree Planting',
      organization: 'Green Earth',
      time: '3h',
      date: new Date('2024-06-10')
    },
    {
      id: 3,
      title: 'Food Drive',
      organization: 'Helping Hands',
      time: '4h',
      date: new Date('2024-06-05')
    }
  ];

  achievements: Achievement[] = [
    {
      id: 1, 
      title: 'Eco Warrior I',
      icon: 'recycle'
    },
    {
      id: 2,
      title: 'Education Champion',
      icon: 'book-half'
    },
    {
      id: 3,
      title: 'Animal Protector',
      icon: 'tree'
    },
    {
      id: 4,
      title: 'Community Helper',
      icon: 'people-fill'
    },
    {
      id: 5,
      title: 'Digital Advocate',
      icon: 'twitter'
    },
    {
      id: 6,
      title: 'Elders Friend',
      icon: 'person-heart'
    }
  ]

  constructor(private router: Router) {}

  goToChooser() {
    this.router.navigate(['/chooser']);
  }

  goToReview(activity: RecentActivity) {
    this.router.navigate(['/review'], { queryParams: { activityId: activity.id } });
  }
}
