import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DayOption, OftenOption, TimeOption } from './time-chooser.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-chooser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-chooser.component.html',
  styleUrl: './time-chooser.component.scss'
})
export class TimeChooserComponent {
  timeOptions: TimeOption[] = [
    { name: 'Morning', hours: '8am - 12pm', selected: false },
    { name: 'Afternoon', hours: '12pm - 5pm', selected: false },
    { name: 'Evening', hours: '5pm - 9pm', selected: false }
  ];

  dayOptions: DayOption[] = [
    { name: 'Weekdays', days: 'Mon-Fri', selected: false },
    { name: 'Weekends', days: 'Sat-Sun', selected: false }
  ];

  oftenOptions: OftenOption[] = [
    { name: 'Once a week', frequency: 'Once a week', selected: false },
    { name: 'Twice a week', frequency: 'Twice a week', selected: false },
    { name: 'Every day', frequency: 'Every day', selected: false },
    { name: 'Dlexible', frequency: 'When I can', selected: false }
  ];

  constructor(private router: Router) {}

  goToChooser() {
    this.router.navigate(['/chooser']);
  }

  toggleTimeSelection(option: TimeOption): void {
    option.selected = !option.selected;
  }

  toggleDaySelection(option: DayOption): void {
    option.selected = !option.selected;
  }

  toggleOftenSelection(option: OftenOption): void {
    option.selected = !option.selected;
  }

  areAllTypesSelected(): boolean {
    const isTimeSelected = this.timeOptions.some(option => option.selected);
    const isDaySelected = this.dayOptions.some(option => option.selected);
    const isOftenSelected = this.oftenOptions.some(option => option.selected);
    return isTimeSelected && isDaySelected && isOftenSelected;
  }
}
