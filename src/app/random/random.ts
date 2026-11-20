import { Component, Input, OnInit } from '@angular/core';
import { Random as RandomService } from '../random';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.html',
  styleUrl: './random.css'
})
export class Random implements OnInit {
  myNumber!: number;
  @Input() max: number = 10;

  constructor(private randomService: RandomService) {}

  ngOnInit(): void {
    this.btnClick();
  }

  btnClick() {
    this.myNumber = this.randomService.randomNumber(this.max);
  }

  isSmallerThanHalf(): boolean {
    return this.myNumber < 0.5 * this.max;
  }
}
