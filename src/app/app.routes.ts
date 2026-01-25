import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { ChooserComponent } from '../components/chooser/chooser.component';
import { ChatComponent } from '../components/chat/chat.component';
import { ChatListComponent } from '../components/chat-list/chat-list.component';
import { MissionEditorComponent } from '../components/mission-editor/mission-editor.component';
import { MissionListComponent } from '../components/mission-list/mission-list.component';
import { CompanyMenuComponent } from '../components/company-menu/company-menu.component';
import { CategoryChooserComponent } from '../components/category-chooser/category-chooser.component';
import { TimeChooserComponent } from '../components/time-chooser/time-chooser.component';
import { ReviewComponent } from '../components/review/review.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category-chooser', component: CategoryChooserComponent },
  { path: 'time-chooser', component: TimeChooserComponent },
  { path: 'chooser', component: ChooserComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'chats', component: ChatListComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'mission-list', component: MissionListComponent },
  { path: 'mission-editor', component: MissionEditorComponent },
  { path: 'company-menu', component: CompanyMenuComponent },
  { path: '**', redirectTo: '' }
];
