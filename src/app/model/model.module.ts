import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { RestService } from './rest.service';
import { ProductRepository } from './procut.repository';
import { CategoriestRepository } from './category.repository';

@NgModule({
    imports: [HttpClientModule],
    providers: [RestService, ProductRepository, CategoriestRepository]
})

export class ModelModule{}