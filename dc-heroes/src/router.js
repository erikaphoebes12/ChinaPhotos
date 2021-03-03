import { createRouter, createWebHistory } from 'vue-router'
import TheHome from "./pages/TheHome"
import DcHeroes from "./pages/DcHeroes"
import Calendar from "./pages/Calendar"
import Markdown from "./pages/Markdown"
import Slider from "./pages/Slider"
import Calculator from "./pages/Calculator"
import ReusableModal from "./pages/ReusableModal"
import Chat from "./pages/Chat"
import store from './store/index'

const routes = [
    { path: '/', component: TheHome },
    { path: '/dc-heroes', component: DcHeroes },
    { path: '/calendar', component: Calendar },
    { path: '/markdown', component: Markdown },
    { path: '/slider-carousel', component: Slider },
    {
        path: '/calculator', component: Calculator,
        meta: { middleware: 'auth' }
    },
    { path: '/reusable-modal', component: ReusableModal },
    //Disable Chat to Home Component if User not LoggedIn
    {
        path: '/chat', component: Chat,
        meta: { middleware: 'auth' }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, _, next) => {
    if (to.meta.middleware) {
        const middleware = require('./middleware/${to.meta.middleware}');
        if (middleware) {
            middleware.default(next, store);
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router