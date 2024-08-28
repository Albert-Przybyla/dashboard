import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent implements OnChanges {
  @Input() progress: number = 0;

  protected width = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['progress']) {
      setTimeout(() => {
        this.width = this.progress;
      }, 100);
    }
  }
}
