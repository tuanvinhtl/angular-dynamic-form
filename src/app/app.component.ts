import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public form: FormGroup;
  unsubcribe: any;
  num = 0;

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(),
    });
  }

  onUpload(e) {
    console.log(e);
  }

  ngDistroy() {
    this.unsubcribe();
  }

  addForm() {
    this.num += 1;
    this.form.addControl('newcontrol' + this.num, new FormControl());
    this.form.addControl(
      'nested',
      new FormGroup({
        fields: new FormControl(),
        fields2: new FormGroup({
          fields: new FormControl(),
        }),
      })
    );
    console.log(this.form);
  }
}
