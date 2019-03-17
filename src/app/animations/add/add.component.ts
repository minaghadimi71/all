import { Component, OnInit } from '@angular/core';
import {Shop} from '../../shop';
import {ShopeService} from '../../shope.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  shop: Shop;
  constructor(private shopService: ShopeService) { }

  ngOnInit() {
  }
add(name: string, img: string, pr: number) {
  name = name.trim();
  if (!name || !img || !pr) { return; }
    this.shop = {
      id : 0,
      pr : pr,
      name : name,
      image : img,
};
  this.shopService.addShops(this.shop).subscribe();
}
}
