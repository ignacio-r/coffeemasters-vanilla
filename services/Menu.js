
//In the browser it will need the .js extension
import API from "./API.js";

export async function loadData(){
    app.store.menu = await API.fetchMenu();
}