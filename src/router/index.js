import Vue from "vue"
import Router from "vue-router"
import configs from "@/configs/routes.js"

Vue.use(Router)

function routes(configs) {
    const routes = [];

    configs.forEach( configs => {
        const component = () => import("@/views/page/"+configs.component+".vue");

        routes.push({
            "path": configs.path,
            "name": configs.name,
            "component": component
        })

    })

    return routes;
}

const router = new Router({
    mode: 'history',
    routes: routes(configs)
});

export default router;