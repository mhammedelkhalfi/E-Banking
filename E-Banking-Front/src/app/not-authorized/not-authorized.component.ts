import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.5s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NotAuthorizedComponent implements OnInit {
  showAlert = false;

  ngOnInit(): void {
    // Afficher l'alerte avec une animation
    this.showAlert = true;

    // Cacher l'alerte après 3 secondes
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
}
