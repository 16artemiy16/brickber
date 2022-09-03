import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'brickber-selection-frame',
  templateUrl: './selection-frame.component.html',
  styleUrls: ['./selection-frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionFrameComponent {
  @Input()
  isSelected: boolean = false;
}
