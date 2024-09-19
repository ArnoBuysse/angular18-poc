import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
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
  @Input() title: string | null = null;
  @Output() updateCounter = new EventEmitter<number>();

  public counter = 0;

  public increment(): void {
    this.counter++;
    this.updateCounter.emit(this.counter);
  }

  public decrement(): void {
    this.counter--;
    this.updateCounter.emit(this.counter);
  }
}
