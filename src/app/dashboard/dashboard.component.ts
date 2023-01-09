import { Component } from '@angular/core';
import { Category, documentDetails } from './docData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  docName: string = '';
  tags = Object.values(Category);
  documentData = documentDetails;
  tempData = this.documentData;

  tagSelected(tag: string) {
    this.tempData = this.documentData.filter(item => {
      return String(item.category).includes(tag);
    });
  }
}
