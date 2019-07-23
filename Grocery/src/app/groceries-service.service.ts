import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  constructor() { 
    console.log('Hellow GroceriesServiceProvider Provider');
  }
}
