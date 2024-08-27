import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialProxiesComponent } from './residential-proxies.component';

describe('ResidentialProxiesComponent', () => {
  let component: ResidentialProxiesComponent;
  let fixture: ComponentFixture<ResidentialProxiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentialProxiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialProxiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
