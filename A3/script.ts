namespace A_3 {
    let formData: FormData = new FormData(document.forms[0]);

    let submitbuttonHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendHTML");
    submitbuttonHTML.addEventListener("click", function (): void { submit("HTML"); });
    let submitJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("sendJSON");
    submitJSON.addEventListener("click", function (): void { submit("JSON"); });

    async function send(): Promise<void> {
        let url: string = "localhost:8100";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let text: string = await response.text();
        console.log("Answer:");
        console.log(text);
    }
}