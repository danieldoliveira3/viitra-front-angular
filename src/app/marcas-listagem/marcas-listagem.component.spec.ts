import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasListagemComponent } from './marcas-listagem.component';

describe('MarcasListagemComponent', () => {
  let component: MarcasListagemComponent;
  let fixture: ComponentFixture<MarcasListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
