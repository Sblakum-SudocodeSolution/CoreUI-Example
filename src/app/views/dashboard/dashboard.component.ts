import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardHeaderComponent,
  CardComponent,
} from '@coreui/angular';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  imports: [CardComponent, CardBodyComponent, CardHeaderComponent],
})
export class DashboardComponent {}
