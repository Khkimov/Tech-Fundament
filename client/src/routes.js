import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import { DEVICE_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  }
]
