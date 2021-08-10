import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { HomeModule } from './pages/home/home.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { DevicesModule } from './pages/devices/devices.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    BrowserAnimationsModule,
    HomeModule,
    CategoriesModule,
    DevicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
