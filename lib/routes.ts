import { PageRoute } from "./@types";

const routes: PageRoute[] = [
  {
    title: "Home",
    path: "/",
    hideFromNavBar: true,
  },
  {
    title: "Blog",
    path: "/blog"
  },
  {
    title: "Projects",
    path: "/projects"
  },
  {
    title: "Playlists",
    path: "/playlists"
  },
  {
    title: "Now Watching",
    path: "/now-watching"
  }
];

export default routes;
