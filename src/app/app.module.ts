import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {BreadcrumbModule as PrimeNGBreadcrumbModule} from 'primeng/breadcrumb';
import { BreadcrumbModule } from 'angular-crumbs';
import { Test1Component } from './test1.component';
import { Test2Component } from './test2.component';
import { Test3Component } from './test3.component';
import { HomeComponent } from './home.component';
import { Test31Component } from './test31.component';
import { Test32Component } from './test32.component';
import { Test321Component } from './test321.component';
import { Test322Component } from './test322.component';
import { DefaultComponent } from './default.component';



@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    HomeComponent,
    Test31Component,
    Test32Component,
    Test321Component,
    Test322Component,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelMenuModule,
    PrimeNGBreadcrumbModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
