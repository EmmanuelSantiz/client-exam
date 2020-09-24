import { Component } from '@angular/core';
import { ApiService } from '../app/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientprueba2309';
  code: string = '';
  sku: string = '';

  products: any [] = [];

  constructor(
    private API: ApiService
  ) {
  }

  setFilter(data) {
    console.log(data)
    if(data.target.id == 'sku') {
      this.sku = data.target.value;
    }

    if(data.target.id == 'code') {
      this.code = data.target.value;
    }
  }

  search() {
    var filter = '?';
    if(this.sku != '') {
      filter = filter == '?' ? (filter + 'sku='+this.sku) : (filter + '&sku='+this.sku);
    }

    if(this.code != '') {
      filter = filter == '?' ? (filter + 'code='+this.code) : (filter + '&code='+this.code);
    }

    this.API.getProduct(filter).subscribe((data: any) => {
      console.log(data)
      if(data.result == 'ok') {
        this.products = data.data;
      }
    });
  }

  ngOnInit() {
    this.API.getProduct('').subscribe((data: any) => {
      console.log(data)
      if(data.result == 'ok') {
        this.products = data.data;
      } else {
        alert('Ocurrio un error en el API-REST')
      }
    });
  }
}
