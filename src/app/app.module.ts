import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppShellComponent } from './app-shell/app-shell.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'home', component: AppShellComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent,
    NavBarComponent,
    SplashPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
