import { Component } from '@angular/core';
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  imports: [CardComponent, CardHeaderComponent, CardBodyComponent],
})
export class ColorsComponent {}
