import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './shared/components/main/main.component';
import { HomeComponent } from './views/home/home.component';
import { VirtualKeyboardComponent } from './shared/components/virtual-keyboard/virtual-keyboard.component';
import { KeyComponent } from './shared/components/key/key.component';
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    VirtualKeyboardComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
