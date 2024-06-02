// name-article.validator.ts
import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';

export function NameArticleValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
    const inputValue = control.value;

    if (forbiddenNames.includes(inputValue)) {
      return of({ forbiddenName: { value: inputValue } });
    }

    return of(null);
  };
}
