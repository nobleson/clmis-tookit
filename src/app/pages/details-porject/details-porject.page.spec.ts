import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPorjectPage } from './details-porject.page';

describe('DetailsPorjectPage', () => {
  let component: DetailsPorjectPage;
  let fixture: ComponentFixture<DetailsPorjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPorjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPorjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
