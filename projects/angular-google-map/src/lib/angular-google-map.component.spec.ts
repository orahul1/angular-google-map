import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGoogleMapComponent } from './angular-google-map.component';

describe('AngularGoogleMapComponent', () => {
  let component: AngularGoogleMapComponent;
  let fixture: ComponentFixture<AngularGoogleMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularGoogleMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
