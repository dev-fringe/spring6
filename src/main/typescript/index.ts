import { Router } from "@vaadin/router"

window.addEventListener('load', () => {
    initRouter();
});

function initRouter() {
    const outlet = document.getElementById('app')
    const router = new Router(outlet)
    router.setRoutes([
        { path: '/app', component: 'fetching-data'},
        { path: '/app/about', component: 'fetching-data2' },
        { path: '/app/todo', component: 'fetching-data3' }          
    ])
}