/* MANUAL */
const PageHome      = () => import("@/views/page/PageHome.vue")
const PageNotFound  = () => import("@/views/page/PageNotFound.vue")
const PageForm      = () => import("@/views/page/PageForm.vue")
const PageList      = () => import("@/views/page/PageList.vue")
const PagePosts   = () => import("@/views/page/PagePosts.vue")

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
        path: "/form",
        name: "form",
        component: PageForm
    },
    {
        path: "/list",
        name: "list",
        component: PageList
    },
    {
        path: "/posts",
        name: "posts",
        component: PagePosts
    }
];

export default routes;