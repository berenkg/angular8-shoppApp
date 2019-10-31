import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { ShopComponent } from "./shop.component";
import { ModelModule } from '../model/model.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [ShopComponent, NavbarComponent, NotfoundComponent],
    exports: [ShopComponent]
})

export class ShopModule{}