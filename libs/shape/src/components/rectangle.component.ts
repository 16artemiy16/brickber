import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'brickber-shape-rectangle',
  templateUrl: './rectangle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RectangleComponent {
  @Input()
  width: number = 0;

  @Input()
  height: number = 0;

  @Input()
  color: string = 'white';

  @Input()
  borderColor?: string;

  @Input()
  borderWidth?: string;

  @Input()
  borderStyle: string = 'solid';

  get style() {
    const { width, height, color: backgroundColor, borderColor, borderWidth, borderStyle } = this;
    return {
      width: `${width}px`,
      height: `${height}px`,
      borderStyle,
      backgroundColor,
      borderColor,
      borderWidth,
    };
  }
}
