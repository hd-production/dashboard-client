import {FormControl, FormGroup} from '@angular/forms';

export function createRegisterForm() {
  return new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
}
