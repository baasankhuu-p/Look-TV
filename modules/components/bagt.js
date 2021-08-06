import html from "./utils.js";

class MyMovie extends HTMLElement {
    constructor() {
        super();
        this.myShadowRoot = this.attachShadow({ mode: "open" });
        this.myShadowRoot.innerHTML = html`
        <style>
        </style>
        <img src="Look-TV/HIMG/${parseInt(this.getAttribute("id"))}.jpg">
        <img src="Look-TV/HIMG/${parseInt(this.getAttribute("id"))+1}.jpg">
        <img src="Look-TV/HIMG/${parseInt(this.getAttribute("id"))+2}.jpg">
        <img src="Look-TV/HIMG/${parseInt(this.getAttribute("id"))+3}.jpg">
        `
    }
}

customElements.define("my-movie", MyMovie);