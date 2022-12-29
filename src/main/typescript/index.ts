import { Router } from "@vaadin/router"

window.addEventListener('load', () => {
    initRouter();
});

function initRouter() {
    const outlet = document.querySelector('#app')
    const router = new Router(outlet)
    router.setRoutes([
        { path: '/', component: 'fetching-data'},
        { path: '/about', component: 'fetching-data2' }
    ])
}