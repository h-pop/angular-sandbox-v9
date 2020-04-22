import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  subscription = 'Advanced';

  @ViewChild('form') customForm: NgForm;

  onSubmit() {
    console.log(this.customForm);
  }
}
