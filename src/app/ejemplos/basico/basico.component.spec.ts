import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicoComponent } from './basico.component';

describe('BasicoComponent', () => {
  let component: BasicoComponent;
  let fixture: ComponentFixture<BasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
