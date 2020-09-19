import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloCotizacionComponent } from './modulo-cotizacion.component';

describe('ModuloCotizacionComponent', () => {
  let component: ModuloCotizacionComponent;
  let fixture: ComponentFixture<ModuloCotizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloCotizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
