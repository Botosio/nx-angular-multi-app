import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'demo-global-nav',
  templateUrl: './global-nav.component.html',
  styleUrls: ['./global-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
