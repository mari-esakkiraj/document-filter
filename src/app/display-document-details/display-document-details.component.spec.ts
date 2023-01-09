import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDocumentDetailsComponent } from './display-document-details.component';

describe('DisplayDocumentDetailsComponent', () => {
  let component: DisplayDocumentDetailsComponent;
  let fixture: ComponentFixture<DisplayDocumentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDocumentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDocumentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
