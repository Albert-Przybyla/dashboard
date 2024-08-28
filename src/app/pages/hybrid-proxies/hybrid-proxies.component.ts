import { Component } from '@angular/core';
import { PageUnderConstructionComponent } from '../../components/page-under-construction/page-under-construction.component';
import { baseAnimations } from '../../base/baseAnimations';

@Component({
  selector: 'app-hybrid-proxies',
  standalone: true,
  imports: [PageUnderConstructionComponent],
  templateUrl: './hybrid-proxies.component.html',
  styleUrl: './hybrid-proxies.component.scss',
  animations: [baseAnimations],
})
export class HybridProxiesComponent {}
