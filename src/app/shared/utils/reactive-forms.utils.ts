import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export class ReactiveFormsUtils {

  static eval(form: FormGroup): boolean {
    form.updateValueAndValidity();
    ReactiveFormsUtils.mark(form);
    return form.valid;
  }

  private static mark(control: AbstractControl) {
    control.markAsDirty();
    control.markAsTouched();

    const arr: FormArray = control as FormArray;
    if (arr && arr.controls && arr.controls.forEach) {
      arr.controls.forEach(value => ReactiveFormsUtils.mark(value));
    }
    const grp: FormGroup = control as FormGroup;
    if (grp && grp.controls) {
      for (const field in grp.controls) {
        ReactiveFormsUtils.mark(grp.get(field));
      }
    }
  }

  static markForm(formGroup: FormGroup): void {
    for (const i in formGroup.controls) {
      formGroup.controls[i].markAsDirty();
      formGroup.controls[i].updateValueAndValidity();
  }
  }

}
