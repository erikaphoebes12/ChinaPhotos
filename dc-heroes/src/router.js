import { createRouter, createWebHistory} from 'vue-router'
import TheHome from "./pages/TheHome"
import DcHeroes from "./pages/DcHeroes"
import Calendar from "./pages/Calendar"
import Markdown from "./pages/Markdown"
import Slider from "./pages/Slider"
import Calculator from "./pages/Calculator"
import ReusableModal from "./pages/ReusableModal"
import Chat from "./pages/Chat"

const routes = [
    {path:'/', component: TheHome},
    {path:'/dc-heroes', component: DcHeroes},
    {path:'/calendar', component: Calendar},
    {path:'/markdown', component: Markdown},
    {path:'/slider-carousel', component: Slider},
    {path:'/calculator', component: Calculator},
    {path:'/reusable-modal', component: ReusableModal},
    {path:'/chat', component: Chat},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router