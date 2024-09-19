import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiCounterComponent } from '@poc/ui';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiCounterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'b2b';
}
