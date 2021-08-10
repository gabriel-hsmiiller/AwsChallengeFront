import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { HomeModule } from './pages/home/home.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { DevicesModule } from './pages/devices/devices.module';
import { HttpClientModule } from '@angular/common/http';

import { ErrorModalModule } from 'src/app/components/error-modal/error-modal.module'
import { ConfirmModalModule } from 'src/app/components/confirm-modal/confirm-modal.module'
import { WarnModalModule } from 'src/app/components/warn-modal/warn-modal.module'
import { SuccessModalModule } from 'src/app/components/success-modal/success-modal.module'

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
    HttpClientModule,
    ErrorModalModule,
    ConfirmModalModule,
    WarnModalModule,
    SuccessModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
