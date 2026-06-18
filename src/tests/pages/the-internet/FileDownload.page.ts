export class FileDownloadPage {

    static readonly title: string = "//h3[contains(.,'File Download')]";
    static readonly fileLink = (fileName: string) => `//a[contains(.,'${fileName}')]`;

}
