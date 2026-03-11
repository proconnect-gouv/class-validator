import { ValidationTypes } from '../../validation/ValidationTypes';
import { ValidationMetadata } from '../../metadata/ValidationMetadata';
import { getMetadataStorage } from '../../metadata/MetadataStorage';
export var VALIDATE_PROMISE = 'validatePromise';
/**
 * Resolve promise before validation
 */
export function ValidatePromise(validationOptions) {
    return function (object, propertyName) {
        var args = {
            name: VALIDATE_PROMISE,
            type: ValidationTypes.PROMISE_VALIDATION,
            target: object.constructor,
            propertyName: propertyName,
            validationOptions: validationOptions,
        };
        getMetadataStorage().addValidationMetadata(new ValidationMetadata(args));
    };
}
//# sourceMappingURL=ValidatePromise.js.map