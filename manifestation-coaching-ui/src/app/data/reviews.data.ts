export interface Review {
  author: string;
  text: string;
  role?: string;
  rating: number;
}

export const REVIEWS: Review[] = [
  { author: 'Sara M.', text: 'Transformed my relationship with money — highly recommend.', role: 'Entrepreneur', rating: 5 },
  { author: 'Jon P.', text: 'Practical, research-based approach that actually works.', role: 'Designer', rating: 5 },
  { author: 'Lena R.', text: 'I saw results in two weeks. Powerful coaching.', role: 'Coach', rating: 5 },
  { author: 'Alex G.', text: 'Clear guidance and actionable steps. Worth every session.', role: 'Engineer', rating: 5 }
];
