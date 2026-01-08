import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  standalone: true,
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent {
  @Input() author = '';
  @Input() text = '';
  @Input() role = '';
  @Input() rating = 5;
}
