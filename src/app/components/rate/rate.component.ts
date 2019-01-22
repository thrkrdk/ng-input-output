import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  @Input() toplamPuan;
  @Input() kisiSayisi;

  @Output() puanDegistir = new EventEmitter<number>();

 constructor() {
  }

  ngOnInit() {
  }

  oyVer(puan: number) {
    this.puanDegistir.emit(puan);
  }
}
