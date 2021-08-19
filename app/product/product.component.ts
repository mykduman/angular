import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private ProductService: ProductService , private activatedRoute:ActivatedRoute) { 
    this.products = []
   }
  title = "Ürün Listesi"
  filter = ""
  products: Product[];
 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    this.ProductService.getProducts(params["categoryId"]).subscribe(data=>{this.products = data})
    })
    
  }
  addToCard() {
    this.alertifyService.success("Tebrikler")
  }

}
