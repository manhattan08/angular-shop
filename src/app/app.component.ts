import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./models/product";
import {Pagination} from "./models/pagination";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SHOP';
  products: Product[] = []

  constructor(private http:HttpClient) {
  }
  ngOnInit() : void{
    this.http.get<Pagination<Product[]>>("https://localhost:5001/api/products").subscribe({
      next: (response:any) => this.products = response.data,
      error: err => console.log(err),
      complete : () => {
        console.log("request completed");
        console.log("extra statment");
      }
    });
  }
}
