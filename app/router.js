import { AboutController } from "./controllers/AboutController.js";
// import { HomeController } from "./controllers/HomeController.js";
import { GiftsController } from "./controllers/GiftController.js";

export const router = [
  {
    path: '',
    controller: [GiftsController,]
  },

]