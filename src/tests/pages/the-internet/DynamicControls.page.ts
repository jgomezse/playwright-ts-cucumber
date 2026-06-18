export class DynamicControlsPage {

    static readonly title: string = "//h4[contains(.,'Dynamic Controls')]";
    static readonly checkbox: string = "//form[@id='checkbox-example']//input[@type='checkbox']";
    static readonly removeAddButton: string = "//button[text()='Remove' or text()='Add']";
    static readonly enableDisableButton: string = "//button[text()='Enable' or text()='Disable']";
    static readonly message: string = "//p[@id='message']";
    static readonly input: string = "//form[@id='input-example']//input[@type='text']";

}
