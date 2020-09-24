import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PROTOCOL = 'http://';
  ENDPOINT = this.PROTOCOL+'localhost:4000/v1';

  constructor(
    private http: HttpClient
  ) { }

  getProduct(filter) {
    const headers = { 'Authorization': 'Bearer 123' }
    console.log(this.ENDPOINT+'/product'+filter)
    return this.http.get(this.ENDPOINT+'/product'+filter, { headers });
  }
}
