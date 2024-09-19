import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'ui-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCounterComponent {
  title = input<string>();
  updateCounter = output<number>();

  public counter = 0;

  public increment(): void {
    this.updateCounter.emit(++this.counter);
  }

  public decrement(): void {
    this.updateCounter.emit(--this.counter);
  }
}
