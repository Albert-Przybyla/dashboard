import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticProxiesComponent } from './static-proxies.component';

describe('StaticProxiesComponent', () => {
  let component: StaticProxiesComponent;
  let fixture: ComponentFixture<StaticProxiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticProxiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticProxiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
