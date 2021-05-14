import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
