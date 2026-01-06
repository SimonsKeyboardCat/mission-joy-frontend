import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-editor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './mission-editor.component.html',
  styleUrl: './mission-editor.component.scss'
})
export class MissionEditorComponent {
  activities = ['Environment', 'Education', 'Healthcare', 'Community Service', 'Animal Welfare'];
  
  missionForm = new FormGroup({
      taskTitle: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required]),
      activityType: new FormControl('Environment', Validators.required),
      location: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      volunteersNeeded: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern("^[0-9]*$")])
    });

  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/company-menu']);
  }

  

  onSubmit() {
    if (this.missionForm.valid) {
      console.log(this.missionForm.value);
    }
  }
}
