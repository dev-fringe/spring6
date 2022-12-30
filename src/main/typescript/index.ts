import { Router } from "@vaadin/router"

window.addEventListener('load', () => {
    initRouter();
});

function initRouter() {
    const outlet = document.querySelector('#app')
    const router = new Router(outlet)
    router.setRoutes([
        { path: '/app', component: 'fetching-data'},
        { path: '/app/about', component: 'fetching-data2' }
    ])
}