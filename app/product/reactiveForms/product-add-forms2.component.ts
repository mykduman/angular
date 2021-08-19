import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryComponent } from 'src/app/category/category.component';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddForms2Component implements OnInit {
  productAddForm: FormGroup; 
  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService, private productService:ProductService, private alertifyService:AlertifyService) {this.categories= [],
    this.productAddForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'imageUrl': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'categoryId': new FormControl(null, Validators.required),
    })
   } 
   categories: Category[];
  product:Product = new Product(3,"",0,0,"","")

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      name:["",Validators.required],
      description:["",Validators.required],
      imageUrl:["",Validators.required],
      price:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{this.categories = data})
  }
  add(){
    if(this.productAddForm.valid){
    this.product = Object.assign({},this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data=>{
    this.alertifyService.success(data.name +"başarıyla tamamlandı")
  })}
}
