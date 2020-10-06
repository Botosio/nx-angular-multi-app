import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'demo-lib1',
  templateUrl: './lib1.component.html',
  styleUrls: ['./lib1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lib1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
