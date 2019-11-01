import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TextareaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  entryComponents: [
    AppComponent,
    InputComponent,
    TextareaComponent
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elementMatInput = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define("mat-input", elementMatInput);
  }
}
