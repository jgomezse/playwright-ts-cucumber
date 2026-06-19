export class FormAuthenticationPage {

    static readonly title: string = "//h2[contains(.,'Login Page')]";
    static readonly usernameInput: string = "//input[@id='username']";
    static readonly passwordInput: string = "//input[@id='password']";
    static readonly loginButton: string = "//button[@type='submit']";
    static readonly flashMessage: string = "//div[@id='flash']";
    static readonly secureAreaTitle: string = "//h2[contains(.,'Secure Area')]";

}
