import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetaiComponent } from './room-detai.component';

describe('RoomDetaiComponent', () => {
  let component: RoomDetaiComponent;
  let fixture: ComponentFixture<RoomDetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomDetaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
