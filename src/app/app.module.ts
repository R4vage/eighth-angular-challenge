import { RefreshInterceptor } from './core/interceptors/RefreshInterceptor';
import { GlobalRestService } from './core/services/global-rest.service';
import { AuthInterceptor } from './core/interceptors/AuthInterceptor';
import { HomeModule } from './home/home.module';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [
    GlobalRestService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RefreshInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
