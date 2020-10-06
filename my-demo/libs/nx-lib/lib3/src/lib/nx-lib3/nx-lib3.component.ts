import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'demo-nx-lib3',
  templateUrl: './nx-lib3.component.html',
  styleUrls: ['./nx-lib3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NxLib3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
