import { Control } from 'angular2/common';

export class UsernameValidators{

    static cannotContainSpaces(control: Control){

        if(control.value.indexOf(' ')>=0)
            return {cannotContainSpaces: true};

        return null;
    }


    static shouldBeUnique(control: Control){
            return new Promise((resolve,reject) => {
                setTimeout(function(){
                    if(control.value=="mosh")
                        resolve({shouldBeUnique: true});
                    else
                        resolve(null);
                },1000);
        });

    }
}