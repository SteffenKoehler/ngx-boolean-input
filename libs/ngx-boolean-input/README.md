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
  editable: boolean;
}
```

```html
<app-component></app-component> <!-- false -->
<app-component editable></app-component> <!-- true -->
<app-component [editable]="false"></app-component> <!-- false -->
<app-component editable="false"></app-component> <!-- false -->
<app-component [editable]="true"></app-component> <!-- true -->
```

## 💡 Inspiration

* Dominic Elm
https://dev.to/angular/decorators-do-not-work-as-you-might-expect-3gmj
* michaeljota https://github.com/angular/angular/issues/14761


## 📝 Note

This library was generated with [Nx](https://nx.dev).


