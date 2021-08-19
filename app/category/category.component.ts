import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService,AlertifyService]
})
export class CategoryComponent implements OnInit {

  constructor(private CategoryService:CategoryService ,private alertifyService: AlertifyService ) {
    this.categories = []
   }
  title="Kategori Listesi"
  categories: Category[];

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe(data=>{this.categories = data})
  }

}
