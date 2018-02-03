import angular from "angular";
import routes from "./configs/splash.routes.config";
import splashComponent from "./components/splash/splash.component";

const deps = [];

const MODULE_NAME = "splash";

angular.module(MODULE_NAME, deps)
       .config(routes)
       .component(splashComponent.name, splashComponent);

export default MODULE_NAME;