import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from './chat.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  chats: Chat[] = [ 
    {
      id: 1,
      name: 'Green Earth',
      job: 'Park Cleanup',
      image: 'assets/cover-photos/park-cleanup.jpg',
      messages: [
        {
          sender: 'organization',
          content: 'Hello! Thank you for joining our Park Cleanup event. We are excited to have you on board!',
          timestamp: new Date('2024-06-20T14:30:00')
        },
        {
          sender: 'user',
          content: 'Hi! I am looking forward to it. Could you please provide more details about the meeting point?',
          timestamp: new Date('2024-06-20T14:32:00')
        },
        {
          sender: 'organization', 
          content: 'Sure! We will be meeting at the main entrance of Central Park at 9 AM. Please look for our team wearing green vests.',
          timestamp: new Date('2024-06-20T14:35:00')
        }
      ]
    },
    {
      id: 2,
      name: 'Helping Hands',
      job: 'Food Delivery',
      image: 'assets/cover-photos/food-basket.jpg',
      messages: [
        {
          sender: 'organization',
          content: 'Thank you for signing up for our Food Drive event! We appreciate your support.',
          timestamp: new Date('2024-06-19T10:15:00')
        },
        {
          sender: 'user',
          content: 'Happy to help! Can you tell me what items are most needed for the drive?',
          timestamp: new Date('2024-06-19T10:17:00')
        },
        {
          sender: 'organization',
          content: 'We are currently in need of non-perishable food items such as canned goods, pasta, and rice. Thank you for asking!',
          timestamp: new Date('2024-06-19T10:20:00')
        }
      ]
    }
  ];
  chatId: number | null = null;
  chat : Chat | undefined;
  newMessage: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToChatList() {
    this.router.navigate(['/chats']);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.chatId = params['chatId'];
      this.chat = this.chats.find(c => c.id == this.chatId);
    });
  }

  sendMessage(chatId: number, newMessage: string) {
    if (newMessage.trim() === '') return;
    const chat = this.chats.find(c => c.id === chatId);
    if (chat) {
      chat.messages.push({
        sender: 'user',
        content: newMessage,
        timestamp: new Date()
      });
      this.newMessage = '';
    }
  }
}