import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  public projectForm: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor(
    public matDialogRef: MatDialogRef<AddProjectComponent>
  ) { }

  ngOnInit() {
  }

  public submit() {
    this.matDialogRef.close(this.projectForm.value);
  }

}
