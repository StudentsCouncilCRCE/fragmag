import "~/assets/style/index.scss";
import DefaultLayout from "~/layouts/Default.vue";
export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    href:
      "https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap",
    rel: "stylesheet",
  });
  head.link.push({
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap",
    rel: "stylesheet",
  });
  head.link.push({
    href:
      "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    rel: "stylesheet",
  });
}
