import { Component, OnInit } from '@angular/core';
import {ShopeService} from '../shope.service';
import {Shop} from '../shop';
@Component({
  selector: 'app-my-shope',
  templateUrl: './my-shope.component.html',
  styleUrls: ['./my-shope.component.css']
})
export class MyShopeComponent implements OnInit {
  constructor(private shopeService: ShopeService) { }
shops: Shop[];
  cash: number = 0;
  ngOnInit() {
    this.getBuy();
  }
  getBuy() {
    this.shopeService.getbag().subscribe(shope => this.shops = shope);
  }
  delete(shop: Shop): void {
    this.shopeService.delete(shop).subscribe(shope => this.shops = shope);
  }
  calce() {
    this.shopeService.calce().subscribe(n => this.cash = +n);
  }
}
