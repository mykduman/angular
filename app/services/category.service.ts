import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  path="http://localhost:3000/categories"
  getCategories(){return this.http.get<Category[]>(this.path);
}}
