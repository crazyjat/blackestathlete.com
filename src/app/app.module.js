import "app.style.less";
import angular from "angular";
import ngRoute from "angular-route";
import defaultRoutes from "configs/defaultroutes.config";

import splash from "modules/splash/splash.module";

const APP_NAME = "blackestathlete.com";

const deps = [
    ngRoute,

    splash,
];

angular.module(APP_NAME, deps)
       .config(defaultRoutes);

export default APP_NAME;