import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from './chat-list.models';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss'
})
export class ChatListComponent {
  chats: Chat[] = [
    {
      id: 1,
      image: 'assets/cover-photos/park-cleanup.jpg',
      name: 'Green Earth',
      lastMessage: 'Looking forward to seeing you at the event!',
      timestamp: new Date('2024-06-20T14:30:00')
    },
    {
      id: 2,
      image: 'assets/cover-photos/food-basket.jpg',
      name: 'Helping Hands',
      lastMessage: 'Thank you for your support!',
      timestamp: new Date('2024-06-19T10:15:00')
    },
  ]; 

  constructor(private router: Router) {}
  
  openChat(chat: Chat) {
    this.router.navigate(['/chat'], { queryParams: { chatId: chat.id } });
  }

  goToChooser() {
    this.router.navigate(['/chooser']);
  }
}
