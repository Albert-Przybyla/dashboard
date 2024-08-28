import { Component } from '@angular/core';
import { PageUnderConstructionComponent } from '../../components/page-under-construction/page-under-construction.component';
import { baseAnimations } from '../../base/baseAnimations';

@Component({
  selector: 'app-residential-proxies',
  standalone: true,
  imports: [PageUnderConstructionComponent],
  templateUrl: './residential-proxies.component.html',
  styleUrl: './residential-proxies.component.scss',
  animations: [baseAnimations],
})
export class ResidentialProxiesComponent {}
