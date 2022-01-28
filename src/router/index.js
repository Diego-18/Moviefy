import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/Movies",
		name: "Movies",
		component: () => import("../views/Movies.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
