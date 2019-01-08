/* MANUAL */
const PageHome      = () => import("@/views/page/PageHome.vue")
const PageNotFound  = () => import("@/views/page/PageNotFound.vue")
const PageForm      = () => import("@/views/page/PageForm.vue")
const PageList      = () => import("@/views/page/PageList.vue")
const PagePreview   = () => import("@/views/page/PageList.vue")

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
        path: "/preview",
        name: "preivew",
        component: PagePreview
    }
];

export default routes;