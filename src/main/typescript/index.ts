import { Router } from "@vaadin/router"
import './FetchingData'
import './FetchingData2'

const outlet = document.querySelector('#app')
const router = new Router(outlet)
router.setRoutes([
    { path: '/', component: 'fetching-data' },
    { path: '/about', component: 'fetching-data2' }
])