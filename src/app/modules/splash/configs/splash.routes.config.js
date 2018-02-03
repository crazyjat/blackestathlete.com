import createInjectable from "helpers/createinjectable";

const deps = [
    "$routeProvider",
];

export default createInjectable(deps, function() {
    //  Set the default routes
    this.$routeProvider
        .when("/splash", {
            template: "<splash></splash>",
        });
});