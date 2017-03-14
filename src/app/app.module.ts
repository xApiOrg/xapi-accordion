import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AccordionComponent } from './components/accordion.component';
import { AccordionGroupComponent } from './components/accordion-group.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
