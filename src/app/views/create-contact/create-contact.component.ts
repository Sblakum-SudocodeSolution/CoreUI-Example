import { Component } from '@angular/core';
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
} from '@coreui/angular';

@Component({
  selector: 'app-create-contact',
  imports: [CardComponent, CardHeaderComponent, CardBodyComponent],
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.scss',
})
export class CreateContactComponent {}
