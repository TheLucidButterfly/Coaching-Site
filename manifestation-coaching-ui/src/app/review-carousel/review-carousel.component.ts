import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewCardComponent } from '../review-card/review-card.component';

interface Review { author: string; text: string; role?: string; rating: number }

@Component({
  selector: 'app-review-carousel',
  standalone: true,
  imports: [CommonModule, ReviewCardComponent],
  templateUrl: './review-carousel.component.html',
  styleUrls: ['./review-carousel.component.scss']
})
export class ReviewCarouselComponent {
  reviews: Review[] = [
    { author: 'Sara M.', text: 'Transformed my relationship with money — highly recommend.', role: 'Entrepreneur', rating: 5 },
    { author: 'Jon P.', text: 'Practical, research-based approach that actually works.', role: 'Designer', rating: 5 },
    { author: 'Lena R.', text: 'I saw results in two weeks. Powerful coaching.', role: 'Coach', rating: 5 }
  ];

  current = 0;

  prev() { this.current = (this.current - 1 + this.reviews.length) % this.reviews.length }
  next() { this.current = (this.current + 1) % this.reviews.length }

  // optional: simple autoplay
  constructor() {
    setInterval(() => this.next(), 5000);
  }
}
