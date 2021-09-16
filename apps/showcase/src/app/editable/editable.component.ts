import { Component, Input } from '@angular/core';
import { BooleanInput } from 'ngx-boolean-input';

@Component({
  selector: 'ngx-boolean-input-editable',
  template: `<h1>From {{name}}!</h1> Am I editable? {{editable}}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class EditableComponent {
  @Input()
  name: string | undefined;

  @Input()
  @BooleanInput()
  editable: boolean | string | undefined;

}
