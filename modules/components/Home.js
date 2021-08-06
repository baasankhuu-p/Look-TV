import html from "./utils.js";

class MyPay extends HTMLElement {
    constructor() {
        super();
        this.myShadowRoot = this.attachShadow({ mode: "open" });
        this.myShadowRoot.innerHTML = html`
        <style>
        @media only screen and (max-width: 760px)
            {h3 {
                margin: auto;
                border-bottom: 2px solid; 
                font-size: 12px;
            }}
                h3 {
                    margin: auto;
                    border-bottom: 2px solid;
                }
            
        
        </style>
        <h3>Багц</h3>
        `
    }

}

customElements.define("my-pay", MyPay);