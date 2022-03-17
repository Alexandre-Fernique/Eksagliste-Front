import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceBoxComponent } from './advice-box.component';

describe('AdviceBoxComponent', () => {
  let component: AdviceBoxComponent;
  let fixture: ComponentFixture<AdviceBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
