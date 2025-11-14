import { ValidationOptions } from '../ValidationOptions';
export declare const ALLOW = "allow";
/**
 * If object has both allowed and not allowed properties a validation error will be thrown.
 */
export declare function Allow(validationOptions?: ValidationOptions): PropertyDecorator;
