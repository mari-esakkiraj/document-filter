import { Component, Input } from '@angular/core';
import { documentDetails } from '../dashboard/docData';

@Component({
  selector: 'app-display-document-details',
  templateUrl: './display-document-details.component.html',
  styleUrls: ['./display-document-details.component.css']
})
export class DisplayDocumentDetailsComponent {
  @Input() docDetails: any;
}
