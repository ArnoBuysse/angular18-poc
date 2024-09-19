import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { UiCounterComponent } from '@poc/ui';

@NgModule({
  imports: [BrowserModule],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const counterElement = createCustomElement(UiCounterComponent, {
      injector: this.injector,
    });
    customElements.define('ce-ui-counter', counterElement);
  }

  ngDoBootstrap() {
    console.log('Custom elements defined');
  }
}
