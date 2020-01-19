import MyDevices from "views/MyDevices.page.jsx";
import MyOrders from "views/MyOrders.page.jsx";
import Statistics from "views/Statistics.page.jsx";

var dashRoutes = [
  {
    path: "/devices",
    name: "My devices",
    icon: "design_bullet-list-67",
    component: MyDevices,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "My orders",
    icon: "files_single-copy-04",
    component: MyOrders,
    layout: "/admin"
  },
  {
    path: "/statistics",
    name: "Statistics",
    icon: "business_chart-bar-32",
    component: Statistics,
    layout: "/admin"
  }
];
export default dashRoutes;
