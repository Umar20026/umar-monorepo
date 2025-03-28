import { Component } from '@angular/core';
import { unicornrocket } from '@umar-monorepo/shared/utils';

@Component({
  selector: 'app-nx-welcome',
  template: `
    <h1> hello my name is {{ emoji }}</h1>
  `,
})
export class NxWelcomeComponent {
  emoji = unicornrocket;
}
