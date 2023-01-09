import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayDocumentDetailsComponent } from './display-document-details/display-document-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    DashboardComponent,
    DisplayDocumentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
