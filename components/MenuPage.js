class  MenuPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
    }

    //When the component is attached to the DOM
    connectedCallback() {
        
        const template = document.getElementById("menu-page-template");
        const content = template.content.cloneNode(true);
        this.appendChild(content);
    }
}
customElements.define("menu-page", MenuPage);

export default MenuPage