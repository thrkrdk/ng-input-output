import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rate-result',
  templateUrl: './rate-result.component.html',
  styleUrls: ['./rate-result.component.scss']
})
export class RateResultComponent implements OnInit {
  @Input() puanDetay = [];

  constructor() {
  }

  ngOnInit() {
  }

}
