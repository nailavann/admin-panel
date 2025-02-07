import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/auth/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {API_URL} from "./injection-token";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpResponseInterceptor} from "./interceptors/http-response.interceptor";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HttpRequestInterceptor} from "./interceptors/http-request.interceptor";
import {LayoutComponent} from './components/layout/layout.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: API_URL, useValue: 'http://api.panel'},
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
