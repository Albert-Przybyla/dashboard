import { Component } from '@angular/core';
import { PageUnderConstructionComponent } from '../../components/page-under-construction/page-under-construction.component';
import { baseAnimations } from '../../base/baseAnimations';

@Component({
  selector: 'app-static-proxies',
  standalone: true,
  imports: [PageUnderConstructionComponent],
  templateUrl: './static-proxies.component.html',
  styleUrl: './static-proxies.component.scss',
  animations: [baseAnimations],
})
export class StaticProxiesComponent {}
