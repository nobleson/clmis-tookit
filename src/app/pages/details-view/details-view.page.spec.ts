import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsViewPage } from './details-view.page';

describe('DetailsViewPage', () => {
  let component: DetailsViewPage;
  let fixture: ComponentFixture<DetailsViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
