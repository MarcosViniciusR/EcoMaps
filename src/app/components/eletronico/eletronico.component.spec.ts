import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletronicoComponent } from './eletronico.component';

describe('EletronicoComponent', () => {
  let component: EletronicoComponent;
  let fixture: ComponentFixture<EletronicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletronicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EletronicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
