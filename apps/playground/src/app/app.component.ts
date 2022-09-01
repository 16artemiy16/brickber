import { Component } from '@angular/core';

@Component({
  selector: 'brickber-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';

  readonly shapeTypes: ['triangle', 'circle', 'rectangle'] = ['triangle', 'circle', 'rectangle'];
}
