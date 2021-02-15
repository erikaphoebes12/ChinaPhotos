import { createRouter, createWebHistory} from 'vue-router'
import TheHome from "./pages/TheHome"
import DcHeroes from "./pages/DcHeroes"
import Calendar from "./pages/Calendar"
import Markdown from "./pages/Markdown"
import Slider from "./pages/Slider";
import Calculator from "./pages/Calculator";

const routes = [
    {path:'/', component: TheHome},
    {path:'/dc-heroes', component: DcHeroes},
    {path:'/calendar', component: Calendar},
    {path:'/markdown', component: Markdown},
    {path:'/slider', component: Slider},
    {path:'/calculator', component: Calculator},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router