import { Component, OnInit } from '@angular/core';
import {Shop} from '../shop';
import {Router} from '@angular/router';
import {ShopeService} from '../shope.service';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css']
})
export class AnimationsComponent implements OnInit {
  shops: Shop[];
  constructor(private router: Router, private shopeService: ShopeService) { }

  ngOnInit() {
    this.getAnimations();
  }
  getAnimations() {
    this.shopeService.getShops().subscribe(shops => this.shops = shops);
  }
  delete(shop: Shop): void {
    this.shops = this.shops.filter(h => h !== shop);
    this.shopeService.deleteShop(shop).subscribe();
  }
  buy(shop: Shop): void {
    this.shopeService.buy(shop).subscribe();
  }
}
