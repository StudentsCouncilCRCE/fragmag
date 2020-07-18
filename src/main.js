import "~/assets/style/index.scss";
import "css-doodle";
import DefaultLayout from "~/layouts/Default.vue";
export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    href:
      "https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap",
    rel: "stylesheet",
  });
}
