import { MaterializeModule } from 'angular2-materialize';
import {NgsRevealModule} from 'ng-scrollreveal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { navBarComponent } from './navBar/navBar.component';

import { SplashPageComponent } from './splash-page/splash-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ProducerPageComponent } from './producer-page/producer-page.component';
import { AppShellComponent } from './app-shell/app-shell.component';


const appRoutes: Routes = [
  { path: '', component: AppShellComponent ,
   pathMatch: 'full'},
];



@NgModule({
  declarations: [
    AppComponent,
    navBarComponent,

    SplashPageComponent,

    ProducerPageComponent,

    AppShellComponent
  ],
  imports: [
    NgsRevealModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    MaterializeModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
