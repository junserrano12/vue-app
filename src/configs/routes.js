const PageHome      = () => import("../views/page/PageHome.vue");
const PageSample    = () => import("../views/page/PageSample.vue");
const PageNotFound  = () => import("../views/page/PageNotFound.vue");

const routes = [
    {
        path: "*",
        name: "notfound",
        component: PageNotFound
    },
    {
        path: "/",
        name: "home",
        component: PageHome
    },
    {
        path: "/sample",
        name: "sample",
        component: PageSample
    }
];

export default routes;