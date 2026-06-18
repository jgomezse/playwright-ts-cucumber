export class ChallengingDOMPage {

    static readonly title: string = "//h3[contains(.,'Challenging DOM')]";
    static readonly buttonPlain: string = "//a[contains(@class,'button') and not(contains(@class,'alert') or contains(@class,'success'))]";
    static readonly buttonAlert: string = "//a[contains(@class,'alert')]";
    static readonly buttonSuccess: string = "//a[contains(@class,'success')]";
    static readonly tableRows: string = "//table//tr[td]";
    static readonly tableHeaders: string = "//table//th";

}
