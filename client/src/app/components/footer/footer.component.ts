import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faGlobe, faPlane, faShield, faSmile } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class FooterComponent {
  faGlobe = faGlobe;
  faPlane = faPlane;
  faShield = faShield;
  faSmile = faSmile;
}
