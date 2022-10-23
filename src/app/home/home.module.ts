import { SnackbarService } from './../shared/services/snackbar.service';
import { RestHomeService } from './rest-home.service';
import { JWTService } from './../core/services/jwt.service';
import {  RouterModule } from '@angular/router';
import { LayoutModule } from './../layouts/layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [HomeComponent, ProductListComponent, ProductCardComponent],
  imports: [
    CommonModule, 
    LayoutModule,
    RouterModule,
  ],
  exports: [HomeComponent],
  providers: [
    JWTService,
    RestHomeService,
    SnackbarService
  ]
})
export class HomeModule {}
