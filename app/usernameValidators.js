System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            class UsernameValidators {
                static cannotContainSpaces(control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { cannotContainSpaces: true };
                    return null;
                }
                static shouldBeUnique(control) {
                    return new Promise((resolve, reject) => {
                        setTimeout(function () {
                            if (control.value == "mosh")
                                resolve({ shouldBeUnique: true });
                            else
                                resolve(null);
                        }, 1000);
                    });
                }
            }
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});
//# sourceMappingURL=usernameValidators.js.map