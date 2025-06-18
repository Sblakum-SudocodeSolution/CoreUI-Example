import { Component } from '@angular/core';
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-document-dashboard',
  imports: [CardComponent, CardHeaderComponent, CardBodyComponent],
  templateUrl: './document-dashboard.component.html',
  styleUrl: './document-dashboard.component.scss',
})
export class DocumentDashboardComponent {}
