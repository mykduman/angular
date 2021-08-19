import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormControl, NgForm } from '@angular/forms';
import { CategoryComponent } from 'src/app/category/category.component';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/category/category';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { model } from './model';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService,ProductService,AlertifyService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(private categoryService:CategoryService,private productService:ProductService, private alertifyService:AlertifyService) { this.categories= []}
  
  model: Product = new Product(11, "Monster A3", 8000, 1, "Monster a3", "https://cdn.akakce.com/monster/monster-tulpar-t7-v18-3-2-i9-9900k-64-gb-1-tb-10-tb-ssd-rtx2080-17-3-4k-notebook-z.jpg");




  
  categories: Category[];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }
 
  add(form:NgForm){
  this.productService.addProduct(this.model).subscribe(data=>{
    this.alertifyService.success(data.name +"başarıyla tamamlandı")
  });
  }
}
