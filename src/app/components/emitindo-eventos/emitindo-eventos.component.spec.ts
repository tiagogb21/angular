import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitindoEventosComponent } from './emitindo-eventos.component';

describe('EmitindoEventosComponent', () => {
  let component: EmitindoEventosComponent;
  let fixture: ComponentFixture<EmitindoEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitindoEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitindoEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
