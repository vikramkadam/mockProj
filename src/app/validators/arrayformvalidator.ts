import { AbstractControl, ValidationErrors } from "@angular/forms";


    export function fandlMismatch(control:AbstractControl):ValidationErrors | null {

    const firstName = control.get('firstName')?.value;
    const lastName = control.get('lastName')?.value;    

    if(firstName == lastName)
    {
        return {'fandlMismatch':true};
    }
    else{
        return null;
    }

}