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
            routes.push({
                            "path": getPath(matched[1], "path"),
                            "name": getPath(matched[1], "name"),
                            "component": components[matched[1]]
                        })
        }

    })

    return routes;
}

const components = importComponentsPages(pages);
const routes = routesPage(pages, components);

export default routes;