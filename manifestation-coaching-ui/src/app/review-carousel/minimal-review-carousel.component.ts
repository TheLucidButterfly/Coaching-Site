import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { Review, REVIEWS } from '../data/reviews.data';

@Component({
  selector: 'app-review-carousel',
  standalone: true,
  imports: [CommonModule, ReviewCardComponent],
  templateUrl: './minimal-review-carousel.component.html',
  styleUrls: ['./minimal-review-carousel.component.scss']
})
export class MinimalReviewCarouselComponent {
  reviews: Review[] = REVIEWS;

  current = 0;

  prev() { this.current = (this.current - 1 + this.reviews.length) % this.reviews.length }
  next() { this.current = (this.current + 1) % this.reviews.length }
}
