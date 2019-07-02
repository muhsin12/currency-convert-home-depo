import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-depotooltip',
  templateUrl: './home-depotooltip.component.html',
  styleUrls: ['./home-depotooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeDepotooltipComponent {
  @Input() text = '';

}
