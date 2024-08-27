import { Component } from '@angular/core';
import { PageUnderConstructionComponent } from '../../components/page-under-construction/page-under-construction.component';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [PageUnderConstructionComponent],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss',
})
export class ProgramsComponent {}
