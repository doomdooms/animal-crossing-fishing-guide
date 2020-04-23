import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import { FishInterface } from '../Fish';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() ImgUrl: string;
  @Input() location: string;
  @Input() price: number;
  @Input() n_month: Array<number>;
  @Input() s_month: Array<number>;
  @Input() time: string;
  @Input() shadow: string;
  @Input() rarity: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
