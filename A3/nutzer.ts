namespace A3 {


    let nutzerButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("nutzerButton");
    nutzerButton.addEventListener("click", function (): void { submit("nutzer"); });

    let serverantwort: HTMLElement = document.getElementById("serverantwort");

    async function submit(_parameter: string): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gisaufgabe2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        if (_parameter == "nutzer") {
            url = url + "/nutzer";
        }

        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let text: string = await response.text();
        
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Nutzer.html") { 
        serverantwort.innerHTML = text; 
    }
    }
}