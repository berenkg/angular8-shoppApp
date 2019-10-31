import { Component } from '@angular/core';
import {Routes} from "@angular/router";
import { ShopComponent } from './shop/shop.component';
import { NotfoundComponent } from './notfound/notfound.component';



@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Shop App';
}
