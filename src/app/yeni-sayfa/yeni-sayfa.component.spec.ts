import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniSayfaComponent } from './yeni-sayfa.component';

describe('YeniSayfaComponent', () => {
  let component: YeniSayfaComponent;
  let fixture: ComponentFixture<YeniSayfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeniSayfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeniSayfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
