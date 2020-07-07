import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { ContainedComponent } from './contained/contained.component';
import { AnimboxComponent } from './animbox/animbox.component';
import { MouseComponent } from './mouse/mouse.component';
import { FadeblockComponent } from './fadeblock/fadeblock.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BasicComponent, AdvancedComponent, ContainedComponent, AnimboxComponent, MouseComponent, FadeblockComponent],
  imports: [BrowserAnimationsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
