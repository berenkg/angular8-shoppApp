import {Injectable} from '@angular/core';
import { Product } from './prosuct.module';
import { RestService } from './rest.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { map } from 'rxjs/operators';
import { Categories } from './categories.module';

@Injectable()

export class ProductRepository {
    private products: Product[] = [];
    constructor (private restService : RestService){
        
       this.restService.getProducts().subscribe(data => this.products=data);
       
    }

    ngOnInit() {
    }

    getProduct(id: number) : Product{
        return this.products.find(i => i.id = id);
    }

    getProdcuts(SelectedCategory?: Categories): Product[] {

        if(SelectedCategory){
            console.log(this.products)
            return this.products.filter(data => data.category==SelectedCategory.name);
        }
            
        else{
            return this.products;
        }
            
    }
}