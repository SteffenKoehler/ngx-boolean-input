# ngx-boolean-input

## ➕ Install

```sh 
npm install ngx-boolean-input
```

## 🤓 How to use

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

```html
<app-test></app-test> <!-- false -->
<app-test editable></app-test> <!-- true -->
<app-test [editable]="false"></app-test> <!-- false -->
<app-test editable="false"></app-test> <!-- false -->
<app-test [editable]="true"></app-test> <!-- true -->
```

## 💡 Inspiration

* Dominic Elm
https://dev.to/angular/decorators-do-not-work-as-you-might-expect-3gmj
* michaeljota https://github.com/angular/angular/issues/14761


## 📝 Note

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.
