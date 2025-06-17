import { Component } from '@angular/core';
import {
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  imports: [
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
  ],
})
export class ChartsComponent {}
