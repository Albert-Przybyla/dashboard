import { Component } from '@angular/core';
import { PageUnderConstructionComponent } from '../../components/page-under-construction/page-under-construction.component';

@Component({
  selector: 'app-static-proxies',
  standalone: true,
  imports: [PageUnderConstructionComponent],
  templateUrl: './static-proxies.component.html',
  styleUrl: './static-proxies.component.scss',
})
export class StaticProxiesComponent {}
