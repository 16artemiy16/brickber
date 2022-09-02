import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// TODO: there is a problem with triangle border

@Component({
  selector: 'brickber-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapeComponent {
  @Input()
  type: 'rectangle' | 'triangle' | 'circle' = 'rectangle';

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

  get class() {
    return `shape shape-${this.type}`
  }
}
