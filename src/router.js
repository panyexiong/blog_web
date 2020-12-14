import Vue from 'vue'
import Router from "vue-router";
import Home from '@/views/Home';
import Film from '@/views/Film';
import Center from '@/views/Center';

Vue.use(Router);


const router = new Router({
    routes: [
        {
            path: '/',
            name: '/home',
            component: Home
        },
        {
            path: '/film',
            component: Film
        },
        {
            path: '/center',
            component: Center
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
});

//全局守卫
// router.beforeEach(((to, from, next) => {
//     console.log(to, from, next);
//
// }))

export default router;