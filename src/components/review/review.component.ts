import { Component } from '@angular/core';
import { RecentActivity } from '../profile/profile.models';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
    activities: RecentActivity[] = [
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

  activityId: number | null = null;
  activity : RecentActivity | undefined;
  rating: number = 0;
  reviewText: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.activityId = params['activityId'];
      this.activity = this.activities.find(a => a.id == this.activityId);
    });
  }

  goProfile() {
    this.router.navigate(['/profile']);
  }

  setRating(star: number) {
    this.rating = star;
  }

  submitReview() {
    console.log('Review submitted:', {
      activityId: this.activityId,
      rating: this.rating,
      reviewText: this.reviewText
    });
    this.goProfile();
  }
}
