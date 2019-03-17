import { Injectable } from '@angular/core';
import {Shop} from './shop';
import {Observable, of} from 'rxjs';
import {SHOPS} from './mock-shops';

@Injectable({
  providedIn: 'root'
})
export class ShopeService {
  shops: Shop[] = SHOPS;
  shop: Shop[];
mybag: Shop[] = [];
cash: number;
  constructor() { }
  getShops(): Observable<Shop[]> {
    return of(this.shops);
  }
  addShops(shop: Shop): Observable<Shop[]> {
    shop.id = this.getId(this.shops);
    this.shops.push(shop);
    return of (this.shops);
  }
  deleteShop(shop: Shop): Observable<Shop[]> {
    this.shops = this.shops.filter(h => h !== shop);
    return of(this.shops);
  }
  getshop(id: number): Observable<Shop[]> {
    this.shop = this.shops.filter(h => h.id === id);
    return of(this.shop);
  }
  getbag(): Observable<Shop[]> {
    return of(this.mybag);
  }
  buy(shop: Shop): Observable<Shop[]>  {
    this.mybag.push(shop);
    return of (this.mybag);
  }
  delete(shop: Shop): Observable<Shop[]> {
    this.mybag = this.mybag.filter(h => h !== shop);
    return of (this.mybag);
  }
  calce(): Observable<number> {
    this.cash = 0;
    for (let s of this.mybag) {
      this.cash +=  (+s.pr);
    }
    return of (+this.cash);
  }
  getId(shops: Shop[]): number {
    return shops.length > 0 ? Math.max(...shops.map(shop => shop.id)) + 1 : 1;
  }
}
