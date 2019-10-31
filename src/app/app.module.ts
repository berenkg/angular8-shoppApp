import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShopModule} from "./shop/shop.module";
import { ShopComponent } from './shop/shop.component';

import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './shop/navbar/navbar.component';
import { YeniSayfaComponent } from './yeni-sayfa/yeni-sayfa.component';

const appRoutes: Routes = [
    {path:"", component:ShopComponent},
    {path:"deneme", component:ShopComponent},
    {path:"yeni-sayfa", component:YeniSayfaComponent, children: [
      {path:":id", component:YeniSayfaComponent}
    ]},
    {path:"**", component:NotfoundComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    YeniSayfaComponent,
    
  ],
  imports: [
    BrowserModule,
    ShopModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
