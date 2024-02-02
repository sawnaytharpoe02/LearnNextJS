export class AuthRequiredError extends Error{
    constructor(message: string = "Auth is required to access this resource"){
        super(message);
        this.name = "AuthRequiredError";
        this.stack = (<any>new Error()).stack;
        this.cause = message;
        this.message = message;
    }
}