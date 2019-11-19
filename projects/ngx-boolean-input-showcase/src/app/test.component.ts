import { Component, Input } from '@angular/core';
import { BooleanInput } from 'ngx-boolean-input';

@Component({
  selector: 'app-test',
  template: `<h1>From {{name}}!</h1> Am I editable? {{editable}}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class TestComponent {
  @Input() name: string;

  @Input()
  @BooleanInput()
  editable: boolean;

}
