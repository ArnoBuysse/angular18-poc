import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string | null = null;
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() theme: 'dark' | 'light' = 'light';
  @Input() loading = false;
  @Input() disabled = false;
  @Input() cySelector: string | null = null;
}
