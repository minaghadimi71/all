import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationsComponent } from './animations/animations.component';
import {FormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { AddComponent} from './animations/add/add.component';
import { MyShopeComponent } from './my-shope/my-shope.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    EditComponent,
    AddComponent,
    MyShopeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
