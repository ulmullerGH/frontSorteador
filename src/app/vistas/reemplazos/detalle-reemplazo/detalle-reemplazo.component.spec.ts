import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReemplazoComponent } from './detalle-reemplazo.component';

describe('DetalleReemplazoComponent', () => {
  let component: DetalleReemplazoComponent;
  let fixture: ComponentFixture<DetalleReemplazoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleReemplazoComponent]
    });
    fixture = TestBed.createComponent(DetalleReemplazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
