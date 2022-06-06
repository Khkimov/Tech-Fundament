import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import { ADMIN_ROUTE, DEVICE_ROUTE, SHOP_ROUTE, LOGIN_ROUTE } from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  }
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  }
]
