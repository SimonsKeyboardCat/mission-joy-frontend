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
      title: 'Beach Cleanup',
      organization: 'Ocean Guardians',
      time: '2h',
      date: new Date('2024-06-15')
    },
    {
      title: 'Tree Planting',
      organization: 'Green Earth',
      time: '3h',
      date: new Date('2024-06-10')
    },
    {
      title: 'Food Drive',
      organization: 'Helping Hands',
      time: '4h',
      date: new Date('2024-06-05')
    }
  ];

  achievements: Achievement[] = [
    {
      title: 'Eco Warrior I',
      icon: 'recycle'
    },
    {
      title: 'Education Champion',
      icon: 'book-half'
    },
    {
      title: 'Animal Protector',
      icon: 'tree'
    },
    {
      title: 'Community Helper',
      icon: 'people-fill'
    },
    {
      title: 'Digital Advocate',
      icon: 'twitter'
    },
    {
      title: 'Elders Friend',
      icon: 'person-heart'
    }
  ]

  constructor(private router: Router) {}

  goToChooser() {
    this.router.navigate(['/chooser']);
  }
}
