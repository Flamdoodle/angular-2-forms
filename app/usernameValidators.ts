import {Control} from 'angular2/common';

 export class UsernameValidators {

     static shouldBeUnique(control: Control){
         return new Promise((resolve, reject) => {

         });
     }

    static cannotContainSpace(control: Control){
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }

        return null;
    }

}