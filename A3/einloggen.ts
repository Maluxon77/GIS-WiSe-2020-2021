namespace A3 {


    let loginButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("loginButton");
    loginButton.addEventListener("click", function (): void { submit("einloggen"); });

    let serverantwort: HTMLElement = document.getElementById("loginAntwort");

    async function submit(_parameter: string): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gisaufgabe2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        if (_parameter == "einloggen") {
            url = url + "/einloggen";
        }

        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let text: string = await response.text();
        
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Einloggen.html") { 
        serverantwort.innerHTML = text; 
    }
    }
}