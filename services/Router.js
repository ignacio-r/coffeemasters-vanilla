

//TODO: Make a more reusable router by receiving a collection of routes as REGEX -> COMPONENT
const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(element => {
            element.addEventListener("click", event => {
                //This arrow function is an event handler    
                event.preventDefault();
                console.log("Link clicked");
                //The first one returns the full path
                //const url = event.target.href;
                const url = event.target.getAttribute("href");
                Router.go(url);
            })
        });
        //Event listener for URL changes
        window.addEventListener("popstate", event => {
            Router.go(event.state.route, false);
        })

        //Check the initial URL
        Router.go(location.pathname);
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`);
        if(addToHistory){
            history.pushState({route}, null, route);
        }
        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("menu-page");
                pageElement.textContent = "Menu"
                break;
            case "/order":
                pageElement = document.createElement("order-page");
                pageElement.textContent = "Your order";
                break;
            default:
                if(route.startsWith("/product-")){
                    pageElement = document.createElement("details-page");
                    pageElement.textContent = "Details";
                    const paramId = route.substring(route.lastIndexOf("-"+1));
                    pageElement.dataset.id = paramId;
                }
        }
        if (pageElement){
            //This can also be achived with this
            //document.querySelector("main").children[0].remove();
            const cache = document.querySelector("main");
            cache.innerHTML = ""
            cache.appendChild(pageElement);
            window.scrollX = 0
            window.screenY = 0
        }
        
    }
}

export default Router;