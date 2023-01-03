import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropAndEventComponent } from './prop-and-event.component';

describe('PropAndEventComponent', () => {
  let component: PropAndEventComponent;
  let fixture: ComponentFixture<PropAndEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropAndEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropAndEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
