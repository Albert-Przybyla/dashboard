import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridProxiesComponent } from './hybrid-proxies.component';

describe('HybridProxiesComponent', () => {
  let component: HybridProxiesComponent;
  let fixture: ComponentFixture<HybridProxiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HybridProxiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HybridProxiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
