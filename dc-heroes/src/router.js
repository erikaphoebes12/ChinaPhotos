import { createRouter, createWebHistory} from 'vue-router'
import TheHome from "./pages/TheHome"
import DcHeroes from "./pages/DcHeroes"
import Calendar from "./pages/Calendar"
import Markdown from "./pages/Markdown"

const routes = [
    {path:'/', component: TheHome},
    {path:'/dc-heroes', component: DcHeroes},
    {path:'/calendar', component: Calendar},
    {path:'/markdown', component: Markdown},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router