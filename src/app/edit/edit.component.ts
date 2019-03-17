import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Shop} from '../shop';
import {SHOPS} from '../mock-shops';
import {ShopeService} from '../shope.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  shope: Shop[];
  constructor( private route: ActivatedRoute, private shopeService: ShopeService) { }

  ngOnInit() {
    this.getshop();
  }
getshop() {
  const id = +this.route.snapshot.paramMap.get('id');
  this.shopeService.getshop(id).subscribe(shope => this.shope = shope);
}
}
