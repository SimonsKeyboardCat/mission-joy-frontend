import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from './chooser.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chooser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chooser.component.html',
  styleUrl: './chooser.component.scss'
})
export class ChooserComponent {
  cards: Card[] = [
    {
      id: 1,
      image: 'assets/cover-photos/park-cleanup.jpg',
      tag: 'Environment',
      title: 'Park Cleanup',
      icon: 'tree',
      company: 'Green Earth',
      description: 'Join us in cleaning up the local park to make it beautiful again.',
      duration: '3 hours',
      date: '2024-07-20',
      location: 'Central Park (5 kilometers away)',
      peopleNeeded: 15
    },
    {
      id: 2,
      image: 'assets/cover-photos/food-basket.jpg',
      tag: 'Community',
      title: 'Food Drive',
      icon: 'basket',
      company: 'Helping Hands',
      description: 'Help collect and distribute food to those in need in our community.',
      duration: '4 hours',
      date: '2024-07-22',
      location: 'Community Center (2 kilometers away)',
      peopleNeeded: 10
    },
  ];

  isDragging = false;
  startX = 0;
  currentDeltaX = 0;
  showMatchPopup = false;

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToChats() {
    this.router.navigate(['/chats']);
  }

  startDrag(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.startX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this.currentDeltaX = 0;
  }

  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    const x = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    this.currentDeltaX = x - this.startX;
  }

  endDrag() {
    if (!this.isDragging) return;
    
    const sensitivity = 100;
    if (Math.abs(this.currentDeltaX) > sensitivity) {
      this.completeSwipe();
      this.checkMatch();
    } else {
      this.resetPosition();
    }
  }

  private completeSwipe() {
    setTimeout(() => {
      this.cards.shift();
      this.isDragging = false;
      this.currentDeltaX = 0;
    }, 300);
  }

  private checkMatch() {
    if (this.currentDeltaX > 50) {
      this.showPopup();
    } else if (this.currentDeltaX < -50) {
    }
  }

  private showPopup() {
    this.showMatchPopup = true;
    setTimeout(() => {
      this.showMatchPopup = false;
    }, 3000);
  }

  private resetPosition() {
    this.isDragging = false;
    this.currentDeltaX = 0;
  }

  getCardStyle(isTop: boolean) {
    if (!isTop) return {};
    
    var border = '';
    var backgroundColor = '';
    if (this.currentDeltaX > 50) {
      border = '3px solid green';
    } else if (this.currentDeltaX < -50) {
      border = '3px solid red';
    }

    return {
      'transform': `translateX(${this.currentDeltaX}px) rotate(${this.currentDeltaX / 10}deg)`,
      'transition': this.isDragging ? 'none' : 'transform 0.3s ease',
      'opacity': Math.abs(this.currentDeltaX) > 500 ? 0 : 1,
      'border': border
    };
  }
}