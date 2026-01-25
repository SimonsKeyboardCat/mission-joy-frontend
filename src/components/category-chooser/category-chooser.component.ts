import { Component } from '@angular/core';
import { Category } from './category-chooser.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-chooser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-chooser.component.html',
  styleUrl: './category-chooser.component.scss'
})
export class CategoryChooserComponent {
  constructor(private router: Router) {}
  
  categories: Category[] = [
    { id: 1, name: "Environment", icon: "bi-heart", color: "#4CAF50" },
    { id: 2, name: "Education", icon: "bi-book", color: "#FF9800" },
    { id: 3, name: "Healthcare", icon: "bi-heart-pulse", color: "#2196F3" },
    { id: 4, name: "Social Justice", icon: "bi-shield-check", color: "#9C27B0" },
    { id: 5, name: "Animal Welfare", icon: "bi bi-bluesky", color: "#8BC34A" },
    { id: 6, name: "Community", icon: "bi-people", color: "#FF5722" },
    { id: 7, name: "Arts & Culture", icon: "bi-music-note", color: "#FFC107" },
    { id: 8, name: "Disaster Relief", icon: "bi-umbrella", color: "#00BCD4" }
  ];

  selectAtLeastOne: boolean = false;

  toggleCategorySelection(category: Category): void {
    category.isSelected = !category.isSelected;
  }

  areAnyCategoriesSelected(): boolean {
    return this.categories.some(category => category.isSelected);
  }

  goToTimeChooser() {
    this.router.navigate(['/time-chooser']);
  }
}
