import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  customFormGroup: FormGroup;
  projectStatuses: string[] = ['Stable', 'Critical', 'Finished'];

  onSubmit() {
    console.log(this.customFormGroup);
  }

  ngOnInit() {
    this.customFormGroup = new FormGroup({
      projectName: new FormControl('', [Validators.required/*, this.forbiddenProjectNames */], this.forbiddenProjectNamesAsync),
      email: new FormControl('', [Validators.required, Validators.email]),
      projectStatus: new FormControl('')
    });
  }

  forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { projectNameForbidden: true };
    }
    return null;
  }

  forbiddenProjectNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ projectNameForbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
