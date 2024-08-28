import { Component } from '@angular/core';
import { PageUnderConstructionComponent } from '../../components/page-under-construction/page-under-construction.component';
import { baseAnimations } from '../../base/baseAnimations';

@Component({
  selector: 'app-bundles',
  standalone: true,
  imports: [PageUnderConstructionComponent],
  templateUrl: './bundles.component.html',
  styleUrl: './bundles.component.scss',
  animations: [baseAnimations],
})
export class BundlesComponent {}
