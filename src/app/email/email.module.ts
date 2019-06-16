import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EmailComponent } from './email.component';

@NgModule({
  declarations: [
    EmailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EmailComponent]
})
export class EmailModule { }
