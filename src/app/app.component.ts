import { Component } from '@angular/core';
import {ShopeService} from './shope.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private shopeService: ShopeService) {}
  title = 'Shopping';
  t = this.shopeService.mybag;
}
