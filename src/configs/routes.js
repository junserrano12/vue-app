const routes = [
    {
        path: "*",
        name: "notfound",
        component: "PageNotFound"
    },
    {
        path: "/",
        name: "home",
        component: "PageHome"
    },
    {
        path: "/form",
        name: "form",
        component: "PageForm"
    },
    {
        path: "/list",
        name: "list",
        component: "PageList"
    },
    {
        path: "/posts",
        name: "posts",
        component: "PagePosts"
    }
]

export default routes;