import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ProductModule } from '../product/product.module';

// Rota de redirecionamento apenas. Redirecionando para a rota de produtos
const appRoutes: Routes = [
    {path: '', redirectTo: '/product', pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ProductModule,
    HttpModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
