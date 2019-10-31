import {Injectable} from '@angular/core';
import { Categories } from './categories.module';
import { RestService } from './rest.service';

@Injectable()

export class CategoriestRepository {
   
    private categories: Categories [] = [];

    constructor (private restService : RestService){
        this.restService.getCategories().subscribe(data => this.categories=data);;
    }
        

    ngOnInit() {
        
    }

    getCategory(id: number) : Categories{
        return this.categories.find(i => i.id = id);
    }
    getCategories(): Categories[] {
        return this.categories;
    }
}