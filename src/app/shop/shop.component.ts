import {NgModule, Component} from '@angular/core';
import { ProductRepository } from '../model/procut.repository';
import { CategoriestRepository } from '../model/category.repository';
import { Product } from '../model/prosuct.module';
import { Categories } from '../model/categories.module';
import { Router } from '@angular/router';

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html'
  })

export class ShopComponent{

    public SelectedCategory : Categories = null;
    public productPerPage = 3;
    public selectedPage =1;

    ngOnInit() {
    }

    constructor(
        private productRepostiroy : ProductRepository,
        private categoryRepostiyor: CategoriestRepository,
        private router: Router
        
    ) {
    }

    get products(): Product[]{
        let index = (this.selectedPage -1) * this.productPerPage;
        if(this.SelectedCategory)
        {
           
            return this.productRepostiroy
                .getProdcuts(this.SelectedCategory)
                .slice(index, index + this.productPerPage);
        }
        else
        {
            return this.productRepostiroy.getProdcuts()
                .slice(index, index + this.productPerPage);
        }
       
    }

    get categories(): Categories[]{
        return this.categoryRepostiyor.getCategories();
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil((this.productRepostiroy.getProdcuts(this.SelectedCategory)).length/this.productPerPage))
                .fill(0)
                .map((a,i) => i + 1);
    }
    changePageNumber(pageNum){
        this.selectedPage =pageNum;
        
    }

    changeCategory(newCategory?: Categories)
    {
        this.SelectedCategory = newCategory;
    }

    yonlendir()
    {
        console.log("asdad");
        this.router.navigate(["/yeni-sayfa"]);
    }
}