import { Component } from '@angular/core';
import { PageUnderConstructionComponent } from '../../components/page-under-construction/page-under-construction.component';
import { baseAnimations } from '../../base/baseAnimations';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [PageUnderConstructionComponent],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss',
  animations: [baseAnimations],
})
export class ProgramsComponent {}
