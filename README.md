# ngx-boolean-input

## Install

```sh 
npm install --save ngx-boolean-input
```

## Use

```javascript
import { BooleanInput } from 'ngx-boolean-input';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  @Input()
  @BooleanInput()
  input: boolean;
}
```



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.
