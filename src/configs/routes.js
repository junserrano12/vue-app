/* DYNAMIC */
const pages = require.context('@/views/page', true, /[A-Za-z0-9-_,\s]+\.vue$/i);

function importComponentsPages(pages) {
    const viewspage = [];

    pages.keys().forEach(key => {

        const matched = key.match(/([A-Za-z0-9-_]+)\./i);

        if (matched && matched.length > 1) {
            const page = matched[1];
            viewspage[page] = () => import("@/views/page/"+page+".vue");
        }

    })

    return viewspage;
}

function getPath(page, type) {
    const matched = page.match(/Page([A-Za-z0-9-_]+)/i);

    if (matched && matched.length > 1) {
        if ( type === "path" ) {
            if ( matched[1].toLowerCase() === "home" ) {
                return "/";
            } else if ( matched[1].toLowerCase() === "notfound" ) {
                return "*";
            } else {
                return "/"+matched[1].toLowerCase();
            }
        } else {
            return matched[1].toLowerCase();
        }
    }
}

function routesPage(pages, components) {
    const routes = [];

    pages.keys().forEach(key => {

        const matched = key.match(/([A-Za-z0-9-_]+)\./i);

        if (matched && matched.length > 1) {
            const page = matched[1];

            const name = "";

            routes.push({
                            "path": getPath(page, "path"),
                            "name": getPath(page, "name"),
                            "component": components[page]
                        })
        }

    })

    return routes;
}

var components = importComponentsPages(pages);
var routes2 = routesPage(pages, components);

/* MANUAL */
// const PageHome      = () => import("@/views/page/PageHome.vue");
// const PageNotFound  = () => import("@/views/page/PageNotFound.vue");
// const PageForm      = () => import("@/views/page/PageForm.vue");
// const PageList      = () => import("@/views/page/PageList.vue");

// const routes = [
//     {
//         path: "*",
//         name: "notfound",
//         component: PageNotFound
//     },
//     {
//         path: "/",
//         name: "home",
//         component: PageHome
//     },
//     {
//         path: "/form",
//         name: "form",
//         component: PageForm
//     },
//     {
//         path: "/list",
//         name: "list",
//         component: PageList
//     }
// ];

export default routes2;