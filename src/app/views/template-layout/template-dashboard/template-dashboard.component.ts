import { Component } from '@angular/core';
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-template-dashboard',
  imports: [CardComponent, CardHeaderComponent, CardBodyComponent],
  templateUrl: './template-dashboard.component.html',
  styleUrl: './template-dashboard.component.scss',
})
export class TemplateDashboardComponent {}
