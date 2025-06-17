import { Component } from '@angular/core';
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';

@Component({
  templateUrl: 'typography.component.html',
  imports: [CardComponent, CardHeaderComponent, CardBodyComponent],
})
export class TypographyComponent {
  constructor() {}
}
