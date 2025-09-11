import { type RouteConfig, route, index, layout } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("form/:slug", "routes/form/$slug.tsx"),
    route("login", "routes/login.tsx"),
] satisfies RouteConfig;
